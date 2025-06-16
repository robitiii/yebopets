
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const services = [
  {
    id: "dog-walking",
    title: "Pet Walking",
    description: "Keep your pet healthy and happy with regular exercise. Our professional pet walkers provide personalized walks tailored to your pet's energy level and preferences.",
    pricing: [
      { name: "Single Walk (30 min)", price: "R45" },
      { name: "5-Walk Package", price: "R225" },
      { name: "10-Walk Package", price: "R450" },
    ],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?fit=crop&w=600&h=400"
  },
  {
    id: "pet-sitting",
    title: "Pet Sitting",
    description: "When you're away, your pets can stay comfortably at home with our in-home pet sitting services. We provide feeding, play time, medication administration, and lots of love.",
    pricing: [
      { name: "Half-Day Visit (4 hours)", price: "R250" },
      { name: "Full Day (8 hours)", price: "R450" },
      { name: "Overnight Stay", price: "R400" },
    ],
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?fit=crop&w=600&h=400"
  },
  {
    id: "pet-photo-shots",
    title: "Paw Shotz",
    description: "Capture lasting memories of your beloved pet with our professional photography services. We specialize in bringing out your pet's unique personality in every shot.",
    pricing: [
      { name: "Basic Session (30 min, 5 photos)", price: "R200" },
      { name: "Standard Session (1 hour, 15 photos)", price: "R600" },
      { name: "Premium Package (2 hours, 30 photos)", price: "R1200" },
    ],
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?fit=crop&w=600&h=400"
  }
];

const Services = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    // Set page title
    document.title = "Our Services - YeboPets";

    // Scroll to specific service if hash is present
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yebo-teal to-yebo-navy text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Pet Care Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive, professional pet care services tailored to your pet's needs and your schedule.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="section-padding">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                id={service.id}
                key={service.id} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-yebo-navy">{service.title}</h2>
                  <p className="text-gray-700">{service.description}</p>
                  
                  <div className="bg-yebo-light p-5 rounded-lg mt-6">
                    <h3 className="font-semibold text-lg mb-3">Pricing</h3>
                    <ul className="space-y-2">
                      {service.pricing.map((price, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>{price.name}</span>
                          <span className="font-semibold">{price.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/book" className="btn btn-primary py-3 px-6" style={{padding: '12px 24px', display: 'inline-block'}}>
                      Book This Service
                    </Link>
                  </div>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-yebo-light py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to book a service?</h2>
            <p className="text-gray-700 mb-6">
              Our team of pet care professionals is ready to provide the best care for your furry family members.
            </p>
            <Link to="/book" className="btn btn-primary btn-lg">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
