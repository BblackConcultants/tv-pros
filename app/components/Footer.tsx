import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400 space-y-2">
            <p>© {currentYear} TV Pro's Electronics. All rights reserved.</p>
            <p>
              Website by{' '}
              <a 
                href="https://bblack.co.za/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ef3b2e] hover:text-[#ef3b2e]/90 transition-colors"
              >
                BrightBlack
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
