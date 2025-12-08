"use client";

import { useState } from "react";

export default function ContactPage() {
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Testimonial Form State
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    occupation: "",
    testimonial: "",
  });

  // Handle Form Input
  const handleInput = (formSetter: any, field: string, value: string) => {
    formSetter((prev: any) => ({ ...prev, [field]: value }));
  };

  // Handle Submit (temporary)
  const submitForm = (e: any) => {
    e.preventDefault();
    alert("Form submitted (connect to backend)");
  };

  return (
    <main className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-[#397171]">Contact</h1>

      {/* ============================ */}
      {/*   AUTHOR CONTACT DETAILS     */}
      {/* ============================ */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>

        <div className="bg-white shadow rounded-lg p-6 space-y-3">
          <p><strong>Name:</strong> Gbenga Omole</p>
          <p><strong>Email:</strong> gbengaomoleofficial@example.com</p>
          <p><strong>Phone:</strong> +234 801 234 5678</p>
          <p><strong>Office:</strong> Lagos, Nigeria</p>
          <p><strong>Socials:</strong></p>
          <ul className="list-disc ml-6">
            <li>Facebook: facebook.com/GbengaOmole</li>
            <li>Instagram: instagram.com/GbengaOmole</li>
            <li>YouTube: youtube.com/@GbengaOmole</li>
          </ul>
        </div>
      </section>

      {/* ============================ */}
      {/*         CONTACT FORM         */}
      {/* ============================ */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

        <form
          onSubmit={submitForm}
          className="grid gap-6 bg-white shadow rounded-lg p-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg"
            value={contactForm.name}
            onChange={(e) => handleInput(setContactForm, "name", e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg"
            value={contactForm.email}
            onChange={(e) => handleInput(setContactForm, "email", e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-lg h-32"
            value={contactForm.message}
            onChange={(e) =>
              handleInput(setContactForm, "message", e.target.value)
            }
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#397171] text-white py-3 rounded-lg hover:bg-[#2e5b5b]"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ============================ */}
      {/*     APPOINTMENT SCHEDULER    */}
      {/* ============================ */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

        <p className="text-gray-600 mb-4">
          Choose a date to schedule a meeting with the author.
        </p>

        <div className="w-full h-[600px] shadow rounded-lg overflow-hidden bg-white">
          {/* Using Calendly — replace link with actual author link */}
          <iframe
            src="https://calendly.com/your-calendly-username/30min?hide_gdpr_banner=1"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* ============================ */}
      {/*      TESTIMONIAL FORM        */}
      {/* ============================ */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Leave a Testimonial</h2>

        <form
          onSubmit={submitForm}
          className="grid gap-6 bg-white shadow rounded-lg p-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg"
            value={testimonialForm.name}
            onChange={(e) =>
              handleInput(setTestimonialForm, "name", e.target.value)
            }
            required
          />

          <input
            type="text"
            placeholder="Your Occupation / Title"
            className="border p-3 rounded-lg"
            value={testimonialForm.occupation}
            onChange={(e) =>
              handleInput(setTestimonialForm, "occupation", e.target.value)
            }
          />

          <textarea
            placeholder="Your Testimonial"
            className="border p-3 rounded-lg h-32"
            value={testimonialForm.testimonial}
            onChange={(e) =>
              handleInput(setTestimonialForm, "testimonial", e.target.value)
            }
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#397171] text-white py-3 rounded-lg hover:bg-[#2e5b5b]"
          >
            Submit Testimonial
          </button>
        </form>
      </section>
    </main>
  );
}
