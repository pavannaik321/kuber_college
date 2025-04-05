"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  details: string;
}

export default function Contactus() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Submitted:', formData);
      setSuccess(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Need Help? Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let us give you more details about the Himalaya School of Education. Please fill out the form below.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>
            <textarea
              id="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Give us more details..."
              className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-800 text-white font-semibold py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
          </form>

          {/* Embedded Map */}
          <div className="w-full h-full min-h-[400px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0410799818246!2d79.15335867546062!3d12.969223187345916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1741261673376!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
