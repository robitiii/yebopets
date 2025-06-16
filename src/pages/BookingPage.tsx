import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { toast } from "@/components/ui/sonner";

type BookingForm = {
  service: string;
  petType: string;
  petName: string;
  dateTime: string;
  duration: string;
  frequency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  specialInstructions: string;
};

const initialFormState: BookingForm = {
  service: '',
  petType: '',
  petName: '',
  dateTime: '',
  duration: '30',
  frequency: 'once',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  specialInstructions: '',
};

const BookingPage = () => {
  const [formData, setFormData] = useState<BookingForm>(initialFormState);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Service - YeboPets";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToNextStep = () => {
    if (step === 1 && (!formData.service || !formData.petType || !formData.petName)) {
      toast.error("Please fill in all required fields", {
        description: "Service type, pet type, and pet name are required."
      });
      return;
    }
    
    if (step === 2 && (!formData.dateTime || !formData.duration)) {
      toast.error("Please fill in all required fields", {
        description: "Date/time and duration are required."
      });
      return;
    }

    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/sezup34sww2uby1906qmb3jobrxgb0xg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Service Details
          service: formData.service,
          petType: formData.petType,
          petName: formData.petName,
          
          // Schedule Details
          dateTime: formData.dateTime,
          duration: formData.duration,
          frequency: formData.frequency,
          
          // Customer Details
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          specialInstructions: formData.specialInstructions,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      toast.success("Booking submitted successfully!", {
        description: "We'll contact you soon to confirm your booking.",
      });
      
      // Reset form
      setFormData(initialFormState);
      setStep(1);
    } catch (error) {
      toast.error("Failed to submit booking", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yebo-teal to-yebo-navy text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
            <p className="text-xl opacity-90">
              Schedule professional pet care services for your furry friend.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-10">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-yebo-teal' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-yebo-teal bg-yebo-teal text-white' : 'border-gray-300'} mb-2`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Service Details</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-yebo-teal' : 'bg-gray-300'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-yebo-teal' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-yebo-teal bg-yebo-teal text-white' : 'border-gray-300'} mb-2`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Schedule</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-yebo-teal' : 'bg-gray-300'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-yebo-teal' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-yebo-teal bg-yebo-teal text-white' : 'border-gray-300'} mb-2`}>
                    3
                  </div>
                  <span className="text-sm font-medium">Your Details</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-yebo-navy mb-6">Service Details</h2>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                    >
                      <option value="">Select a service...</option>
                      <option value="dog-walking">Pet Walking</option>
                      <option value="pet-sitting">Pet Sitting</option>
                      <option value="pet-photo-shots">Paw Shotz</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="petType" className="block text-sm font-medium text-gray-700 mb-1">
                      Pet Type*
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                    >
                      <option value="">Select pet type...</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-1">
                      Pet Name*
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                      placeholder="Your pet's name"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="btn btn-primary btn-lg w-full"
                    >
                      Continue to Schedule
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-yebo-navy mb-6">Schedule Your Service</h2>
                  
                  <div>
                    <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Date and Time*
                    </label>
                    <input
                      type="datetime-local"
                      id="dateTime"
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Duration (minutes)*
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                    >
                      <option value="30">30 minutes</option>
                      <option value="60">60 minutes</option>
                      <option value="90">90 minutes</option>
                      <option value="120">120 minutes</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                      Frequency
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                    >
                      <option value="once">One time</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 flex space-x-4">
                    <button
                      type="button"
                      onClick={goToPreviousStep}
                      className="btn btn-outline flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="btn btn-primary btn-lg flex-1"
                    >
                      Continue to Your Details
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Your Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-yebo-navy mb-6">Your Details</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                      placeholder="Service location address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions
                    </label>
                    <textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yebo-teal"
                      placeholder="Any special instructions or details we should know about your pet"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 flex space-x-4">
                    <button
                      type="button"
                      onClick={goToPreviousStep}
                      className="btn btn-outline flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Complete Booking'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
