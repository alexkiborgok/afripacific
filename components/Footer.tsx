import Link from "next/link";
import { Droplets, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "var(--font-plus)" }}
            >
              Afripacific
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            A young, passionate cleaning company serving Nairobi since 2023. We
            take pride in every job, no matter how big or small.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-400 shrink-0" /> Nairobi,
              Kenya
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400 shrink-0" /> +254721977882
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-400 shrink-0" />{" "}
              info@afripacific.co.ke
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4
            className="text-white text-sm font-semibold mb-4"
            style={{ fontFamily: "var(--font-plus)" }}
          >
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link
                  href={h}
                  className="hover:text-primary-400 transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-white text-sm font-semibold mb-4"
            style={{ fontFamily: "var(--font-plus)" }}
          >
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Residential Cleaning",
              "Office Cleaning",
              "Carpet Cleaning",
              "Sofa Cleaning",
              "Car Detailing",
              "Fumigation",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="hover:text-primary-400 transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <span>
            © {new Date().getFullYear()} Afripacific Cleaning Services. All
            rights reserved.
          </span>
          <span>Nairobi, Kenya 🇰🇪</span>
        </div>
      </div>
    </footer>
  );
}