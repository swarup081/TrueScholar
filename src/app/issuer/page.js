'use client';

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/lib/contract";
import { Loader2, CheckCircle2, PenTool, AlertCircle } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Issuer() {
  const { isConnected } = useAccount();
  const [studentAddr, setStudentAddr] = useState("");
  const [courseName, setCourseName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Web3 Write Hook
  const { writeContract, data: hash, error: writeError, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (writeError) {
      console.error("Minting Error:", writeError);
      // This will tell you if the function name is wrong
      setErrorMsg(writeError.shortMessage || writeError.message);
    }
  }, [writeError]);

  const handleMint = async (e) => {
    e.preventDefault();
    setErrorMsg(""); 

    if (!studentAddr || !courseName) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      // Create the metadata (In a real app, upload this JSON to IPFS)
      const tokenURI = JSON.stringify({
        name: courseName,
        description: `Certified competence in ${courseName}`,
        date: new Date().toISOString(),
        issuer: "TrueScholar University"
      });

      console.log("Minting to:", studentAddr, "URI:", tokenURI);
      
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'safeMint', // <--- IF THIS FAILS, CHANGE TO 'mint' or 'issueCredential'
        args: [studentAddr, tokenURI],
      });
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      <Navbar />
      
      <main className="pt-32 px-6 max-w-3xl mx-auto">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-200">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
              <PenTool size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Issue Credential</h1>
              <p className="text-gray-500 text-sm">Mint a new Soulbound Token to a student.</p>
            </div>
          </div>

          {!isConnected ? (
            <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
              <p className="text-blue-600 mb-4 font-medium">Connect your wallet to start minting.</p>
              <div className="flex justify-center"><ConnectButton /></div>
            </div>
          ) : (
            <form onSubmit={handleMint} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Wallet Address</label>
                <input 
                  type="text" 
                  placeholder="0x..." 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-900"
                  value={studentAddr}
                  onChange={(e) => setStudentAddr(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Credential Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Bachelor of Computer Science" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-900"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 border border-red-100 text-sm">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button 
                disabled={isPending || isConfirming}
                className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isPending || isConfirming ? (
                  <><Loader2 className="animate-spin" /> Confirming on Blockchain...</>
                ) : (
                  "Mint Credential"
                )}
              </button>

              {isSuccess && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-100">
                  <CheckCircle2 size={20} />
                  <div>
                    <p className="font-bold">Successfully Minted!</p>
                    <p className="text-xs">Transaction Hash: {hash?.slice(0, 10)}...</p>
                  </div>
                </div>
              )}
            </form>
          )}

        </div>
      </main>
    </div>
  );
}