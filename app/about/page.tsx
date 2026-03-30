import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Care",
    desc: "We treat every space like it's our own.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We give back to the Nairobi community we serve.",
  },
  { icon: Target, title: "Excellence", desc: "We don't cut corners — ever." },
];

const team = [
  {
    name: "Sharky",
    role: "Founder & Operations",
    image:
      "/sharky.jpg",
  },
  {
    name: "Biko",
    role: "Service operations manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Omar",
    role: "Service operations manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-primary-300 text-sm font-semibold mb-2">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
            About Afripacific
          </h1>
          <p className="text-primary-200 max-w-lg">
            A young Nairobi cleaning company with big dreams and an even bigger
            commitment to quality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=450&fit=crop"
                alt="Afripacific team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                We Started in 2023
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Afripacific was founded in Nairobi with a straightforward
                  mission: provide honest, affordable, high-quality cleaning
                  services to homes and businesses across the city.
                </p>
                <p>
                  In just one year, we've grown from a two-person team to a full
                  squad of dedicated cleaners covering residential, commercial,
                  and specialist cleaning across Nairobi's key neighbourhoods.
                </p>
                <p>
                  We're proud to be small — it means every client gets our full
                  attention and we never compromise on quality. We also give
                  back through our community service programme, offering free
                  and discounted cleans to schools, churches, and community
                  organisations.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  ["2+", "Year Running"],
                  ["200+", "Jobs Done"],
                  ["50+", "Happy Clients"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="bg-primary-50 rounded-xl p-3 border border-primary-100"
                  >
                    <div className="text-xl font-extrabold text-primary-700">
                      {v}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">The Team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-slate-900">{t.name}</h3>
                <p className="text-primary-600 text-xs font-medium mt-0.5">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Want to work with us?
            </h2>
            <p className="text-primary-100 text-sm mt-1">
              Book a clean or reach out — we'd love to hear from you.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-full hover:bg-primary-50 transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}