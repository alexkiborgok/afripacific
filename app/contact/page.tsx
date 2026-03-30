"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const details = [
  { icon: MapPin, label: "Location", lines: ["Nairobi, Kenya"] },
  { icon: Phone, label: "Phone / WhatsApp", lines: ["+254 721977882"] },
  { icon: Mail, label: "Email", lines: ["info@afripacific.co.ke"] },
  {
    icon: Clock,
    label: "Hours",
    lines: ["Mon–Sat: 7AM – 7PM", "Sun: 9AM – 4PM"],
  },
];

const services = [
  "Residential Cleaning",
  "Office Cleaning",
  "Carpet Cleaning",
  "Sofa Cleaning",
  "Mattress Cleaning",
  "Car Detailing",
  "Cabro Cleaning",
  "Fumigation",
  "Community Service",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.phone || !form.service) {
    alert("Please fill all required fields");
    return;
  }

  const phoneNumber = "254721977882";

  const message = `
  *NEW CLEANING REQUEST*

  👤 *Name:* ${form.name}
  📞 *Phone:* ${form.phone}
  🧹 *Service:* ${form.service}

  📝 *Details:*
  ${form.message || "No additional details"}
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  setLoading(true);
  setTimeout(() => {
    window.open(whatsappUrl, "_blank");
    setLoading(false);
  }, 500);

  setSent(true);
};

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-primary-300 text-sm font-semibold mb-2">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-primary-200 max-w-lg">
            Book a clean or ask a question — we respond within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Book a Service
              </h2>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Request Received!
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Thanks {form.name.split(" ")[0]}! We'll call or WhatsApp you
                    shortly to confirm.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-5 text-primary-600 text-sm font-medium hover:underline"
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        required
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Service *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handle}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={4}
                      placeholder="Tell us about your space, location or any special requirements…"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold py-3 rounded-full hover:bg-primary-700 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Details */}
            <div className="space-y-4">
              {details.map(({ icon: Icon, label, lines }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 mb-0.5">
                      {label}
                    </p>
                    {lines.map((l) => (
                      <p key={l} className="text-slate-800 text-sm font-medium">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white rounded-2xl p-5 hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-green-100 text-xs">
                    Fastest way to reach us
                  </p>
                </div>
              </a>

              {/* FAQ tiny */}
              <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100">
                <h4 className="font-semibold text-slate-900 text-sm mb-3">
                  Quick FAQ
                </h4>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="font-medium">Do I supply equipment?</span>{" "}
                    — No, we bring everything.
                  </p>
                  <p>
                    <span className="font-medium">Payment?</span> — M-Pesa,
                    cash, or bank transfer after the job.
                  </p>
                  <p>
                    <span className="font-medium">Same-day available?</span> —
                    Yes, subject to availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}