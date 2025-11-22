'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
// 1. Import lightTheme instead of darkTheme
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { config } from '../lib/config';

const queryClient = new QueryClient();

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            
            {/* 2. Use lightTheme to match your website's clean look */}
            <RainbowKitProvider 
              theme={lightTheme({
                accentColor: '#2563eb', // This matches your 'btn-primary' blue
                accentColorForeground: 'white',
                borderRadius: 'medium',
                fontStack: 'system',
                overlayBlur: 'small',
              })}
            >
              {children}
            </RainbowKitProvider>

          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}