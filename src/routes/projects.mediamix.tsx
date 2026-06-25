import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import p7 from "@/assets/mediamix/mm_clients_logos.jpg.asset.json";
import mmLogo from "@/assets/mediamix/mm_logo.png.asset.json";
import p11 from "@/assets/mediamix/mm_ivoltaa_hero.png.asset.json";
import p12 from "@/assets/mediamix/mm_ivoltaa_festival.png.asset.json";
import p13 from "@/assets/mediamix/mm_ivoltaa_100w_new.png.asset.json";
import p14 from "@/assets/mediamix/mm_ivoltaa_sound.png.asset.json";
import p15 from "@/assets/mediamix/mm_ivoltaa_reel_new.png.asset.json";
import pirSocial from "@/assets/mediamix/mm_pir_social.png.asset.json";
import pirCanopy from "@/assets/mediamix/mm_pir_canopy.png.asset.json";
import pirCard from "@/assets/mediamix/mm_pir_card.png.asset.json";
import p25 from "@/assets/mediamix/mm_page_25.jpg.asset.json";
import saanGrid from "@/assets/mediamix/mm_saan_grid.png.asset.json";
import fsProfile from "@/assets/mediamix/mm_fs_profile.png.asset.json";
import fsSnack from "@/assets/mediamix/mm_fs_snack_new.png.asset.json";
import fsReels1 from "@/assets/mediamix/mm_fs_reels1.png.asset.json";
import fsReels2 from "@/assets/mediamix/mm_fs_reels2.png.asset.json";
import p35 from "@/assets/mediamix/mm_page_35.jpg.asset.json";
import wowBrochure from "@/assets/mediamix/mm_wow_brochure.png.asset.json";

export const Route = createFileRoute("/projects/mediamix")({
  head: () => ({
    meta: [
      { title: "MEDIAMIX Internship — Case Study · Shashank Kumar" },
      {
        name: "description",
        content:
          "Graphic Design Internship at MEDIAMIX, Gurgaon (Dec 2024 – Feb 2025) — social media creatives, reels, branding and marketing assets for iVoltaa, PIR, Silverglades, Saan Verdanté, The Food Street, Roslyn Coffee and Wheel of Wellness.",
      },
      { property: "og:title", content: "MEDIAMIX Internship — Case Study" },
      {
        property: "og:description",
        content:
          "11 weeks of brand work, social design, reels and marketing assets for seven clients at MEDIAMIX Gurgaon.",
      },
      { property: "og:image", content: p11.url },
    ],
  }),
  component: MediaMixCaseStudy,
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

function Figure({
  src,
  alt,
  caption,
  ratio = "aspect-[16/10]",
  fit = "cover",
  bgClass = "bg-[#0a0a1f]",
  padClass = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  fit?: "cover" | "contain";
  bgClass?: string;
  padClass?: string;
}) {
  const isContain = fit === "contain";
  return (
    <motion.figure {...fade} className="space-y-3">
      <div className={`overflow-hidden rounded-xl border border-white/10 ${bgClass} ${ratio} ${padClass}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full ${isContain ? "object-contain" : "object-cover"} hover:scale-[1.02] transition-transform duration-700`}
        />
      </div>
      {caption && <figcaption className="text-xs text-foreground/50">{caption}</figcaption>}
    </motion.figure>
  );
}

function ShowcaseRow({
  label,
  n,
  title,
  description,
  src,
  alt,
  bg = false,
}: {
  label: string;
  n: string;
  title: string;
  description: React.ReactNode;
  src: string;
  alt: string;
  bg?: boolean;
}) {
  return (
    <section className={`px-4 sm:px-8 py-24 ${bg ? "bg-white/[0.02] border-y border-white/5" : ""}`}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel n={n}>{label}</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fade}>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
              {title}
            </h2>
            <p className="text-foreground/75 leading-relaxed">{description}</p>
          </motion.div>
          <Figure src={src} alt={alt} ratio="aspect-[16/10]" />
        </div>
      </div>
    </section>
  );
}


const meta = [
  { k: "Company", v: "MEDIAMIX Branding & Communications, Gurgaon" },
  { k: "Role", v: "Graphic Design Intern" },
  { k: "Duration", v: "Dec 2024 – Feb 2025 · 11 Weeks" },
  { k: "Tools", v: "Photoshop · Illustrator · After Effects" },
];

const deliverables = [
  "Social Media Design",
  "Instagram Reels",
  "Website Banners",
  "Branding & Stationery",
  "Promotional Collateral",
  "Festival Creatives",
  "Recipe Carousels",
  "Menu & Catalog Design",
];

const clients = [
  { n: "iVoltaa", t: "Tech · Cables & Connectors", d: "7 posts and 2 reels — high-tech aesthetic, brand colours, performance-driven copy." },
  { n: "PIR Brand", t: "FMCG · Mustard Oil", d: "7 carousels, 5 posts, business cards and promotion-table graphics." },
  { n: "Silverglades", t: "Real Estate", d: "Maha Shivratri reel — two visual options, bold and subtle." },
  { n: "Saan Verdanté", t: "Real Estate · Sector 95 Gurugram", d: "Nature-inspired social posts and festival creatives." },
  { n: "The Food Street", t: "F&B · 226K Instagram", d: "Food reels and posts for top brands like KFC, Costa and Pizza Hut." },
  { n: "Roslyn Coffee", t: "F&B · Café", d: "A clean, minimal menu — no unnecessary elements, just a sleek layout." },
  { n: "Wheel of Wellness", t: "Health · Doctor-led Initiative", d: "Catalog design for well-being and lifestyle classes." },
];

const process = [
  { n: "01", t: "Brief", d: "Client requirements, channel, tone and asset list from the account lead." },
  { n: "02", t: "Reference", d: "Brand audit — past creatives, brand colours, typography and category benchmarks." },
  { n: "03", t: "Concept", d: "Rough layouts and copy directions for review with the senior designer." },
  { n: "04", t: "Design", d: "Final artwork in Illustrator and Photoshop, motion in After Effects." },
  { n: "05", t: "Review", d: "Internal QC and client rounds — colour, typography, placement." },
  { n: "06", t: "Delivery", d: "Final files exported for Instagram, web and print specs." },
];

const tools = [
  { n: "Adobe Photoshop", d: "Compositing, retouching, banners and photo-led social posts." },
  { n: "Adobe Illustrator", d: "Logo work, vector posts, packaging mock-ups and branded stationery." },
  { n: "Adobe After Effects", d: "Instagram reels, kinetic typography and animated product collages." },
];

const learnings = [
  "Working at agency pace — turning briefs into final files inside a week.",
  "Designing inside seven different brand systems without losing each voice.",
  "Translating product features into one strong line + one strong image.",
  "Building creatives that read in 1.5 seconds in a thumb-scroll feed.",
  "Handling client revisions — separating taste from brand-fit feedback.",
  "Moving between Photoshop, Illustrator and After Effects as a single pipeline.",
];

function MediaMixCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(109,139,255,0.15),transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fade} className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Pill>Case Study 04</Pill>
              <Pill>Internship · Agency</Pill>
              <Pill>Branding · Social</Pill>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[6rem] leading-[0.95] font-semibold tracking-tight">
              MEDIAMIX
              <br />
              <span className="text-accent-purple italic font-light">Internship.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Eleven weeks as a Graphic Design Intern at MEDIAMIX Gurgaon —
              designing social media creatives, reels, website banners and
              branding assets for seven clients across tech, F&amp;B, real
              estate and wellness.
            </p>
          </motion.div>

          <motion.div
            {...fade}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-white/10"
          >
            {meta.map((m) => (
              <div key={m.k}>
                <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45 mb-2">{m.k}</div>
                <div className="text-sm text-foreground/95">{m.v}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fade} className="mt-8 flex flex-wrap gap-2">
            {deliverables.map((d) => (
              <span
                key={d}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/70"
              >
                {d}
              </span>
            ))}
          </motion.div>

          {/* HERO IMAGE — clients */}
          <div className="mt-14">
            <Figure src={p7.url} alt="MEDIAMIX clients — iVoltaa, PIR, Silverglades, Saan Verdanté, Wheel of Wellness, Roslyn Coffee" ratio="aspect-[16/10]" caption="Seven clients · eleven weeks · one design pipeline." />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="01">Internship Overview</SectionLabel>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <motion.div {...fade} className="space-y-6">
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.1] font-semibold">
                Agency pace. <span className="text-accent-purple italic font-light">Seven brand systems. One designer.</span>
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                As a Graphic Design Intern at MEDIAMIX, I focused on creating
                engaging social media graphics and website banners that aligned
                with each brand's identity. I collaborated with the team to
                design visually appealing content for digital platforms, keeping
                consistency and effectiveness across every marketing campaign.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                The internship sharpened my skills in layout, typography and
                colour theory inside a fast-paced creative environment — and
                taught me how to switch between brand voices without losing
                the strength of any single one.
              </p>
            </motion.div>
            <Figure src={mmLogo.url} alt="MEDIAMIX Branding & Communications logo" ratio="aspect-[3/4]" fit="contain" bgClass="bg-white" padClass="p-10 sm:p-16" />
          </div>
        </div>
      </section>

      {/* ABOUT MEDIAMIX */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="02">About MEDIAMIX</SectionLabel>
          <motion.div {...fade} className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] font-semibold mb-6">
              Tailor-made brand identity for <span className="text-accent-purple italic font-light">every venture they touch.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              MEDIAMIX Branding &amp; Communications is a Delhi-based creative
              agency that thrives on building one-of-a-kind brand identities.
              Their dynamic work culture and specialization in distinctive
              design language is what puts each client on the map.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              The agency is an amalgamation of innovative design, accessible
              technology and a simple approach — a deep dive into design while
              staying rooted in the fundamentals of digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="03">My Role &amp; Responsibilities</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Social Media Design", "Instagram posts, carousels and stories across seven brands."],
              ["Reels &amp; Motion", "Animated product collages and festival reels in After Effects."],
              ["Website Banners", "Hero banners and campaign creatives for client websites."],
              ["Branding Collateral", "Business cards, promotion tables and stationery for PIR Brand."],
              ["Catalogs &amp; Menus", "Clean, functional catalog for Wheel of Wellness and a sleek menu for Roslyn."],
              ["Festival Creatives", "Lohri, Vasant Panchami, Makar Sankranti, Maha Shivratri — on brand for each client."],
            ].map(([t, d]) => (
              <motion.div
                {...fade}
                key={t}
                className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:border-accent-purple/40 transition-colors"
              >
                <div className="text-sm font-semibold mb-2" dangerouslySetInnerHTML={{ __html: t }} />
                <div className="text-sm text-foreground/65 leading-relaxed" dangerouslySetInnerHTML={{ __html: d }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="04">Client Projects</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12 max-w-3xl">
            Seven brands. Seven languages. One design system in my head.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((c, i) => (
              <motion.div
                {...fade}
                key={c.n}
                className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.04] to-transparent"
              >
                <div className="text-xs font-mono text-accent-purple mb-3">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-lg font-semibold">{c.n}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 mb-3">{c.t}</div>
                <div className="text-sm text-foreground/70 leading-relaxed">{c.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IVOLTAA */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="05">iVoltaa · Tech Accessories Brand</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                iVoltaa · Tech Accessories Brand
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                Designed social media creatives and digital campaigns for
                iVoltaa, a technology accessories brand focused on cables,
                chargers, and audio products. The work included product
                promotions, campaign visuals, festive creatives, and animated
                content while maintaining a modern and performance-driven brand
                identity.
              </p>
            </motion.div>
            <Figure src={p11.url} alt="iVoltaa social media showcase — product hero shots" ratio="aspect-[16/10]" />
          </div>

          <div className="space-y-6">
            <Figure src={p12.url} alt="iVoltaa festival creatives — Lohri, Vasant Panchami & Makar Sankranti" ratio="aspect-[16/10]" caption="Festival Creatives — Lohri, Vasant Panchami & Makar Sankranti. Created festive social media campaigns aligned with the iVoltaa brand identity while celebrating major Indian festivals through engaging digital content." />
            <Figure src={p13.url} alt="iVoltaa — Pass the Power, 100W Super Fast Charging Campaign" ratio="aspect-[16/10]" fit="contain" bgClass="bg-[#2b5cc7]" caption="Pass the Power — 100W Super Fast Charging Campaign. Developed a high-impact promotional creative highlighting iVoltaa's 100W fast charging capability through bold typography, strong visual hierarchy, and product-focused storytelling." />
            <Figure src={p14.url} alt="iVoltaa — Ignite Your Music, Flawless Uninterrupted Sound" ratio="aspect-[16/10]" caption="Ignite Your Music — Flawless, Uninterrupted Sound. Designed a campaign emphasizing premium audio quality and uninterrupted listening experiences through immersive visuals and dynamic product presentation." />
            <Figure src={p15.url} alt="iVoltaa — Animated Product Reel" ratio="aspect-[16/10]" caption="Animated Product Reel — Created an animated social media reel for iVoltaa showcasing audio accessories through dynamic motion graphics and product-focused storytelling. The reel combines engaging visual transitions, modern typography, and premium product presentation to highlight connectivity and performance while maintaining iVoltaa’s sleek technology-driven brand identity." />
          </div>
        </div>
      </section>

      {/* PIR — SOCIAL MEDIA */}
      <ShowcaseRow
        bg
        n="06"
        label="PIR Brand · Mustard Oil"
        title="PIR Brand · Social Media Campaigns"
        description="Created engaging social media campaigns for PIR Brand Mustard Oil, focusing on product storytelling, seasonal promotions, recipe-based communication, and brand awareness while maintaining a consistent visual identity."
        src={pirSocial.url}
        alt="PIR Brand — Instagram social media posts"
      />

      {/* PIR — CANOPY TENT */}
      <ShowcaseRow
        n="07"
        label="PIR Brand · Canopy Tent Design"
        title="Canopy Tent Design"
        description="Designed promotional canopy tent branding for on-ground marketing activities, ensuring strong product visibility, consistent branding, and effective retail activation."
        src={pirCanopy.url}
        alt="PIR Brand — MustaPure promotional canopy tent"
      />

      {/* PIR — BUSINESS CARD */}
      <ShowcaseRow
        bg
        n="08"
        label="PIR Brand · Business Card Design"
        title="Business Card Design"
        description="Developed professional business card stationery reflecting the PIR Brand visual identity through a clean layout, strong brand colors, and clear information hierarchy."
        src={pirCard.url}
        alt="PIR Brand — Business card stationery design"
      />

      {/* SILVERGLADES */}
      <ShowcaseRow
        n="09"
        label="Silverglades · Real Estate"
        title="Silverglades · Real Estate"
        description="Designed a Maha Shivratri reel for Silverglades — a premium real-estate developer — exploring two visual directions, one bold and graphic, the other subtle and editorial, while staying on-brand for The Address Makers."
        src={p25.url}
        alt="Silverglades — Maha Shivratri reel"
      />

      {/* SAAN VERDANTÉ */}
      <ShowcaseRow
        bg
        n="10"
        label="Saan Verdanté · Real Estate"
        title="Saan Verdanté · Reel Thumbnails"
        description="Created social media reel thumbnails and Instagram grid assets for Saan Verdanté, maintaining a luxury real-estate aesthetic through clean typography, nature-inspired visuals, and a cohesive digital presence."
        src={saanGrid.url}
        alt="Saan Verdanté — Nature Inspired Living Instagram grid"
      />

      {/* RESTAURANT REELS — MERGED */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="11">F&amp;B · Restaurant Marketing</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                Snack Campaign Reels
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                Created Instagram reel creatives and social media campaigns promoting popular food items through vibrant compositions, strong visual hierarchy, and social-first content designed to increase engagement — covering snack promotions, restaurant partnerships, festive promotions, and audience engagement content.
              </p>
            </motion.div>
            <Figure src={fsSnack.url} alt="Snack campaign Instagram reels — sunburst background mockups" ratio="aspect-[16/10]" fit="contain" bgClass="bg-[#0a0a1f]" padClass="p-4" />
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <Figure src={fsProfile.url} alt="Instagram profile mockup" ratio="aspect-[3/4]" fit="contain" bgClass="bg-[#0a0a1f]" padClass="p-3" />
            <Figure src={fsReels1.url} alt="Snack reels — additional creative" ratio="aspect-[3/4]" fit="contain" bgClass="bg-[#0a0a1f]" padClass="p-3" />
            <Figure src={fsReels2.url} alt="Social media campaign reels" ratio="aspect-[3/4]" fit="contain" bgClass="bg-[#0a0a1f]" padClass="p-3" />
          </div>
        </div>
      </section>

      {/* ROSLYN COFFEE */}
      <ShowcaseRow
        bg
        n="12"
        label="Roslyn Coffee · F&B"
        title="Roslyn Coffee — minimal, functional menu."
        description="Designed a sleek, minimal menu for Roslyn Coffee — no unnecessary elements, just a clean layout that lets the offering breathe and reads effortlessly in a café setting."
        src={p35.url}
        alt="Roslyn Coffee menu"
      />

      {/* WHEEL OF WELLNESS */}
      <ShowcaseRow
        n="13"
        label="Wheel of Wellness · Health"
        title="Wheel of Wellness · Brochure Design"
        description="Designed a premium brochure showcasing wellness services, membership offerings, and brand philosophy through a clean editorial layout, elegant typography, and luxury lifestyle imagery."
        src={wowBrochure.url}
        alt="Wheel of Wellness — Brochure design"
      />


      {/* DESIGN PROCESS */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="14">Design Process</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12">
            Brief to delivery, every week, every client.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((s) => (
              <motion.div
                {...fade}
                key={s.n}
                className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.04] to-transparent"
              >
                <div className="text-xs font-mono text-accent-purple mb-3">{s.n}</div>
                <div className="font-display text-lg font-semibold mb-2">{s.t}</div>
                <div className="text-sm text-foreground/65 leading-relaxed">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="15">Tools Used</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-5">
            {tools.map((t) => (
              <motion.div
                {...fade}
                key={t.n}
                className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:border-accent-purple/40 transition-colors"
              >
                <div className="font-display text-lg font-semibold mb-2">{t.n}</div>
                <div className="text-sm text-foreground/65 leading-relaxed">{t.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="16">Key Learnings &amp; Growth</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learnings.map((l, i) => (
              <motion.div
                {...fade}
                key={i}
                className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.04] to-transparent"
              >
                <div className="text-xs font-mono text-accent-purple mb-3">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-sm text-foreground/80 leading-relaxed">{l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL OUTCOME */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="17">Final Outcome</SectionLabel>
          <motion.div {...fade} className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] font-semibold mb-6">
              Eleven weeks. Seven clients. <span className="text-accent-purple italic font-light">One sharper designer.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed">
              The internship ended with a full body of agency-shipped work —
              live on Instagram feeds, printed on tables, sitting in client
              inboxes as reels. More importantly, it gave me the muscle
              memory of agency pace: brief, concept, design, revise, ship,
              repeat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="px-4 sm:px-8 py-16 border-t border-white/5">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent-purple transition-colors">
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
          <Link to="/projects/last-night" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent-purple transition-colors">
            Next case study — The Last Night <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
