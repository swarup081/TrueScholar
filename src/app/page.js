'use client';

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown, Building2, Award, Users, ArrowUpRight } from "lucide-react";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-blue-500/20">Loading...</div>
});

const AboutScene = dynamic(() => import("@/components/AboutScene"), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-blue-500/20">Loading...</div>
});

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 selection:bg-blue-100 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Live on Polygon Mainnet
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Decentralized Identity
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              We provide the standard for issuing tamper-proof digital credentials that students truly own. 
              Eliminate fraud and streamline verification with TrueScholar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#about" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold flex items-center gap-2 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20">
                Explore Platform <ChevronRight size={18} />
              </Link>
              <Link href="#" className="px-8 py-4 rounded-full font-semibold bg-white/60 border border-gray-200 hover:border-gray-400 hover:bg-white transition-all flex items-center gap-2 text-gray-700 backdrop-blur-sm">
                Read Docs <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center"
          >
             <Scene3D />
          </motion.div>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="py-10 border-y border-blue-100/50 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {['POLYGON', 'ETHEREUM', 'SOLANA', 'DEGEN', 'TRON'].map((brand) => (
               <span key={brand} className="text-xl font-bold text-gray-800 cursor-default">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT: New 3D Element */}
            <div className="relative w-full order-1">
               <AboutScene />
            </div>

            {/* RIGHT: Content Grid */}
            <div className="space-y-10 order-2">
              <div>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">About TrueScholar</p>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Revolutionizing <br /> Academic Verification
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                TrueScholar bridges the gap between traditional education and Web3. We eliminate credential fraud and give learners complete ownership of their academic achievements through self-sovereign identity (SSI).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                 <div className="p-6 rounded-2xl bg-white/60 border border-blue-100 hover:shadow-lg hover:bg-white transition-all group backdrop-blur-sm">
                    <Users className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-gray-900 mb-1">For Students</h4>
                    <p className="text-sm text-gray-500">Own your history forever.</p>
                 </div>

                 <div className="p-6 rounded-2xl bg-white/60 border border-blue-100 hover:shadow-lg hover:bg-white transition-all group backdrop-blur-sm">
                    <Building2 className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-gray-900 mb-1">For Universities</h4>
                    <p className="text-sm text-gray-500">Fraud protection & fast verification.</p>
                 </div>

                 <div className="p-6 rounded-2xl bg-white/60 border border-blue-100 hover:shadow-lg hover:bg-white transition-all group backdrop-blur-sm">
                    <Award className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-gray-900 mb-1">Global Standard</h4>
                    <p className="text-sm text-gray-500">W3C Verifiable on-chain.</p>
                 </div>

                 <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold mb-1">50k+</div>
                    <p className="text-blue-100 text-sm font-medium">Credentials Issued</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES / TECHNOLOGY SECTION */}
      <Services />

      {/* FOOTER */}
      <footer className="py-12 border-t border-blue-100 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-900 font-bold text-xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">T</div>
            TrueScholar
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <Link href="#" className="hover:text-blue-600 transition-colors">Explorer</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Governance</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">GitHub</Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Decentralized Registry
          </div>
        </div>
      </footer>

    </div>
  );
}