import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="TV Pro's Electronics" width={180} height={50} priority className="w-auto h-12" />
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link href="/" className="text-brand-black hover:text-brand-blue px-3 py-2 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-brand-black hover:text-brand-blue px-3 py-2 font-medium">
              Services
            </Link>
            <Link href="/areas" className="text-brand-black hover:text-brand-blue px-3 py-2 font-medium">
              Service Areas
            </Link>
            <Link href="/contact" className="text-brand-black hover:text-brand-blue px-3 py-2 font-medium">
              Contact
            </Link>
            <a 
              href="tel:+27717343348" 
              className="bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Call Now: +27 71 734 3348
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
