import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
            T
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">TrueScholar</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#features" className="hover:text-blue-600 transition-colors">Technology</Link>
          <Link href="#governance" className="hover:text-blue-600 transition-colors">Governance</Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-semibold text-gray-600 hover:text-gray-900">
            Log in
          </Link>
          <Link href="/dashboard" className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center gap-2">
            Launch App <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}