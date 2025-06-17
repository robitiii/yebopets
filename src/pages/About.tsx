import { useEffect } from "react";
import Layout from "@/components/Layout";
import { PawPrint } from "lucide-react";
import robertKaneImage from "@/assets/robertKane.jpg";
import danielKassyImage from "@/assets/danielKassy.jpg";
import esthelleBirulaImage from "@/assets/esthelleBirula.jpg"

const team = [
  {
    name: "Robert Kanegamba",
    title: "Software Developer | Product Architect",
    image: robertKaneImage,
    bio: "Passionate software developer and the founder of YeboPets. I built YeboPets to connect caring teenagers with pet owners who need trusted, affordable services.Before diving into tech, I spent a year and halve walking dogs, pet-sitting, and helping families care for their furry friends. That experience shaped my vision: to create a platform that combines reliability, community, and convenience for pet owners."},
  {
    name: "Daniel Kassy",
    title: "Marketing | Operations Lead",
    image: danielKassyImage,
    bio: "Passionate entrepreneur based in Cape Town, South Africa. I'm the founder of Kassyshotz, a creative brand that focuses on visual storytelling, photography, and digital content. I'm also a co-founder of YeboPets, a platform dedicated to empowering youth through pet-related services and creative opportunities. As part of our journey, Kassyshotz has partnered with YeboPets to bring pet photography to life."},
  {
    name: "Esther Biruli",
    title: "Financial Manager | Accountant",
    image: esthelleBirulaImage, 
    bio: "Co-founder and accountant for YeboPets. Here to always ensure that services run smoothly, coordinating our team of pet care specialists and managing client relationships and most importantly ensuring that we grow as a business and set an example to many young people like myself out there to start doing things that they love and a passionate in doing."},
  // {
  //   name: "James Wilson",
  //   title: "Veterinary Consultant",
  //   image: "https://randomuser.me/api/portraits/men/52.jpg",
  //   bio: "Dr. Wilson provides expert veterinary advice to our team and clients, helping us maintain the highest standards of pet health and safety."
  // }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - YeboPets";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yebo-teal to-yebo-navy text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About YeboPets</h1>
            <p className="text-xl opacity-90">
              Professional pet care with heart. Meet the team behind South Africa's trusted pet care service.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-yebo-navy">Our Story</h2>
              <p className="text-gray-700">
              YeboPets is a fresh startup built by youth, for youth. We're just getting started, but our mission is bold — to empower young people in South Africa by creating simple, local job opportunities like dog walking and pet-sitting.
              </p>
              <p className="text-gray-700">
              YeboPets was founded in 2025 by Robert Kanegamba and Daniel Kassy, two driven students and lifelong animal lovers. They envisioned a pet care service that not only provided excellent care for animals but also created a new path for young people to earn passive income while still in high school - all while treating pets with the same love and respect their owners do.
              </p>
              <p className="text-gray-700">
                Our name combines "Yebo" (meaning "yes" in Zulu) with "Pets" to reflect our positive, affirming approach to pet care and our South African roots.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
                  alt="YeboPets team member with dogs"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yebo-yellow rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yebo-teal rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-yebo-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yebo-navy mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At YeboPets, everything we do is guided by our core values and our commitment to providing the very best care for your pets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-yebo-teal bg-opacity-10">
                <PawPrint className="h-8 w-8 text-yebo-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Safety</h3>
              <p className="text-gray-600">
                Your pets' safety is our top priority. All our staff are thoroughly vetted, trained, and insured for your peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-yebo-yellow bg-opacity-10">
                <PawPrint className="h-8 w-8 text-yebo-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                We understand that every pet is unique. Our services are tailored to meet the specific needs and personality of your furry family member.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-yebo-coral bg-opacity-10">
                <PawPrint className="h-8 w-8 text-yebo-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                You can count on us to be there when we say we will. We understand the importance of consistency in your pet's routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yebo-navy mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our passionate team of pet care professionals is committed to providing the highest quality care for your beloved pets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-yebo-teal mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
