"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Phone, CheckSquare } from "lucide-react";
import { serviceAreas, siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      area: String(formData.get("area") || ""),
      timing: String(formData.get("timing") || ""),
      preference: String(formData.get("preference") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on"
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(result.message || "Thank you. Your request was received privately.");
        event.currentTarget.reset();
        return;
      }

      setStatus("error");
      setMessage(result.message || "Something went wrong. Please try WhatsApp Booking.");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to submit inquiry. Please call us directly.");
    }
  }

  return (
    <form className="booking-form-v2" onSubmit={onSubmit}>
      <div className="input-group-row">
        <label>
          <span>Nickname or Name</span>
          <input name="name" placeholder="Your name (e.g. Rahul)" required minLength={2} />
        </label>
        
        <label>
          <span>Phone or WhatsApp Number</span>
          <input name="phone" type="tel" placeholder="+91..." required minLength={7} />
        </label>
      </div>

      <div className="input-group-row">
        <label>
          <span>Preferred Area in Udaipur</span>
          <select name="area" required defaultValue="">
            <option value="" disabled>
              Select area location
            </option>
            {serviceAreas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Prefered Schedule Timing</span>
          <input name="timing" placeholder="e.g., Today evening, 9 PM" required />
        </label>
      </div>

      <label>
        <span>Companionship Category Preference</span>
        <select name="preference" required defaultValue="">
          <option value="" disabled>
            Select companion style
          </option>
          <option value="Premium VIP Escorts">Premium & VIP Escorts (from ₹3999)</option>
          <option value="Russian Escorts">Russian Escorts (Premium rates)</option>
          <option value="Independent Call Girls">Independent Call Girls</option>
          <option value="College Girls & Housewife">College Girls / Housewives</option>
        </select>
      </label>

      <label>
        <span>Custom Instructions / Hotel Details</span>
        <textarea name="message" placeholder="Optional notes (e.g. hotel name, preferred profile traits)" />
      </label>

      <label className="checkbox-label-v2">
        <input name="consent" type="checkbox" required />
        <span className="checkbox-text">I verify that I am an adult (18+) and agree to cash on delivery.</span>
      </label>

      <button className="button gold full-width" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting Inquiry..." : "Submit Secure Booking Enquiry"}
      </button>

      {message && (
        <div className={`status-notice-v2 ${status}`}>
          <p>{message}</p>
        </div>
      )}

      <div className="quick-actions-form">
        <a className="button form-call-action" href={`tel:${siteConfig.phone}`}>
          <Phone size={16} /> Call Direct
        </a>
        <a className="button form-wa-action" href={`https://wa.me/${siteConfig.whatsapp}`}>
          <MessageCircle size={16} /> WhatsApp Booking
        </a>
      </div>
    </form>
  );
}
