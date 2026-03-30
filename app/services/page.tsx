import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Residential / House Cleaning",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    desc: "A thorough clean of your entire home, handled with care.",
    items: [
      "Vacuuming all rooms",
      "Mopping floors",
      "Dusting surfaces",
      "Disinfecting restrooms",
      "Cleaning windows",
      "Managing waste",
      "Replenishing supplies",
      "Laundry & dry cleaning",
    ],
    price: "From KES 2,000",
  },
  {
    title: "Office Cleaning",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    desc: "Keep your workplace hygienic and presentable for your team and clients.",
    items: [
      "Workstation sanitization",
      "Floor cleaning",
      "Restroom disinfection",
      "Waste removal",
      "Kitchen / break room cleaning",
    ],
    price: "From KES 3,500",
  },
  {
    title: "Express Carpet Cleaning",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    desc: "Hot water extraction to lift dirt, stains and allergens from your carpets.",
    items: [
      "Deep steam cleaning",
      "Stain removal",
      "Fast drying",
      "Deodorizing",
    ],
    price: "From KES 600",
  },
  {
    title: "Sofa Cleaning",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    desc: "Revive your upholstery — we handle fabric and leather sofas of all sizes.",
    items: [
      "Fabric & leather care",
      "Stain treatment",
      "Odour elimination",
      "Quick turnaround",
    ],
    price: "From KES 600",
  },
  {
    title: "Mattress Cleaning",
    image:
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=600&h=400&fit=crop",
    desc: "Remove dust mites and allergens for a cleaner, healthier sleep.",
    items: [
      "Deep steam sanitization",
      "Allergen removal",
      "Deodorizing",
      "Stain treatment",
    ],
    price: "From KES 1,200",
  },
  {
    title: "Car Detailing",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop",
    desc: "Full interior and exterior detailing to keep your vehicle spotless.",
    items: [
      "Interior vacuum & wipe",
      "Dashboard & console clean",
      "Exterior wash & rinse",
      "Window polishing",
    ],
    price: "From KES 1,500",
  },
  {
    title: "Cabro Cleaning",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    desc: "Pressure washing for driveways, pathways and paved surfaces.",
    items: [
      "High-pressure washing",
      "Stain & moss removal",
      "Compound & driveway cleaning",
    ],
    price: "From KES 2,500",
  },
  {
    title: "Fumigation",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    desc: "Safe and effective pest control for homes, offices and commercial spaces.",
    items: [
      "Cockroaches & bedbugs",
      "Rodent control",
      "Safe approved chemicals",
      "Residential & commercial",
    ],
    price: "From KES 2,000",
  },
  {
    title: "Community Service",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    desc: "We give back — offering discounted and free cleaning to community spaces and NGOs in Nairobi.",
    items: [
      "Schools & churches",
      "Community centres",
      "Charitable rates",
      "Volunteer partnerships",
    ],
    price: "Contact us",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-primary-300 text-sm font-semibold mb-2">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
            Our Services
          </h1>
          <p className="text-primary-200 max-w-lg">
            From everyday home cleaning to specialist treatments — all delivered
            with care across Nairobi.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="relative w-full md:w-72 lg:w-80 shrink-0 h-52 md:h-auto">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  {s.title}
                </h2>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  {s.desc}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary-500 shrink-0" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-semibold text-primary-700">
                    {s.price}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 bg-primary-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    Book <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}