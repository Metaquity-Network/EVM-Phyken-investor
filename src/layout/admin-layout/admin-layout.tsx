import React, { PropsWithChildren, useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '@/src/layout/admin-layout/Sidebar';
import Header from '@/src/layout/admin-layout/Header';
import axios from 'axios';
import { useAccount, useSignMessage } from 'wagmi';
import { useToast } from '@/src/hooks/useToast';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

export default function AdminLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { data, signMessage } = useSignMessage();
  const [signature, setSignature] = useState<`0x${string}` | null>(null);
  const { showToast } = useToast();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const storedSignature = localStorage.getItem('signature');
    if (storedSignature) {
      setSignature(storedSignature as `0x${string}`);
    }
  }, []);

  useEffect(() => {
    const authenticate = async () => {
      if (signature && address && isAuthenticating) {
        try {
          const response = await axios.post('/api/auth/login', {
            address: address,
            signature: signature,
            userType: 'INVESTOR',
          });

          if (response.status === 200) {
            localStorage.setItem('signature', signature);
            setIsAuthenticating(false);
            router.push('/waitlist');
          } else {
            showToast('Authentication failed', { type: 'error' });
            setIsAuthenticating(false);
          }
        } catch (error: any) {
          if (error.response && error.response.data && error.response.data.message) {
            showToast(`Authentication failed: ${error.response.data.message}`, { type: 'error' });
          } else {
            showToast('Authentication failed: An unexpected error occurred', { type: 'error' });
          }
          setIsAuthenticating(false);
        }
      }
    };

    if (signature && isAuthenticating) {
      authenticate();
    }
  }, [signature, address, isAuthenticating]);

  useEffect(() => {
    if (isConnected && address && !signature && !localStorage.getItem('signature')) {
      const message = `Sign this message to authenticate with Phyken. Address: ${address}`;
      signMessage({ message });
    }
  }, [isConnected, address, signature]);

  useEffect(() => {
    if (data) {
      setSignature(data);
      setIsAuthenticating(true);
    }
  }, [data]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Phyken Network</title>
        <link rel="preload" as="image" href="/favicon.png"></link>
        <meta
          name="description"
          content="An RWA asset tokenization and asset fractionalization protocol, particularly emphasizing GRWA: renewable energies and solar power on the blockchain"
        />
      </Head>

      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="h-auto">
              <div className="mx-4 mt-5 p-4 md:p-6 2xl:p-10 bg-white h-full dark:bg-boxdark-2">{children}</div>
            </main>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
