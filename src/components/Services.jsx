'use client';

import Section from "./Section";
import Heading from "./Heading";
import { Check, ShieldCheck, Wallet, Lock, ArrowRight, CreditCard, ScanFace, Fingerprint, Loader2 } from "lucide-react";

const walletIcons = [CreditCard, ScanFace, Fingerprint, Wallet];

const services = [
  "Instant Verification",
  "Tamper-Proof History",
  "Global Compliance"
];

const Services = () => {
  return (
    <Section id="technology">
      <div className="container mx-auto px-6">
        <Heading
          title="Decentralized Identity for Everyone."
          text="TrueScholar unlocks the potential of on-chain academic history."
          tag="Our Technology"
        />

        <div className="relative">
          
          {/* --- Card 1: Smart Issuance --- */}
          <div className="relative z-1 flex flex-col lg:flex-row items-center h-auto lg:h-[30rem] mb-5 p-8 border border-blue-100 rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-blue-900/5">
            <div className="relative z-1 max-w-[25rem] mr-auto">
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Smartest Issuance</h4>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                Diplomas minted as Soulbound Tokens (SBTs) directly on the Polygon blockchain.
              </p>
              <ul className="space-y-4">
                {services.map((item, index) => (
                  <li key={index} className="flex items-center py-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Graphic */}
            <div className="relative w-full lg:w-1/2 h-[20rem] mt-8 lg:mt-0 rounded-2xl bg-blue-50/50 flex items-center justify-center border border-blue-100">
               <ShieldCheck size={120} className="text-blue-200" />
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            
            {/* --- Card 2: Privacy Preserved (NOW LIGHT THEME) --- */}
            <div className="relative min-h-[30rem] border border-blue-100 bg-white rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-10 shadow-lg shadow-blue-900/5">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <Lock size={24} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-gray-900">Privacy Preserved</h4>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Zero-Knowledge Proofs allow you to prove your skills without revealing personal data.
                </p>
                
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                  TRY THE DEMO <ArrowRight size={16} />
                </button>
              </div>

              {/* Abstract Graphic (Light) */}
              <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-b from-purple-50/50 to-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </div>

            {/* --- Card 3: PolyID Verified (NOW LIGHT THEME) --- */}
            <div className="p-4 bg-blue-50/50 rounded-[2.5rem] overflow-hidden lg:min-h-[30rem] border border-blue-100">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-3xl font-bold mb-4 text-gray-900">PolyID Verified</h4>
                <p className="text-gray-500 mb-8 text-lg">
                  Seamlessly integrated with Polygon ID for on-chain trust.
                </p>

                {/* 4 Icons Row */}
                <ul className="flex items-center justify-between mb-10 max-w-md mx-auto">
                  {walletIcons.map((Icon, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        index === 2 
                          ? "w-[4rem] h-[4rem] p-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-xl shadow-blue-500/20 scale-110"
                          : "flex w-12 h-12 bg-white border border-blue-100 shadow-sm"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-white rounded-[0.9rem]"
                            : ""
                        }
                      >
                        <Icon className={index === 2 ? "text-blue-600" : "text-gray-400"} size={index === 2 ? 28 : 24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* "Verifying" Visual (Light Theme) */}
              <div className="relative h-[15rem] bg-white rounded-xl overflow-hidden shadow-xl border border-blue-100 mx-4">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/50">
                   {/* Loading Indicator */}
                   <div className="flex items-center gap-3 px-5 py-2 bg-white rounded-full border border-blue-100 shadow-sm mb-6">
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                      <span className="text-xs font-bold text-blue-600 tracking-widest">VERIFYING CREDENTIAL...</span>
                   </div>
                   
                   {/* Progress Bar */}
                   <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-blue-500 relative animate-pulse"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Services;