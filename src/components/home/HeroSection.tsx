
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-yebo-teal to-yebo-navy text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute right-[10%] top-[20%] w-20 h-20 rounded-full bg-yebo-yellow opacity-20 animate-float"></div>
        <div className="absolute left-[15%] bottom-[30%] w-12 h-12 rounded-full bg-yebo-coral opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-[30%] bottom-[10%] w-16 h-16 rounded-full bg-yebo-yellow opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Professional Pet Care <span className="text-yebo-yellow">Services</span> in South Africa
            </h1>
            <p className="text-lg opacity-90 max-w-md">
              Trusted, reliable, and loving care for your furry family members. From dog walking to pet-sitting, we treat your pets like our own.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/book" className="btn btn-secondary btn-lg">
                Book a Service
              </Link>
              <Link to="/services" className="btn btn-outline bg-transparent border-white text-white hover:bg-white hover:text-yebo-navy btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6" 
                alt="Professional golden retriever running in an open field" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yebo-yellow rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yebo-coral rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
