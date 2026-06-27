"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
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

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("success");
      setMessage(result.message);
      event.currentTarget.reset();
      return;
    }

    setStatus("error");
    setMessage(result.message || "Please try again.");
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" placeholder="Your name" required minLength={2} />
      </label>
      <label>
        Phone or WhatsApp
        <input name="phone" placeholder="+91..." required minLength={7} />
      </label>
      <label>
        Preferred area
        <select name="area" required defaultValue="">
          <option value="" disabled>
            Select area
          </option>
          {serviceAreas.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
      </label>
      <label>
        Timing
        <input name="timing" placeholder="Today evening, tomorrow afternoon..." required />
      </label>
      <label>
        Preference
        <select name="preference" required defaultValue="">
          <option value="" disabled>
            Select preference
          </option>
          <option>Premium social companion</option>
          <option>VIP event companion</option>
          <option>Model-style profile</option>
          <option>Local city companion</option>
        </select>
      </label>
      <label>
        Notes
        <textarea name="message" placeholder="Share location, timing, and profile preference." />
      </label>
      <label className="check">
        <input name="consent" type="checkbox" required />
        <span>I confirm that I am 18+ and this is a lawful social companionship inquiry.</span>
      </label>
      <button className="gold" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send discreet inquiry"}
      </button>
      {message ? <div className="notice">{message}</div> : null}
      <div className="actions">
        <a className="button" href={`tel:${siteConfig.phone}`}>
          <Phone size={18} /> Call
        </a>
        <a className="button" href={`https://wa.me/${siteConfig.whatsapp}`}>
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </form>
  );
}
