
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - YeboPets";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yebo-teal to-yebo-navy text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              Have questions or need to book a service? We're here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yebo-navy mb-2">Get in Touch</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yebo-navy mb-2">Contact Information</h2>
                <p className="text-gray-600">
                  Reach out to us directly using the information below.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-yebo-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">Cape Town, 7441, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-yebo-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+27123456789" className="text-gray-600 hover:text-yebo-teal transition-colors">
                        +27 74 654 3765
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-yebo-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:info@yebopets.co.za" className="text-gray-600 hover:text-yebo-teal transition-colors">
                        yebopets@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-yebo-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-gray-600">Monday-Friday: 8am - 7pm</p>
                      <p className="text-gray-600">Saturday-Sunday: 9am - 4pm</p>
                      <p className="text-gray-600">After Hours: Varies on client </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="btn btn-outline p-3 rounded-full hover:bg-yebo-teal hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/yebopets" 
                    className="btn btn-outline p-3 rounded-full hover:bg-yebo-teal hover:text-white transition-colors"
                    aria-label="Instagram"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className="btn btn-outline p-3 rounded-full hover:bg-yebo-teal hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Location</h3>
                <div className="rounded-lg overflow-hidden h-[300px] bg-gray-200">
                  {/* Placeholder for Google Maps integration */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-600">Google Maps will be integrated here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
