import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <a href="tel:+27717343348" className="hover:text-brand-blue transition-colors">
                  +27 71 734 3348
                </a>
              </p>
              <p>
                <a href="mailto:info@tv-pros.co.za" className="hover:text-brand-blue transition-colors">
                  info@tv-pros.co.za
                </a>
              </p>
              <p>7 Pongola Ave</p>
              <p>Randpark Ridge</p>
              <p>Johannesburg, 2001</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-brand-blue transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <p className="text-gray-300 mb-2">
              Serving Johannesburg and surrounding areas including Sandton, Fourways, Midrand, 
              Centurion, and more.
            </p>
            <Link 
              href="/areas" 
              className="text-brand-blue hover:text-brand-blue/90 transition-colors font-medium"
            >
              View All Areas →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {currentYear} TV Pro's Electronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
