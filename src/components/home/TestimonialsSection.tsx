
const testimonials = [
  {
    id: 1,
    content: "YeboPets has been a lifesaver for me and my dog Bella. Their professional dog walkers are reliable, friendly, and Bella absolutely adores them!",
    author: "Sarah M.",
    location: "Cape Town",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    content: "I travel frequently for business and knowing my cats are in good hands with YeboPets gives me such peace of mind. Highly recommend their pet sitting services.",
    author: "James K.",
    location: "Cape Town",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "After trying several pet care services, YeboPets stands out for their professionalism and genuine love for animals. My pup can't wait for their visits!",
    author: "Thandi N.",
    location: "Cape Town",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-yebo-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-yebo-navy mb-4">What Pet Owners Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it – here's what pet parents across South Africa have to say about YeboPets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative">
              {/* Quotation mark */}
              <div className="absolute -top-4 left-6">
                <div className="bg-yebo-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-yebo-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <p className="text-gray-600 italic">{testimonial.content}</p>
                
                <div className="flex items-center pt-2">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-yebo-navy">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
