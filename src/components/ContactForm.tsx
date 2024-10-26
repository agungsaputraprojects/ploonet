"use client";

import React, { useState } from "react";
import { Locale } from "@/lib/i18n-config";
import { ChevronDown, X } from "lucide-react";

interface ContactFormProps {
  params: { lang: Locale };
  dictionary: {
    contact: {
      title: string;
      subtitle: string;
      subtext: string;
      email: string;
      form: {
        purposeLabel: string;
        purposes: string[];
        nameLabel: string;
        emailLabel: string;
        phoneLabel: string;
        messageLabel: string;
        messagePlaceholder: string;
        agreement: string;
        submit: string;
      };
    };
  };
}

export default function ContactForm({
  params: { lang },
  dictionary,
}: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState("");

  return (
    <section className="bg-black min-h-screen md:py-20 py-10 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#FF6B6C] text-lg mb-4">
            {dictionary.contact.title}
          </h2>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
            {dictionary.contact.subtitle}
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {dictionary.contact.subtext}
          </p>
          <p className="text-gray-500 text-sm">{dictionary.contact.email}</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Purpose Select */}
          <div className="relative">
            <div
              className="w-full p-4 bg-[#1A1A1A] rounded-lg border border-gray-800 text-white flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={selectedPurpose ? "text-white" : "text-gray-500"}
              >
                {selectedPurpose || dictionary.contact.form.purposeLabel}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="absolute w-full mt-2 bg-[#1A1A1A] border border-gray-800 rounded-lg shadow-xl z-10">
                {dictionary.contact.form.purposes.map((purpose, index) => (
                  <div
                    key={index}
                    className="p-4 hover:bg-[#2A2A2A] cursor-pointer text-white"
                    onClick={() => {
                      setSelectedPurpose(purpose);
                      setIsOpen(false);
                    }}
                  >
                    {purpose}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Name Input */}
          <input
            type="text"
            placeholder={dictionary.contact.form.nameLabel}
            className="w-full p-4 bg-[#1A1A1A] rounded-lg border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B6C]"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder={dictionary.contact.form.emailLabel}
            className="w-full p-4 bg-[#1A1A1A] rounded-lg border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B6C]"
          />

          {/* Phone Input */}
          <input
            type="tel"
            placeholder={dictionary.contact.form.phoneLabel}
            className="w-full p-4 bg-[#1A1A1A] rounded-lg border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B6C]"
          />

          {/* Message Textarea */}
          <textarea
            placeholder={dictionary.contact.form.messagePlaceholder}
            rows={6}
            className="w-full p-4 bg-[#1A1A1A] rounded-lg border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B6C] resize-none"
          />

          {/* Agreement Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreement"
              className="form-checkbox h-4 w-4 text-[#FF6B6C] rounded border-gray-800 bg-[#1A1A1A]"
            />
            <label htmlFor="agreement" className="text-gray-400 text-sm">
              {dictionary.contact.form.agreement}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#FF6B6C] text-white rounded-lg font-medium hover:bg-[#FF8F6B] transition-colors duration-200"
          >
            {dictionary.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
