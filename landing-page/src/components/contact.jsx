import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear errors on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Success: Submit form (e.g., send to backend)
    alert('Message sent successfully!');
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white py-12 px-6 lg:px-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-[var(--color-brand)] font-semibold">Contact Us</p>
          <h2 className="text-3xl font-bold mb-8">Say Hello</h2>
          <div className="flex items-start mb-6">
            <div className="text-[var(--color-brand)] text-xl mr-4">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold">Address</h4>
              <p className="text-gray-600">Location KG 9 Ave, Kigali</p>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="text-[var(--color-brand)] text-xl mr-4">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <a href="mailto:businesscafe@info.com" className="text-gray-600 underline">
                businesscafe@info.com
              </a>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="text-[var(--color-brand)] text-xl mr-4">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p className="text-gray-600">+250788183828</p>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div>
          <p className="text-[var(--color-brand)] font-semibold">Have Question ?</p>
          <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input name="name" type="text" placeholder="Name" value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md focus:outline-none border ${
                 errors.name ? 'border-red-500' : 'border-[var(--color-brand)]'
               }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md focus:outline-none border ${
                 errors.name ? 'border-red-500' : 'border-[var(--color-brand)]'
               }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md focus:outline-none border ${
                 errors.name ? 'border-red-500' : 'border-[var(--color-brand)]'
               }`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md focus:outline-none border ${
                 errors.name ? 'border-red-500' : 'border-[var(--color-brand)]'
               }`}

              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-[var(--color-brand)] hover:bg-[var(--color-brand)] text-white px-6 py-2 rounded-md transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
