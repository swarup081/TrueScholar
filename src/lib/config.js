import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygonAmoy } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TrueScholar',
  // Use the env variable or a fallback
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL 
      ? { http: process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL }
      : undefined, // Falls back to public RPC if env is missing
  },
  ssr: true, 
});