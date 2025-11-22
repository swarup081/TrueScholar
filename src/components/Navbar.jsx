import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 pt-6">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 text-sm font-medium text-gray-700">
        <Link href="#" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">About Us</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">Contact Us</Link>
      </div>
    </nav>
  );
}