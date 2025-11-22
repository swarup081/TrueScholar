'use client';

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown, ShieldCheck, Link2, Database, CheckCircle2, Users, Building2, Award } from "lucide-react";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-blue-500/20 animate-pulse">
      Initializing Blockchain Node...
    </div>
  )
});

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-100">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-20 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Live on Polygon
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              The Future of <br />
              <span className="text-blue-600">Decentralized Identity</span>
            </h1>
            
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Issue, store, and verify academic credentials on-chain. 
              We replace paper degrees with unforgeable, privacy-preserving 
              Smart Passports.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20">
                Launch Passport
                <ChevronRight size={18} />
              </button>
              
              <button className="btn-outline px-8 py-4 rounded-full font-semibold bg-white/50 hover:bg-white transition-all flex items-center gap-2 backdrop-blur-sm text-gray-700 border-gray-200">
                Verifier Docs
                <Database size={18} />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>ZK-Rollup Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>W3C Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Floating Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full flex items-center justify-center lg:justify-end"
          >
             <Scene3D />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </header>

      {/* --- LOGO CLOUD (Updated List) --- */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Secured & Powered By</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
             {/* Specific List Requested */}
             {['POLYGON', 'ETHEREUM', 'SOLANA', 'DEGEN', 'TRON'].map((brand) => (
               <span key={brand} className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors cursor-default">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION (Improved UI) --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trustless Verification Infrastructure
          </h2>
          <p className="text-gray-500 text-lg">
            We provide the standard for issuing tamper-proof digital credentials that students truly own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Smart Contracts */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-blue-200/30 transition-all duration-300 hover:-translate-y-1 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 text-white relative z-10 shadow-lg shadow-blue-600/20">
              <Link2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Contracts</h3>
            <p className="text-gray-500 leading-relaxed">
              Diplomas are minted as non-transferable tokens (SBTs) directly on-chain, ensuring permanent ownership.
            </p>
          </div>

          {/* Card 2: Privacy First */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-purple-200/30 transition-all duration-300 hover:-translate-y-1 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mb-8 text-white relative z-10 shadow-lg shadow-purple-600/20">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy First</h3>
            <p className="text-gray-500 leading-relaxed">
              Zero-Knowledge Proofs allow students to prove qualifications to employers without ever exposing personal data.
            </p>
          </div>

          {/* Card 3: Immutable Ledger */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-emerald-200/30 transition-all duration-300 hover:-translate-y-1 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8 text-white relative z-10 shadow-lg shadow-emerald-600/20">
              <Database size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Immutable Ledger</h3>
            <p className="text-gray-500 leading-relaxed">
              Records are permanent, transparent, and impossible to falsify, creating a single source of truth for history.
            </p>
          </div>
        </div>
      </section>

      {/* --- ABOUT US SECTION (New) --- */}
      <section className="py-24 bg-white relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">About TrueScholar</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Revolutionizing Academic Verification
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We are building the global standard for decentralized academic credentials. TrueScholar bridges the gap between traditional education and Web3, enabling institutions to issue credentials that are instantly verifiable, tamper-proof, and globally recognized.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our mission is to eliminate credential fraud and give learners complete ownership of their academic achievements through self-sovereign identity (SSI) technology.
            </p>
            
            <div className="pt-4 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-400 text-sm mt-1">Credentials Issued</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-gray-400 text-sm mt-1">Partner Institutions</div>
              </div>
            </div>
          </div>

          {/* About Us Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-12">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">For Students</h4>
                <p className="text-xs text-gray-400 mt-1">Own your history</p>
              </div>
              <div className="bg-blue-600 p-6 rounded-2xl shadow-xl text-center text-white transform hover:scale-105 transition-all">
                <Award className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-bold">Global Standard</h4>
                <p className="text-xs text-blue-200 mt-1">W3C Verifiable</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
                <Building2 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">For Universities</h4>
                <p className="text-xs text-gray-400 mt-1">Fraud protection</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
                <Database className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">On-Chain</h4>
                <p className="text-xs text-gray-400 mt-1">Permanent record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-900 font-bold text-xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">T</div>
            TrueScholar
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Explorer</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Governance</a>
            <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Decentralized Registry
          </div>
        </div>
      </footer>

    </div>
  );
}