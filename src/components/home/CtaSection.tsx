import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';
import NewsletterForm from '@/components/newsletter/NewsletterForm';

const CtaSection = () => {
  return (
    <section className="section-padding bg-yebo-teal text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative elements */}
          <PawPrint className="absolute -top-6 left-6 text-white opacity-10 w-16 h-16" />
          <PawPrint className="absolute bottom-6 right-6 text-white opacity-10 w-14 h-14" />
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Give Your Pet the Care They Deserve?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book a service today and join thousands of happy pets and their owners who trust YeboPets for professional care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/book" className="btn btn-secondary btn-lg">
              Book a Service
            </Link>
            <Link to="/contact" className="btn btn-outline bg-transparent border-white text-white hover:bg-white hover:text-yebo-teal btn-lg">
              Contact Us
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for pet care tips, special offers, and updates.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
