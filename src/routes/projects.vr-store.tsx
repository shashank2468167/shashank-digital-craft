import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";

const vrVideo = { url: "/videos/vr-online-store-experience.mp4" };
const mallVideo = { url: "/videos/srinagar-city-mall.mp4" };
import vr01 from "@/assets/vrstore/vr_01.jpg.asset.json";
import vr03 from "@/assets/vrstore/vr_03.jpg.asset.json";
import vr06 from "@/assets/vrstore/vr_06.jpg.asset.json";
import vr08 from "@/assets/vrstore/vr_08.jpg.asset.json";
import vr09 from "@/assets/vrstore/vr_09.jpg.asset.json";
import vr10 from "@/assets/vrstore/vr_10.jpg.asset.json";
import mall01 from "@/assets/vrstore/mall_01.jpg.asset.json";
import mall03 from "@/assets/vrstore/mall_03.jpg.asset.json";
import mall04 from "@/assets/vrstore/mall_04.jpg.asset.json";
import mall06 from "@/assets/vrstore/mall_06.jpg.asset.json";
import mall07 from "@/assets/vrstore/mall_07.jpg.asset.json";
import mall08 from "@/assets/vrstore/mall_08.jpg.asset.json";
import mall09 from "@/assets/vrstore/mall_09.jpg.asset.json";

export const Route = createFileRoute("/projects/vr-store")({
  head: () => ({
    meta: [
      { title: "VR Online Store Experience — Case Study · Shashank Kumar" },
      {
        name: "description",
        content:
          "Immersive retail design and architectural visualization — an interactive VR shoe store built in Unreal Engine, and a photorealistic Apple reseller storefront for Srinagar City Mall.",
      },
      { property: "og:title", content: "VR Online Store Experience — Case Study" },
      {
        property: "og:description",
        content:
          "Immersive retail design, interactive Unreal Engine store and photorealistic architectural visualization.",
      },
      { property: "og:image", content: vr06.url },
    ],
  }),
  component: VrStoreCaseStudy,
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
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <motion.figure {...fade} className="space-y-3">
      <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0a1f] ${ratio}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
        />
      </div>
      {caption && <figcaption className="text-xs text-foreground/50">{caption}</figcaption>}
    </motion.figure>
  );
}

const meta = [
  { k: "Project", v: "VR Online Store Experience" },
  { k: "Role", v: "3D Artist · Environment Designer · Unreal Engine Artist" },
  { k: "Tools", v: "Unreal Engine · Blender · Substance Painter · Photoshop" },
  { k: "Year", v: "2025 – 2026" },
];

const deliverables = [
  "Immersive Retail Design",
  "Architectural Visualization",
  "Real-time Environment",
  "Lighting & Materials",
  "Interaction System",
  "Cinematic Walkthrough",
];

const designProcess = [
  { n: "01", t: "Research", d: "Studied retail spatial design, customer journeys, and reference VR storefronts." },
  { n: "02", t: "Concept Development", d: "Mood boards, layout sketches, and lighting references for two distinct retail languages." },
  { n: "03", t: "Store Planning", d: "Floor plans, sight-lines, and product zoning informed by real retail flow." },
  { n: "04", t: "3D Modeling", d: "Hard-surface modeling of shelving, fixtures, products, and architectural shell in Blender." },
  { n: "05", t: "Environment Assembly", d: "Scene composition, prop placement, and modular reuse inside Unreal Engine." },
  { n: "06", t: "Lighting", d: "Lumen GI, emissive accents, and ceiling arrays tuned for product readability." },
  { n: "07", t: "Rendering", d: "Real-time interactive output for the VR build, and Movie Render Queue passes for cinematic stills." },
  { n: "08", t: "Optimization", d: "LODs, material instances, and lightmap tuning to hold framerate in VR." },
  { n: "09", t: "Final Presentation", d: "Cinematic walkthroughs, beauty renders, and interactive demo." },
];

const ueWorkflow = [
  "Concept",
  "Modeling",
  "Texturing",
  "Environment Assembly",
  "Lighting",
  "Optimization",
  "Rendering",
  "Final Output",
];

const tools = [
  { n: "Unreal Engine", d: "Real-time rendering, Lumen lighting, interaction blueprints, and cinematic camera." },
  { n: "Blender", d: "Hard-surface modeling of fixtures, shelving, props, and architectural shell." },
  { n: "Substance Painter", d: "PBR texturing — metals, plastics, fabrics, and surface wear for realism." },
  { n: "Photoshop", d: "Textures, signage artwork, posters, and final image grading for renders." },
];

const learnings = [
  "Real-time visualization at production quality",
  "Modular environment creation for retail interiors",
  "Designing for spatial customer flow, not screens",
  "Lighting tuned for product readability",
  "Architectural storytelling through camera and pace",
  "Full Unreal Engine production workflow",
];

const galleryImages = [
  vr06,
  mall03,
  vr03,
  mall06,
  vr09,
  mall08,
  vr01,
  mall04,
  vr08,
  mall07,
  vr10,
  mall09,
];

function VideoBlock({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  return (
    <motion.div {...fade} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07071a] group">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none z-10" />
      <VideoPlayer
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        className="w-full aspect-video"
      />
      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-white/15 text-[11px] uppercase tracking-[0.2em]">
        <Play className="w-3 h-3 text-accent-purple" /> {label}
      </div>
    </motion.div>
  );
}

function VrStoreCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(109,139,255,0.15),transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fade} className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Pill>Case Study 02</Pill>
              <Pill>Immersive · Retail</Pill>
              <Pill>Unreal Engine</Pill>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[6rem] leading-[0.95] font-semibold tracking-tight">
              VR Online
              <br />
              Store <span className="text-accent-purple italic font-light">Experience.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Immersive retail design and architectural visualization — a fully interactive virtual
              shopping environment built in Unreal Engine, paired with a photorealistic
              visualization of a real-world Apple reseller store at Srinagar City Mall.
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

          {/* HERO VIDEO */}
          <div className="mt-14">
            <VideoBlock src={vrVideo.url} poster={vr06.url} label="Live Walkthrough · Unreal Engine" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="01">Project Overview</SectionLabel>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <motion.div {...fade} className="space-y-6">
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.1] font-semibold">
                Retail, <span className="text-accent-purple italic font-light">rebuilt as space.</span>
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                E-commerce reduced shopping to a grid of thumbnails. This project asks a different
                question — what if a digital store felt like a place you could walk into? The goal
                was to design two complementary retail environments: an interactive third-person
                Unreal Engine store where customers can browse, inspect and learn about products,
                and a photoreal visualization of a real Apple reseller storefront for use as a
                pre-build design preview.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Together they explore how immersive environments improve engagement through
                exploration, spatial discovery, and the kind of detail you only get when the
                product lives inside a believable room.
              </p>
            </motion.div>
            <Figure src={vr06.url} alt="Interactive VR shoe store interior" ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="02">The Challenge</SectionLabel>
          <motion.h2
            {...fade}
            className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12 max-w-3xl"
          >
            Building retail environments that feel real, run in real-time, and stay easy to navigate.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Realistic retail environments", "Architectural detail at material-accurate fidelity."],
              ["Premium visual quality", "Lighting and surfacing tuned for product presentation."],
              ["Intuitive store navigation", "Spatial layout that reads on first viewing."],
              ["Performance vs. realism", "Holding framerate in real-time without losing visual richness."],
              ["Believable lighting & materials", "Lumen GI with emissive accents and reflective surfaces."],
              ["Immersive customer experience", "Interactions, prompts, and pacing that feel like a real visit."],
            ].map(([t, d]) => (
              <motion.div
                {...fade}
                key={t}
                className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:border-accent-purple/40 transition-colors"
              >
                <div className="text-sm font-semibold mb-2">{t}</div>
                <div className="text-sm text-foreground/65 leading-relaxed">{d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="03">Design Process</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12">
            A nine-step pipeline from reference to real-time render.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {designProcess.map((s) => (
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

      {/* ENVIRONMENT DEVELOPMENT */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="04">Environment Development</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                Architecture, fixtures, and the path a customer actually walks.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                The VR store is structured as a long retail corridor — wall-mounted shelving on one
                side, a free-standing display block on the other, and a clear aisle running through
                the centre. Sneakers are arranged by colour and silhouette so the eye can scan a
                full row at once. Cardboard stock crates above the shelves reinforce the warehouse
                language and add vertical interest.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Every fixture, from the LED-lit shelf strips to the linear ceiling slats, was modelled
                to support a single goal — make the product the brightest thing in the room.
              </p>
            </motion.div>
            <ul className="space-y-3 text-sm text-foreground/80">
              {[
                ["Store architecture", "Linear floor plan with a strong central aisle."],
                ["Interior layout", "Wall shelving + island display + back-wall counter."],
                ["Product placement", "Grouped by colour, model and price tier."],
                ["Visual hierarchy", "Bright product → red accent shelving → dark surround."],
                ["Customer journey", "Entry → main aisle → inspect interactions → exit."],
                ["Retail storytelling", "Warehouse stock above eye-line for honesty + scale."],
              ].map(([t, d]) => (
                <li key={t} className="border border-white/10 rounded-lg p-4">
                  <div className="font-medium text-foreground">{t}</div>
                  <div className="text-foreground/60 mt-1">{d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Figure src={vr01.url} alt="Approach to the storefront" caption="Entry approach — glass façade and storefront framing." />
            <Figure src={vr06.url} alt="Main aisle interior" caption="Main aisle — wall shelving, island display, red LED accents." />
          </div>
        </div>
      </section>

      {/* VIRTUAL STORE EXPERIENCE */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="05">Virtual Store Experience</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                Browse, walk, inspect — a store you actually move through.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Built as a real-time third-person experience in Unreal Engine, customers move
                through the aisle, approach any product, and trigger an{" "}
                <span className="text-accent-purple">Inspect</span> prompt to read the model name
                and price (e.g.{" "}
                <span className="font-mono text-foreground">ftr1 — Price 8K</span>) right inside the
                space. There are no product pages, no cart screens — the room is the interface.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                The interaction system is deliberately quiet: a single contextual prompt at the
                centre of the screen, an exit instruction in the lower right, and nothing else
                competing with the products.
              </p>
            </motion.div>
            <ul className="space-y-4">
              {[
                ["Interactive exploration", "Walk freely through every aisle."],
                ["Immersive navigation", "Third-person camera with smooth follow."],
                ["Digital product discovery", "Approach-to-inspect prompts on every item."],
                ["Real-time rendering", "Lumen GI, dynamic lights, no pre-baking."],
                ["Spatial engagement", "Customers learn the space, not a menu."],
              ].map(([t, d]) => (
                <li
                  key={t}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <ArrowUpRight className="w-4 h-4 text-accent-purple mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{t}</div>
                    <div className="text-sm text-foreground/60 mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <Figure src={vr09.url} alt="Inspect interaction" caption="“Inspect” interaction triggered at shelf-level." ratio="aspect-[4/3]" />
            <Figure src={vr03.url} alt="Top-down shelving" caption="Product detail with price overlay." ratio="aspect-[4/3]" />
            <Figure src={vr08.url} alt="Aisle camera" caption="Real-time third-person camera follow." ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL VISUALIZATION */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="06">Architectural Visualization</SectionLabel>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start mb-10">
            <Figure src={mall01.url} alt="iCrest Apple Reseller — back wall" ratio="aspect-[16/9]" />
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                iCrest · Apple Authorised Reseller — Srinagar City Mall.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                A pre-build visualization of a real retail store — an Apple Authorised Reseller
                inside Srinagar City Mall. The brief was to give the client a true preview of the
                interior before fit-out, using the same calm, white, light-driven language Apple
                resellers are known for.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Linear ceiling lights, white minimal cabinetry, central display tables loaded with
                iPhone, iPad and AirPods packaging, and accessory walls along both sides. A
                cinematic camera pass moves through the space from entry, around the display
                tables, and along each product wall.
              </p>
            </motion.div>
          </div>
          <div className="mb-12">
            <VideoBlock src={mallVideo.url} poster={mall03.url} label="Cinematic Walkthrough · Srinagar City Mall" />
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
            {[
              ["Visualization process", "Floor plan → modular fit-out → lighting → camera pass."],
              ["Photorealistic rendering", "Lumen + ray-traced reflections in Movie Render Queue."],
              ["Interior detailing", "Cabinetry, display tables, wall-mount accessory bars."],
              ["Material development", "Matte white surfaces, brushed grey metal, soft floor sheen."],
              ["Lighting realism", "Linear ceiling arrays with gentle bounce off white walls."],
              ["Camera animation", "Cinematic dolly + arc paths around hero displays."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
                <div className="font-medium mb-1">{t}</div>
                <div className="text-foreground/60">{d}</div>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <Figure src={mall06.url} alt="TV wall feature" caption="TV wall feature with iPhone packaging shelving." />
            <Figure src={mall08.url} alt="Accessory wall" caption="AirPods Pro signage and accessory bars." />
          </div>
        </div>
      </section>

      {/* LIGHTING & MATERIALS */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="07">Lighting & Materials</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                Two opposite lighting languages, one principle — light the product, not the room.
              </h2>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  ["Ambient lighting", "Cool wash in the VR store, neutral daylight in the mall scene."],
                  ["Accent lighting", "Red emissive LED strips along every shelf in the VR build."],
                  ["Retail display lighting", "Linear ceiling arrays in the Apple reseller pull eyes to displays."],
                  ["Reflection quality", "Polished floors return soft highlights without overpowering products."],
                  ["Material realism", "PBR metals, plastics, fabrics, brushed cabinetry, matte wall paint."],
                  ["Surface detailing", "Wear, dust and grain layered into materials to break CG flatness."],
                ].map(([t, d]) => (
                  <li key={t} className="border border-white/10 rounded-lg p-4">
                    <div className="font-medium text-foreground">{t}</div>
                    <div className="text-foreground/60 mt-1">{d}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="grid grid-cols-1 gap-5">
              <Figure src={vr03.url} alt="VR store — red LED accent lighting" caption="VR build — red LED accents driving product focus." />
              <Figure src={mall03.url} alt="Mall — neutral retail lighting" caption="Mall build — neutral, even retail lighting." />
            </div>
          </div>
        </div>
      </section>

      {/* UNREAL ENGINE WORKFLOW */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="08">Unreal Engine Workflow</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12">
            The eight stages each scene moves through.
          </motion.h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ueWorkflow.map((step, i) => (
              <motion.li
                {...fade}
                key={step}
                className="relative rounded-xl border border-white/10 p-6 bg-gradient-to-br from-purple-500/[0.06] to-blue-500/[0.04]"
              >
                <div className="text-xs font-mono text-accent-purple mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-lg font-semibold">{step}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="09">Tools Used</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5">
            {tools.map((t) => (
              <motion.div
                {...fade}
                key={t.n}
                className="rounded-xl border border-white/10 p-6 bg-white/[0.02] hover:border-accent-purple/40 transition-colors"
              >
                <div className="font-display text-xl font-semibold mb-2">{t.n}</div>
                <div className="text-sm text-foreground/65 leading-relaxed">{t.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="10">Final Outcome</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-5xl leading-[1.1] font-semibold max-w-4xl">
            Two retail spaces that prove digital environments can carry brand, product, and customer
            experience — not just thumbnails.
          </motion.h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Virtual retail design",
              "Immersive customer experiences",
              "Architectural visualization",
              "Real-time rendering",
              "Environment storytelling",
              "Premium 3D design skills",
            ].map((o) => (
              <div key={o} className="rounded-xl border border-white/10 p-5 text-sm text-foreground/80 bg-white/[0.02]">
                {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="11">Key Learnings</SectionLabel>
          <ul className="grid sm:grid-cols-2 gap-4">
            {learnings.map((l, i) => (
              <motion.li
                {...fade}
                key={l}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <span className="text-xs font-mono text-accent-purple mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/85">{l}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="12">Project Gallery</SectionLabel>
          <motion.p {...fade} className="text-foreground/65 max-w-2xl mb-10">
            A selection of the strongest frames from both environments — interactive VR store and
            cinematic mall walkthrough.
          </motion.p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {galleryImages.map((img, i) => (
              <motion.div
                {...fade}
                key={img.url}
                transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                className="mb-5 break-inside-avoid overflow-hidden rounded-xl border border-white/10 group"
              >
                <img
                  src={img.url}
                  alt={`Project frame ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT NAV */}
      <section className="px-4 sm:px-8 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-6 items-center">
          <Link
            to="/projects/h-radhe"
            className="group flex items-center gap-3 text-sm text-foreground/80 hover:text-accent-purple transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45">Previous Project</div>
              <div className="font-display text-lg">H. Radhe Jewellery</div>
            </div>
          </Link>
          <Link
            to="/"
            hash="projects"
            className="justify-self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm hover:border-accent-purple hover:text-accent-purple transition-colors"
          >
            Back to Portfolio
          </Link>
          <Link
            to="/"
            hash="contact"
            className="group justify-self-end flex items-center gap-3 text-right text-sm text-foreground/80 hover:text-accent-purple transition-colors"
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/45">Next</div>
              <div className="font-display text-lg">Get in touch</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-4 sm:px-8 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h2 {...fade} className="font-display text-4xl sm:text-6xl leading-tight font-semibold">
            Have an immersive project in mind?
          </motion.h2>
          <motion.p {...fade} className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            I'm available for environment design, architectural visualization, and Unreal Engine
            production work.
          </motion.p>
          <motion.div {...fade} className="mt-10">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 hover:border-accent-purple hover:text-accent-purple transition-colors"
            >
              Start a conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="px-4 sm:px-8 py-10 border-t border-white/5 text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} Shashank Kumar · VR Online Store Experience
      </footer>
    </div>
  );
}
