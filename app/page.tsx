import Image from 'next/image';
import BrandsSlider from './components/BrandsSlider';
import { PhoneIcon, WrenchScrewdriverIcon, ServerIcon, BoltIcon, SunIcon, Square2StackIcon, CodeBracketIcon, MagnifyingGlassIcon, UserGroupIcon, ClockIcon, CubeIcon, BanknotesIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-gray-50">
      
      {/* Hero Section */}
      <section className="hero-bg section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-brand-black mb-6 text-shadow">
              Expert TV Repair Services in Johannesburg
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional TV repair and maintenance services by experienced technicians
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:+27717343348" className="btn-primary inline-flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </a>
              <a href="/services" className="btn-secondary inline-flex items-center gap-2">
                <WrenchScrewdriverIcon className="w-5 h-5" />
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl text-center text-brand-black mb-12 text-shadow">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Motherboard Replacement',
                description: 'Expert motherboard diagnostics and replacement services',
                icon: ServerIcon
              },
              {
                title: 'Power Supply Repairs',
                description: 'Fix and replace faulty power supply units',
                icon: BoltIcon
              },
              {
                title: 'Backlight Repairs',
                description: 'Restore your TV\'s brightness with our backlight repair service',
                icon: SunIcon
              },
              {
                title: 'Screen Repairs',
                description: 'Professional LCD, LED, and OLED screen repair solutions',
                icon: Square2StackIcon
              },
              {
                title: 'Software Updates',
                description: 'System updates and software reload services',
                icon: CodeBracketIcon
              },
              {
                title: 'Diagnostic Services',
                description: 'Comprehensive TV diagnostics and troubleshooting',
                icon: MagnifyingGlassIcon
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-brand-blue mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl text-center text-brand-black mb-12 text-shadow">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Technicians',
                description: 'Our team consists of highly skilled and certified technicians with years of experience in TV repair.',
                icon: UserGroupIcon
              },
              {
                title: 'Fast Turnaround',
                description: 'We understand the importance of your TV and strive to provide quick, efficient repair services.',
                icon: ClockIcon
              },
              {
                title: 'Quality Parts',
                description: 'We use only genuine replacement parts to ensure the longevity and quality of our repairs.',
                icon: CubeIcon
              },
              {
                title: 'Affordable Pricing',
                description: 'Competitive rates without compromising on the quality of our service.',
                icon: BanknotesIcon
              },
              {
                title: 'Warranty Covered',
                description: 'All our repair services come with a warranty for your peace of mind.',
                icon: ShieldCheckIcon
              },
              {
                title: 'Customer Satisfaction',
                description: 'We pride ourselves on our high customer satisfaction rate and excellent after-service support.',
                icon: StarIcon
              }
            ].map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-brand-blue mb-6">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray section-padding">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 text-shadow">
            Need Professional TV Repair Services?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Our expert technicians are ready to help you with any TV repair needs
          </p>
          <a href="tel:+27717343348" className="btn-primary inline-flex items-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            Call +27 71 734 3348
          </a>
        </div>
      </section>

      <BrandsSlider />
    </div>
  );
}
