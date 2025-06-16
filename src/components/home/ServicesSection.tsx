
import { Dog, Cat, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'dog-walking',
    title: 'Pet Walking',
    description: 'Regular exercise and socialization for your furry companion.',
    icon: <Dog className="h-10 w-10 text-yebo-teal" />,
    link: '/services#dog-walking'
  },
  {
    id: 'pet-sitting',
    title: 'Pet Sitting',
    description: 'In-home care when you\'re away, keeping pets comfortable in familiar surroundings.',
    icon: <Cat className="h-10 w-10 text-yebo-teal" />,
    link: '/services#pet-sitting'
  },
  {
    id: 'pet-photo-shots',
    title: 'Paw Shotz',
    description: 'Capture beautiful moments with your pet through professional photography.',
    icon: <Camera className="h-10 w-10 text-yebo-teal" />,
    link: '/services#pet-photo-shots'
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-yebo-navy mb-4">Our Pet Care Services</h2>
          <p className="text-gray-600">
            Whether you need regular pet walks, reliable pet-sitting, or professional pet photography, 
            our dedicated team is here for all your pet care needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link}
                className="text-yebo-teal hover:text-yebo-navy font-medium inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn btn-primary btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
