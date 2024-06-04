'use client';

import React, { useEffect, useState } from 'react';
import { AdminLayout } from '@/src/layout';
import * as Kilt from '@kiltprotocol/sdk-js';
import { useWeb3Auth } from '@/src/hooks/useWeb3Auth';
import { ToastContainer } from 'react-toastify';
import { useToast } from '@/src/hooks/useToast';

const Transactions: React.FC = () => {
  const { showToast } = useToast();
  const { web3auth, provider } = useWeb3Auth();
  const [polkadotKeyPair, setPolkadotKeyPair] = useState<Kilt.KiltKeyringPair>();

  useEffect(() => {
  }, [web3auth, provider]);

  return (
    <>
      <AdminLayout>
        <div>
          <div className="rounded-sm p-4 dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5 w-[95%]">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">Create DID</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="flex flex-row w-full h-10 py-2 justify-center rounded-full bg-primary hover:bg-opacity-90 p-3 font-medium text-gray gap-3"
          >
            <div>Create Full DID</div>
          </button>
        </div>
        <ToastContainer />
      </AdminLayout>
    </>
  );
};

export default Transactions;
