import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Leaf,
  Clock,
} from "lucide-react";

const services = [
  {
    name: "Residential Cleaning",
    desc: "Full home cleans — vacuuming, mopping, dusting & more.",
  },
  {
    name: "Office Cleaning",
    desc: "Clean, hygienic workspaces your team will love.",
  },
  {
    name: "Carpet & Sofa Cleaning",
    desc: "Deep extraction cleaning for soft furnishings.",
  },
  {
    name: "Car Detailing",
    desc: "Interior & exterior car cleaning done right.",
  },
  {
    name: "Fumigation",
    desc: "Safe, effective pest control for homes & offices.",
  },
  {
    name: "Mattress Cleaning",
    desc: "Allergen removal for a healthier sleep.",
  },
];

const why = [
  {
    icon: Shield,
    title: "Trusted & Vetted",
    desc: "Every cleaner is background-checked.",
  },
  {
    icon: Leaf,
    title: "Eco Products",
    desc: "Safe for kids, pets & the environment.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    desc: "We respect your schedule.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&h=900&fit=crop"
            alt="Professional cleaning"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        {/* decorative circle */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-primary-800/60 border border-primary-600/40 text-primary-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{" "}
              Nairobi's Trusted Cleaning Partner
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
              Clean Spaces.
              <br />
              <span className="text-primary-300">Happy People.</span>
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed mb-8 max-w-lg">
              Afripacific delivers reliable, professional cleaning services
              across Nairobi — from your home and office to your car and sofa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-full hover:bg-primary-50 transition-colors shadow-lg"
              >
                Book a Clean <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-primary-200 text-sm">
              {["Vetted Cleaners", "Eco-Friendly", "Same-Day Available"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary-400" /> {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-primary-600 text-sm font-semibold mb-2">
              What We Do
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-primary-500 mb-4 group-hover:scale-125 transition-transform" />
                <h3 className="font-semibold text-slate-900 mb-1.5">
                  {s.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&h=500&fit=crop"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-primary-600 text-sm font-semibold mb-2">
                Why Afripacific
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Small Company,
                <br />
                Big Commitment
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We're a fresh face in Nairobi's cleaning industry, but our
                passion and work ethic are unmatched. Every client gets our
                personal attention and the same high standard of clean.
              </p>
              <div className="space-y-5">
                {why.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {title}
                      </h4>
                      <p className="text-slate-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 bg-primary-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-700 transition-colors"
              >
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary-600 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Ready for a cleaner space?
            </h2>
            <p className="text-primary-100 text-sm mt-1">
              Get a free quote today — we cover all Nairobi.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-full hover:bg-primary-50 transition-colors"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}