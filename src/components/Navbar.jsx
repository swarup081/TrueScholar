'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, LayoutDashboard, PenTool } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Navbar() {
  const pathname = usePathname();
  const { isConnected } = useAccount();

  // Check if we are on the landing page or inside the app
  const isAppPage = pathname === '/dashboard' || pathname === '/issuer';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
            T
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">TrueScholar</span>
        </Link>

        {/* Navigation Links (Switch based on where we are) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {!isAppPage ? (
            /* Landing Page Links */
            <>
              <Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="#features" className="hover:text-blue-600 transition-colors">Technology</Link>
            </>
          ) : (
            /* App Links (Visible when in Dashboard/Issuer) */
            <>
              <Link href="/dashboard" className={`flex items-center gap-2 transition-colors ${pathname === '/dashboard' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}>
                <LayoutDashboard size={16} />
                Student Dashboard
              </Link>
              <Link href="/issuer" className={`flex items-center gap-2 transition-colors ${pathname === '/issuer' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}>
                <PenTool size={16} />
                Issuer Portal
              </Link>
            </>
          )}
        </div>

        {/* Right Action Area */}
        <div className="flex items-center gap-4">
          
          {/* If connected or inside the app, show the Wallet Button. 
              Otherwise, show the "Launch App" button. */}
          {isAppPage || isConnected ? (
            <ConnectButton showBalance={false} accountStatus="address" chainStatus="icon" />
          ) : (
            <Link href="/dashboard" className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center gap-2">
              Launch App <ArrowRight size={16} />
            </Link>
          )}
          
        </div>
      </div>
    </nav>
  );
}