import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygonAmoy } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TrueScholar',
  projectId: 'YOUR_PROJECT_ID', // You can get one from cloud.walletconnect.com or leave as is for testing
  chains: [polygonAmoy],
  ssr: true, 
});