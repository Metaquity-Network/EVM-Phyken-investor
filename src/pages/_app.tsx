import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { celo } from 'wagmi/chains';
import './../../styles/satoshi.css';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { GoogleAnalytics } from '@next/third-parties/google';

const config = getDefaultConfig({
  appName: 'Phyken Investor',
  projectId: 'metaquityApp',
  chains: [celo],
  ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
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
      <GoogleAnalytics gaId="G-1X0MT4F7P0" />
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default MyApp;
