import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Clock,
  MessageCircle,
  Globe,
} from "lucide-react";
import content from "../../data/content.json";

/* =========================
   COMPONENT
========================= */
const ContactUs = () => {

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

              {/* ADDITIONAL CONTACT INFO */}
              <div className="space-y-6 pt-4">

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Business Hours</p>
                    <p className="text-secondary-900 font-medium">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-secondary-900 font-medium">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-secondary-900 font-medium">
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Response Time</p>
                    <p className="text-secondary-900 font-medium">
                      Email: Within 24 hours
                    </p>
                    <p className="text-secondary-900 font-medium">
                      Phone: Immediate during business hours
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

            {/* RIGHT COLUMN - ADDITIONAL INFO */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Get In Touch
                </h3>
                <p className="text-secondary-500 leading-relaxed mb-6">
                  We're here to help and answer any questions you might have.
                  We look forward to hearing from you.
                </p>
              </div>

              {/* SERVICES OFFERED */}
              <div className="bg-gradient-to-br from-[#0b1c2d] via-[#12263a] to-[#1f3a5f] rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">
                  Our Legal Services
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-200">Family & Personal Law</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-200">Property & Real Estate Disputes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-200">Corporate & Commercial Advisory</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-200">Criminal & Civil Litigation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-200">Legal Opinions & Due Diligence</span>
                  </li>
                </ul>
              </div>

              {/* QUICK CONTACT CARD */}
              <div className="bg-gradient-to-br from-[#0b1c2d] via-[#12263a] to-[#1f3a5f] rounded-2xl p-6 text-white shadow-lg">
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">
                  Need Immediate Legal Assistance?
                </h4>
                <p className="mb-4 text-slate-200 leading-relaxed">
                  Speak directly with our legal team for urgent matters during business hours.
                </p>               
                 <a
                  href={`https://wa.me/${content.contact.profile.contact.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;