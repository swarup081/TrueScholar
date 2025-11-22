'use client';

import Navbar from "@/components/Navbar";
import { useAccount, useReadContract } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Award, Loader2, Wallet } from "lucide-react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/lib/contract";

export default function Dashboard() {
  const { address, isConnected } = useAccount();

  // 1. Read how many credentials this user has
  const { data: balance, isLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'balanceOf',
    args: [address],
    query: { enabled: isConnected } 
  });

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
      <Navbar />
      
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">My Credentials</h1>
            <p className="text-gray-500">Manage and share your verified academic history.</p>
          </div>
          <ConnectButton />
        </div>

        {!isConnected ? (
          <div className="flex flex-col items-center justify-center h-[400px] bg-white rounded-[2.5rem] border border-gray-200 shadow-sm">
            <Wallet size={64} className="text-gray-300 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Wallet Not Connected</h3>
            <p className="text-gray-500 mb-8">Please connect your Polygon wallet to view credentials.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             
             {isLoading ? (
               <div className="col-span-3 flex justify-center py-20"><Loader2 className="animate-spin text-blue-600" /></div>
             ) : Number(balance) > 0 ? (
               // If balance > 0, show the credential card
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-blue-100 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-bl-2xl">
                    VERIFIED
                  </div>
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 border border-blue-100">
                    <Award size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Bachelor of Science</h3>
                  <p className="text-gray-500 text-sm mb-6">Issued by TrueScholar Demo</p>
                  
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <div className="text-xs font-mono text-gray-400">
                      ID: #1001
                    </div>
                    <button className="text-xs font-bold text-blue-600 hover:underline">View Proof</button>
                  </div>
               </div>
             ) : (
               <div className="col-span-3 text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-gray-300">
                 <p className="text-gray-400 mb-2">No credentials found on this wallet.</p>
                 <p className="text-sm text-gray-400">Ask your university to issue one to: <span className="font-mono text-gray-500">{address?.slice(0,6)}...{address?.slice(-4)}</span></p>
               </div>
             )}
          </div>
        )}
      </main>
    </div>
  );
}