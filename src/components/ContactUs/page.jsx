import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import content from "../../data/content.json";

/* =========================
   COMPONENT
========================= */
const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(content.contact.form.successAlert);
  };

  return (
    <div className="min-h-screen bg-light py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-3">
                  {content.contact.heading}
                </h2>
                <p className="text-secondary-500 leading-relaxed">
                  {content.contact.bio}
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-6 pt-4">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Address</p>
                    <p className="text-secondary-900 font-medium">
                      {content.contact.profile.contact.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email</p>
                    <p className="text-secondary-900 font-medium">
                      {content.contact.profile.contact.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Phone</p>
                    <p className="text-secondary-900 font-medium">
                      {content.contact.profile.contact.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3 pt-6">
                <a
                  href={content.contact.profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-secondary-300 hover:bg-accent hover:border-accent rounded-lg flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-accent group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="space-y-6">
              <p className="text-secondary-500 leading-relaxed">
                {content.contact.availability}
              </p>

              <input
                type="text"
                name="name"
                placeholder={content.contact.form.placeholders.name}
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 border-b border-secondary-300 focus:border-accent outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder={content.contact.form.placeholders.email}
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 border-b border-secondary-300 focus:border-accent outline-none"
              />

              <input
                type="text"
                name="location"
                placeholder={content.contact.form.placeholders.location}
                value={formData.location}
                onChange={handleChange}
                className="w-full py-3 border-b border-secondary-300 focus:border-accent outline-none"
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="budget"
                  placeholder={content.contact.form.placeholders.budget}
                  value={formData.budget}
                  onChange={handleChange}
                  className="py-3 border-b border-secondary-300 focus:border-accent outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={content.contact.form.placeholders.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-3 border-b border-secondary-300 focus:border-accent outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder={content.contact.form.placeholders.message}
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full py-3 border-b border-secondary-300 focus:border-accent outline-none resize-none"
              />

              <button
                onClick={handleSubmit}
                className="bg-accent hover:bg-red-700 hover:scale-105 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl transform"
              >
                {content.contact.form.submitLabel}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;