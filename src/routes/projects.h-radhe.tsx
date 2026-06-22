import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";


import p22 from "@/assets/hradhe/u57.jpg.asset.json";
import p23 from "@/assets/hradhe/p60.png.asset.json";
import p24 from "@/assets/hradhe/u73.jpg.asset.json";
import p26 from "@/assets/hradhe/logo-prev.jpg.asset.json";
import p27 from "@/assets/hradhe/logo-curr.jpg.asset.json";
import p29 from "@/assets/hradhe/u55.jpg.asset.json";
import p30 from "@/assets/hradhe/u56.jpg.asset.json";
import p31 from "@/assets/hradhe/u75.jpg.asset.json";
import p32 from "@/assets/hradhe/u49.jpg.asset.json";
import p33 from "@/assets/hradhe/u50.jpg.asset.json";
import p34 from "@/assets/hradhe/group42.png.asset.json";
import p35 from "@/assets/hradhe/n74.jpg.asset.json";
import p36 from "@/assets/hradhe/n42.jpg.asset.json";
import p37 from "@/assets/hradhe/n59.jpg.asset.json";
import p39 from "@/assets/hradhe/ip3.jpg.asset.json";
import p40 from "@/assets/hradhe/n47.jpg.asset.json";
import p41 from "@/assets/hradhe/ip1.jpg.asset.json";
import p42 from "@/assets/hradhe/ip8.jpg.asset.json";
import p44 from "@/assets/hradhe/ip16.jpg.asset.json";
import p45 from "@/assets/hradhe/p45.jpg.asset.json";
import websiteVideo from "@/assets/hradhe/website.mp4.asset.json";

export const Route = createFileRoute("/projects/h-radhe")({
  head: () => ({
    meta: [
      { title: "H. Radhe Jewellery — Case Study · Shashank Kumar" },
      {
        name: "description",
        content:
          "Brand identity and digital presence for H. Radhe Jewellery — a 50-year-old Bikaner-rooted polki house transitioning from B2B manufacturing to a direct-to-bride luxury brand.",
      },
      { property: "og:title", content: "H. Radhe Jewellery — Case Study" },
      { property: "og:description", content: "Brand identity, logo, social, website, packaging, 3D & AR for a luxury polki jewellery house." },
      { property: "og:image", content: p22.url },
    ],
  }),
  component: HRadheCaseStudy,
});

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md px-4 sm:px-8 py-5 border-b border-white/5">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-xl tracking-tight">
          Shashank's Portfolio
        </Link>
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent-purple transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>
      </div>
    </header>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border border-white/15 text-foreground/80">
      {children}
    </span>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-xs font-mono text-accent-purple">{n}</span>
      <span className="h-px flex-1 bg-white/10" />
      <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">{children}</span>
    </div>
  );
}

function Figure({ src, alt, caption, ratio = "aspect-[4/5]" }: { src: string; alt: string; caption?: string; ratio?: string }) {
  return (
    <motion.figure {...fade} className="space-y-3">
      <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0a1f] ${ratio}`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" />
      </div>
      {caption && <figcaption className="text-xs text-foreground/50">{caption}</figcaption>}
    </motion.figure>
  );
}

const meta = [
  { k: "Client", v: "H. Radhe Jewellers, New Delhi" },
  { k: "Duration", v: "16 Weeks" },
  { k: "Role", v: "Brand Designer & Visual Communication Intern" },
  { k: "Year", v: "2025 – 2026" },
];

const deliverables = [
  "Brand Identity", "Logo Design", "Website Design",
  "Social Media Design", "Packaging Design", "Stationery Design",
  "3D Jewellery Visualization", "AR Try-On Experience",
];

function HRadheCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fade} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Pill>Case Study 01</Pill>
              <Pill>Luxury · Jewellery</Pill>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[6rem] leading-[0.95] font-semibold tracking-tight">
              H. Radhe
              <br />
              <span className="text-accent-purple italic font-light">Jewellery.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Brand identity and digital presence for a 50-year-old Bikaner-rooted polki house transitioning
              from B2B manufacturing to a direct-to-bride luxury brand.
            </p>
          </motion.div>

          <motion.div {...fade} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-white/10">
            {meta.map((m) => (
              <div key={m.k}>
                <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45 mb-2">{m.k}</div>
                <div className="text-sm text-foreground/95">{m.v}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fade} className="mt-8 flex flex-wrap gap-2">
            {deliverables.map((d) => (
              <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/70">
                {d}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="01">About the brand</SectionLabel>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <motion.div {...fade} className="space-y-6">
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.1] font-semibold">
                From our hands. <span className="text-accent-purple italic font-light">For your wedding.</span>
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                H. Radhe is a Bikaner-rooted polki house with over five decades of manufacturing legacy.
                Generations of craftsmen have shaped the work quietly, consistently, and without a name in front —
                trusted by the trade, but invisible to the bride.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Every piece is made in their own workshop, by the same hands that have defined the work for years.
                No layers between the maker and the wearer. As the house moves from a B2B legacy to a direct
                relationship with the bride, the approach remains unchanged — measured, precise, and rooted in tradition.
              </p>
            </motion.div>
            <Figure src={p22.url} alt="About the company" ratio="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <Figure src={p24.url} alt="Brand brief" ratio="aspect-[3/4]" />
          <motion.div {...fade}>
            <SectionLabel n="02">The brief</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
              Build a complete brand system for a heritage house entering the luxury direct-to-bride market.
            </h2>
            <p className="text-foreground/75 leading-relaxed">
              The brief was to develop a complete brand identity for H. Radhe — visual elements,
              communication style, and digital presence — designed to work across print, social media,
              and web. The scope also included developing 3D visual outputs to enhance how the jewellery
              is presented online and in immersive AR try-on experiences.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Identity system", "Communication tone", "Social presence", "Web experience", "Packaging system", "3D & AR assets"].map((t) => (
                <div key={t} className="border border-white/10 rounded-lg p-4 text-sm text-foreground/80">{t}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="03">Research & understanding</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                Polki — and what it actually is.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Polki is the uncut form of diamond — raw, unfaceted, naturally radiant. It carries a softness
                that faceted stones cannot reproduce. Combined with <em>jadau</em>, the centuries-old art of
                hand-setting stones in gold, it forms the heart of North-Indian bridal jewellery.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                The research phase focused on understanding this craft category, the modern bride's references,
                and the visual language of competing heritage houses — defining a positioning that felt quiet,
                rooted, and unmistakably premium.
              </p>
            </motion.div>
            <Figure src={p23.url} alt="Team and craft research" ratio="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* LOGO */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="04">Logo development</SectionLabel>
          <motion.div {...fade} className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] font-semibold mb-6">
              A face name, a heritage line, <span className="text-accent-purple italic font-light">and a maker's signature.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed">
              The previous logo carried recognition but missed the human story of the house. The refined identity
              keeps the face name <strong>H. RADHE</strong> for everyday touchpoints, layers <strong>Hanuman Mal Radhe Shyam</strong>
              beneath to signal legacy, and introduces the owner's handwritten signature — <em>by Madhu Sudan</em> —
              as a maker's mark that makes the brand human.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <Figure src={p26.url} alt="Previous Logo" caption="Previous Logo" />
            <Figure src={p27.url} alt="Current Logo" caption="Current Logo" />
          </div>
        </div>
      </section>

      {/* IDENTITY SYSTEM */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="05">Visual identity system</SectionLabel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Figure src={p30.url} alt="Cabochon Emerald" caption="Gemstone Language" />
            <Figure src={p31.url} alt="Kundan Setting" caption="Craft Technique" />
            <Figure src={p29.url} alt="Pearl Latkan" caption="Signature Detail" />
          </div>

          {/* Colour swatches */}
          <motion.div {...fade} className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { c: "#1A4731", n: "Dark Green" },
              { c: "#0D1F14", n: "Black Green" },
              { c: "#BC9C22", n: "Gold" },
              { c: "#FFF9EA", n: "Light Yellow" },
              { c: "#FFFCE4", n: "Cream" },
              { c: "#FFFFFF", n: "White" },
            ].map((s) => (
              <div key={s.n} className="space-y-2">
                <div className="aspect-square rounded-lg border border-white/10" style={{ background: s.c }} />
                <div className="text-xs text-foreground/80">{s.n}</div>
                <div className="text-[11px] font-mono text-foreground/50">{s.c}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="06">Social media design</SectionLabel>
          <motion.div {...fade} className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] font-semibold mb-6">
              A grid built like an editorial — <span className="text-accent-purple italic font-light">quiet, layered, premium.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed">
              The Instagram system pairs product shoots with model storytelling and editorial typography
              in a 1080×1350 vertical canvas. The grid follows an alternating rhythm so the feed reads
              as one continuous artefact rather than a series of posts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Figure src={p32.url} alt="Instagram post design 1" />
            <Figure src={p33.url} alt="Instagram post design 2" />
          </div>

          <div className="mt-6">
            <Figure src={p34.url} alt="Instagram 3x3 grid system" caption="Grid system — alternating product, model and storytelling posts" ratio="aspect-[16/10]" />
          </div>

          <div className="mt-12">
            <h3 className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6">Post exploration</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Figure src={p35.url} alt="Post exploration A" />
              <Figure src={p36.url} alt="Post exploration B" />
              <Figure src={p37.url} alt="Post exploration C" />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6">Polki & Jadau craft creatives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Figure src={p39.url} alt="Polki creative" caption="Polki — diamonds in their purest form" />
              <Figure src={p40.url} alt="Jadau creative" caption="Jadau — the art of setting, perfected by hand" />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6">Product & model posts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Figure src={p41.url} alt="Product post" />
              <Figure src={p42.url} alt="Model post" />
              <Figure src={p44.url} alt="Campaign post" />
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="07">Website design</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                A digital storefront for the bride — heritage on every scroll.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                The website translates the identity into a calm, editorial e-commerce experience: a hero that
                introduces the house, collection pages for Polki and Jadau, a craft story, and an enquiry-first
                purchase model in line with the brand's no-price language rules.
              </p>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li><span className="text-accent-purple mr-2">·</span> <strong className="text-foreground">Objective</strong> — translate the H. Radhe identity into a quiet, premium e-commerce experience.</li>
                <li><span className="text-accent-purple mr-2">·</span> <strong className="text-foreground">Structure</strong> — Home · Collections (Polki / Jadau) · The House · Visit · Enquire.</li>
                <li><span className="text-accent-purple mr-2">·</span> <strong className="text-foreground">Tone</strong> — short sentences, no scarcity language, enquiries only.</li>
              </ul>
            </motion.div>
            <Figure src={p45.url} alt="Website key screen" ratio="aspect-[4/5]" />
          </div>
          <motion.figure {...fade} className="space-y-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a1f] aspect-[16/10] group">
              <video
                src={websiteVideo.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="text-xs text-foreground/50">Website — final design</figcaption>
          </motion.figure>
        </div>
      </section>

      {/* 3D & AR */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="08">3D visualization & AR try-on</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] font-semibold mb-6">
                Try the jewellery <span className="text-accent-purple italic font-light">before you fly to Delhi.</span>
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Each signature piece was modelled in <strong>Blender</strong> — gemstones, pearl latkans,
                bevels and metallic shaders — then prepared as lightweight assets for <strong>Lens Studio</strong>
                to power an AR try-on experience.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                For brides outside Delhi, this turns the buying journey into something tactile again: open a
                Snapchat or Instagram lens, see the necklace on yourself, then enquire with the house. It also
                produced a library of photoreal renders used across the website and social grid.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "Software", v: "Blender · Lens Studio" },
                  { k: "Assets", v: "Necklaces · Earrings · Pendants" },
                  { k: "Output", v: "Renders · AR Lens · Web 3D" },
                ].map((x) => (
                  <div key={x.k}>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45 mb-2">{x.k}</div>
                    <div className="text-xs text-foreground/85 leading-relaxed">{x.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              <Figure src={p38.url} alt="3D jewellery render" ratio="aspect-[4/5]" />
              <Figure src={p44.url} alt="AR try-on context" ratio="aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGING & STATIONERY */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="09">Packaging & stationery</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                A box that opens like a moment.
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                The packaging system carries the dark-green and gold palette into a layered unboxing — outer
                sleeve, velvet bed, signature card, and care booklet. Stationery extends the identity into
                business cards, letterheads and brand collateral used across the workshop and showroom.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {["Outer sleeve", "Jewellery box", "Velvet pouch", "Signature card", "Care booklet", "Business cards", "Letterheads", "Brand collateral"].map((x) => (
                  <div key={x} className="text-sm text-foreground/75 border-b border-white/10 pb-2">· {x}</div>
                ))}
              </div>
            </motion.div>
            <Figure src={p41.url} alt="Packaging visual" ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel n="10">Final outcome</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold">
            From a quiet B2B workshop in Bikaner to a <span className="text-accent-purple italic font-light">modern luxury digital brand</span> the bride can hold.
          </motion.h2>
          <motion.p {...fade} className="mt-8 text-lg text-foreground/70 max-w-2xl mx-auto">
            A complete brand system — identity, language, social, website, packaging, and an AR try-on layer —
            built end-to-end across 16 weeks of the H. Radhe internship.
          </motion.p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="11">Gallery</SectionLabel>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {[p22, p32, p34, p33, p35, p39, p40, p36, p37, p41, p42, p44, p45, p46].map((img, i) => (
              <motion.img
                key={i}
                src={img.url}
                alt=""
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                className="w-full rounded-xl border border-white/10 break-inside-avoid hover:scale-[1.01] transition-transform duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="px-4 sm:px-8 py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-4">
          <button
            disabled
            className="text-left p-6 rounded-xl border border-white/10 opacity-40 cursor-not-allowed"
          >
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45 mb-2 flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" /> Previous project
            </div>
            <div className="text-sm">—</div>
          </button>
          <Link
            to="/"
            hash="projects"
            className="text-center p-6 rounded-xl border border-white/15 hover:border-accent-purple/60 transition-colors"
          >
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/60 mb-2">Index</div>
            <div className="text-sm">Back to portfolio</div>
          </Link>
          <Link
            to="/"
            hash="projects"
            className="text-right p-6 rounded-xl border border-white/10 hover:border-accent-purple/60 transition-colors group"
          >
            <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45 mb-2 flex items-center justify-end gap-2">
              Next project <ArrowRight className="w-3 h-3" />
            </div>
            <div className="text-sm group-hover:text-accent-purple transition-colors inline-flex items-center gap-1">
              VR Online Store Experience <ArrowUpRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
