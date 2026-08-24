"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COMPANY_CONFIG } from "@/config/company";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle, Loader2, Info } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessRequirement: "Wood Processing / Veneer",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "unconfigured" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      if (data.isUnconfigured) {
        setStatus("unconfigured");
        setStatusMessage(data.message);
      } else {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          businessRequirement: "Wood Processing / Veneer",
          message: "",
        });
      }
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Contact Us"
            title="Have a Requirement? Let's Talk."
            subtitle="Whether you are looking for plywood products, veneer, material supply, or transportation support, our team is ready to discuss your requirements."
          />
        </div>
      </section>

      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Left */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-kpg-border shadow-premium space-y-6">
              <div>
                <h3 className="font-heading text-3xl font-bold text-kpg-green-900">
                  Send Business Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-kpg-text-secondary mt-1">
                  Fill out the form below to initiate communication with our team.
                </p>
              </div>

              {/* Success Feedback */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-kpg-green-50 border border-kpg-green-100 flex items-start gap-3 text-kpg-green-900 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Inquiry Transmitted</p>
                    <p className="text-xs text-kpg-text-secondary mt-1">{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Honest Unconfigured Feedback */}
              {status === "unconfigured" && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900 text-sm">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Direct Contact Recommended</p>
                    <p className="text-xs text-amber-800 mt-1 leading-relaxed">{statusMessage}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={`mailto:${COMPANY_CONFIG.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-200/60 hover:bg-amber-200 text-xs font-bold text-amber-950"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email {COMPANY_CONFIG.email}</span>
                      </a>
                      <a
                        href={`tel:${COMPANY_CONFIG.phone}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-200/60 hover:bg-amber-200 text-xs font-bold text-amber-950"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {COMPANY_CONFIG.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Feedback */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-800 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <p>{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-kpg-text-primary">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-lg border border-kpg-border focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 text-sm bg-kpg-bg-offwhite/50"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-kpg-text-primary">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 rounded-lg border border-kpg-border focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 text-sm bg-kpg-bg-offwhite/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-kpg-text-primary">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-kpg-border focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 text-sm bg-kpg-bg-offwhite/50"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-kpg-text-primary">
                      Phone / Mobile
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-lg border border-kpg-border focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 text-sm bg-kpg-bg-offwhite/50"
                    />
                  </div>
                </div>

                {/* Business Requirement Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-kpg-text-primary">
                    Business Requirement
                  </label>
                  <select
                    name="businessRequirement"
                    value={formData.businessRequirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-kpg-border focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 text-sm bg-kpg-bg-offwhite/50 text-kpg-text-primary"
                  >
                    <option value="Wood Processing / Veneer">Wood Processing / Veneer</option>
                    <option value="Plywood Supply & Trading">Plywood Supply & Trading</option>
                    <option value="Transportation & Freight">KPG Transportation & Freight</option>
                    <option value="General Partnership">General Partnership / Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-kpg-text-primary">
                    Message / Specification Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your wood product quantity, plywood size, or transportation delivery requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-kpg-border focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 text-sm bg-kpg-bg-offwhite/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-kpg-gold-400" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4 text-kpg-gold-400" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Details Right */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-kpg-green-900 text-white p-8 rounded-2xl border-t-4 border-kpg-gold-500 shadow-premium space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold">
                    {COMPANY_CONFIG.name}
                  </h3>
                  <p className="text-xs text-kpg-gold-400 uppercase font-semibold tracking-wider mt-1">
                    Corporate Contact Details
                  </p>
                </div>

                <div className="space-y-4 text-sm text-gray-200">
                  {/* Phone (Rendered dynamically if provided) */}
                  {COMPANY_CONFIG.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-kpg-gold-400 shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Phone</p>
                        <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-gray-300 hover:text-white font-mono text-xs">
                          {COMPANY_CONFIG.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Email (Rendered dynamically if provided) */}
                  {COMPANY_CONFIG.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-kpg-gold-400 shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Email</p>
                        <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-gray-300 hover:text-white font-mono text-xs">
                          {COMPANY_CONFIG.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Hours (Rendered dynamically if provided) */}
                  {COMPANY_CONFIG.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-kpg-gold-400 shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Business Hours</p>
                        <p className="text-gray-300 text-xs">{COMPANY_CONFIG.hours}</p>
                      </div>
                    </div>
                  )}

                  {/* Address (Only rendered if non-empty) */}
                  {COMPANY_CONFIG.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-kpg-gold-400 shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Address</p>
                        <p className="text-gray-300 text-xs">{COMPANY_CONFIG.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Communication Note */}
              <div className="p-6 rounded-2xl bg-kpg-bg-offwhite border border-kpg-border space-y-2">
                <h4 className="text-sm font-bold text-kpg-green-900">
                  Direct Inquiries Welcome
                </h4>
                <p className="text-xs text-kpg-text-secondary leading-relaxed">
                  Our sales and logistics support team is ready to discuss custom veneer orders, plywood supply terms, and freight routes for business partners across Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
