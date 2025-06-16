
import { Link } from 'react-router-dom';
import { PawPrint, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yebo-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-yebo-yellow" />
              <span className="text-xl font-bold text-white font-poppins">YeboPets</span>
            </div>
            <p className="text-gray-300">
              Providing professional and loving care for your pets in South Africa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="hover:text-yebo-yellow transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/yebopets" className="hover:text-yebo-yellow transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              {/* <a href="https://twitter.com" className="hover:text-yebo-yellow transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#dog-walking" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  Pet Walking
                </Link>
              </li>
              <li>
                <Link to="/services#pet-sitting" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  Pet Sitting
                </Link>
              </li>
              <li>
                <Link to="/services#pet-photo-shots" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  Paw Shotz
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                  Book a Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yebo-yellow shrink-0 mt-0.5" />
                <span className="text-gray-300">Cape Town, 7441, South Africa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yebo-yellow shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+27746543765" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                    074 654 3765
                  </a>
                  <a href="tel:+27603058013" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                    060 305 8013
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yebo-yellow shrink-0" />
                <div className="flex flex-col">
                  {/* <a href="mailto:info@yebopets.co.za" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                    info@yebopets.co.za
                  </a> */}
                  <a href="mailto:yebopets@gmail.com" className="text-gray-300 hover:text-yebo-yellow transition-colors">
                    yebopets@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">Get the latest pet care tips and updates</p>
            </div>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="btn btn-secondary rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} YeboPets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
