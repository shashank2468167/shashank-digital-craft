import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import ln04 from "@/assets/lastnight/ln04.gif.asset.json";
import ln09 from "@/assets/lastnight/ln09.webp.asset.json";
import tlnHero from "@/assets/lastnight/tln_hero.png.asset.json";
import tlnPortrait from "@/assets/lastnight/tln_portrait.png.asset.json";
import tlnCorridor from "@/assets/lastnight/tln_corridor.png.asset.json";
import tlnDeskRevolver from "@/assets/lastnight/tln_desk_revolver.png.asset.json";
import tlnTopdown from "@/assets/lastnight/tln_topdown.png.asset.json";
import tlnHallway from "@/assets/lastnight/tln_hallway.png.asset.json";
import tlnStaircase from "@/assets/lastnight/tln_staircase.png.asset.json";
import tlnCreature from "@/assets/lastnight/tln_creature.png.asset.json";
import tlnStairsOverhead from "@/assets/lastnight/tln_stairs_overhead.png.asset.json";
import tlnStoryHero from "@/assets/lastnight/tln_story_hero.png.asset.json";

const ln01 = tlnHero;
const ln02 = tlnPortrait;
const ln03 = tlnCorridor;
const ln05 = tlnDeskRevolver;
const ln06 = tlnTopdown;
const ln07 = tlnHallway;
const ln08 = tlnStaircase;
const ln10 = tlnCreature;
const ln11 = tlnStairsOverhead;

export const Route = createFileRoute("/projects/last-night")({
  head: () => ({
    meta: [
      { title: "The Last Night — Unreal Engine 5 Case Study · Shashank Kumar" },
      {
        name: "description",
        content:
          "A cinematic post-apocalyptic environment built in Unreal Engine 5 — exploring lighting, atmosphere, mood, and world-building through the silence of the last night.",
      },
      { property: "og:title", content: "The Last Night — Unreal Engine 5 Case Study" },
      {
        property: "og:description",
        content:
          "A cinematic UE5 environment — lighting, mood, and world-building for a post-apocalyptic night scene.",
      },
      { property: "og:image", content: ln01.url },
    ],
  }),
  component: LastNightCaseStudy,
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
  { k: "Project", v: "The Last Night" },
  { k: "Role", v: "3D Environment Artist · Lighting · World-Building" },
  { k: "Tools", v: "Unreal Engine 5 · Quixel Megascans · Lumen · Niagara" },
  { k: "Year", v: "2025 – 2026" },
];

const deliverables = [
  "Cinematic Environment",
  "Real-time Lighting",
  "Atmospheric Mood",
  "Set Dressing",
  "Camera Composition",
  "World-Building",
];

const challenges = [
  ["Tell a story without a character", "Let the room, the light and the silence carry the narrative."],
  ["Believable post-apocalyptic decay", "Layered dust, debris, damp surfaces and emergency lighting."],
  ["Real-time cinematic lighting", "Lumen GI tuned for low light without losing readability."],
  ["Mood over spectacle", "Tension built through restraint — fewer hero shots, longer pauses."],
  ["Composition for stills and motion", "Every frame had to hold up as a still render and as a moving shot."],
  ["Performance at quality", "Held framerate while pushing fog, GI, reflections, and emissive density."],
];

const designProcess = [
  { n: "01", t: "Concept & Mood", d: "Reference boards for The Last of Us, Blade Runner 2049 and abandoned-interior photography." },
  { n: "02", t: "Blockout", d: "Greyboxed the room in UE5 to lock scale, sightlines and the camera path before any detail." },
  { n: "03", t: "Set Dressing", d: "Megascan assets, custom props and decals layered to tell a lived-in, abandoned story." },
  { n: "04", t: "Materials", d: "Wet floors, peeling paint, broken concrete and emissive screens tuned for the night palette." },
  { n: "05", t: "Lighting", d: "Lumen GI, narrow practicals, emergency reds and a single cold rim — no daylight, no sky." },
  { n: "06", t: "Atmosphere", d: "Volumetric fog, exponential height-fog and dust motes to soften the deep blacks." },
  { n: "07", t: "Cinematics", d: "Sequencer cameras, slow dolly moves and depth-of-field tuned per shot." },
  { n: "08", t: "Render & Grade", d: "Movie Render Queue passes, post-process volume and final colour grade for night." },
];

const ueWorkflow = [
  "Concept",
  "Blockout",
  "Asset Pipeline",
  "Lighting",
  "Atmosphere",
  "Sequencer",
  "Render Queue",
  "Grade & Export",
];

const tools = [
  { n: "Unreal Engine 5", d: "Lumen GI, Nanite geometry, Niagara particles, Sequencer cinematics and Movie Render Queue." },
  { n: "Quixel Megascans", d: "Photoscanned debris, surfaces and props as the base layer for believable decay." },
  { n: "Blender", d: "Custom hero props, scene-specific geometry, and UV cleanup before importing into UE5." },
  { n: "Photoshop", d: "Decals, signage, screen graphics and the final still-frame grading pass." },
];

const learnings = [
  "Lighting is the script — pacing, mood and meaning all live there.",
  "Greybox first, polish last. Detail is wasted on bad composition.",
  "Lumen rewards restraint — fewer, better lights beat dense rigs.",
  "Atmospherics carry as much weight as geometry in night scenes.",
  "Sequencer is where the project becomes a film, not a level.",
  "Performance and beauty are the same problem — solve them together.",
];

function LastNightCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(109,139,255,0.15),transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fade} className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Pill>Case Study 03</Pill>
              <Pill>Cinematic · UE5</Pill>
              <Pill>Environment Art</Pill>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[6rem] leading-[0.95] font-semibold tracking-tight">
              The Last
              <br />
              <span className="text-accent-purple italic font-light">Night.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              A cinematic post-apocalyptic interior built in Unreal Engine 5 — a study
              in mood, decay and silence, lit only by failing practicals and the cold
              breath of a world that has already ended.
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

          {/* HERO IMAGE */}
          <div className="mt-14">
            <Figure src={ln01.url} alt="The Last Night — hero render" ratio="aspect-[16/9]" />
          </div>

          <motion.div {...fade} className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.behance.net/gallery/239566583/THE-LAST-NIGHT-Unreal-Engine-5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent-purple transition-colors border border-white/15 rounded-full px-4 py-2"
            >
              View on Behance <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=TpsovA4EWvI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent-purple transition-colors border border-white/15 rounded-full px-4 py-2"
            >
              Watch the film <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* THE STORY — cinematic showcase */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="01">The Story</SectionLabel>
          <motion.div
            {...fade}
            className="relative overflow-hidden rounded-xl border border-white/10"
          >
            {/* Background image */}
            <img
              src={tlnStoryHero.url}
              alt="The Last Night — cinematic story showcase"
              loading="lazy"
              className="w-full h-auto object-cover"
              width={1792}
              height={1024}
            />
            {/* Vignette overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 180px 60px rgba(0,0,0,0.65)",
              }}
            />
            {/* Radial vignette for extra depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] mb-6">
                THE STORY
              </h2>
              <div className="max-w-2xl space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  <strong className="font-semibold">"THE LAST NIGHT"</strong> is a survival-horror story-driven game built in Unreal Engine 5.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  The game follows a young girl trapped inside a zombie-infested house, where survival depends on courage, strategy, and smart inventory management.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  Starting from the basement — the only safe room — she must fight through hordes of zombies, collect keys, solve environmental challenges, and uncover a path to escape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="02">Project Overview</SectionLabel>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <motion.div {...fade} className="space-y-6">
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.1] font-semibold">
                A world that ended <span className="text-accent-purple italic font-light">while we weren't looking.</span>
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                The Last Night is a self-initiated cinematic environment built entirely in
                Unreal Engine 5. The scene is a single, abandoned interior on the night
                everything stopped — power flickering on a backup loop, dust still
                settling, doors left half-open. There is no character on screen. The
                story is what they left behind.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                The project was an exercise in environment art as filmmaking. Every
                decision — geometry, materials, light, fog, lens — was made in service
                of one mood: the heavy, quiet weight of the last night before silence.
              </p>
            </motion.div>
            <Figure src={ln02.url} alt="Atmospheric interior render" ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="03">The Challenge</SectionLabel>
          <motion.h2
            {...fade}
            className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12 max-w-3xl"
          >
            Build a place that feels haunted by what isn't there.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map(([t, d]) => (
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

      {/* ENVIRONMENT DESIGN */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="04">Environment Design</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                A room dressed by absence — every prop tells a small, abandoned story.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                The interior was greyboxed first to lock scale, the camera path and a
                single hero sightline. Only after the blockout was approved did the
                detail pass begin — debris on the floor, a chair pushed back too
                fast, a monitor still humming on a backup circuit.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Megascan surfaces formed the base, then custom props and decals
                layered the specifics — water staining, broken plaster, scratch wear
                where a hand had pulled the door open one last time.
              </p>
            </motion.div>
            <ul className="space-y-3 text-sm text-foreground/80">
              {[
                ["Spatial blockout", "Greybox first — composition before detail."],
                ["Set dressing", "Props placed as evidence, not decoration."],
                ["Surface storytelling", "Wear, damp and dust as the brand of time."],
                ["Hero sightline", "Every camera leads to a single quiet focal point."],
                ["Negative space", "Room to breathe — silence has to fit on screen."],
                ["Scale anchors", "Familiar objects ground the unreal mood."],
              ].map(([t, d]) => (
                <li key={t} className="border border-white/10 rounded-lg p-4">
                  <div className="font-medium text-foreground">{t}</div>
                  <div className="text-foreground/60 mt-1">{d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Figure src={ln03.url} alt="Interior environment composition" />
            <Figure src={ln05.url} alt="Hero sightline render" />
          </div>
        </div>
      </section>

      {/* WORLD BUILDING — full bleed */}
      <section className="relative px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="05">World Building</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12 max-w-3xl">
            The room is one frame of a much larger story — the rest lives off-screen.
          </motion.h2>
          <Figure src={ln06.url} alt="Wide environment shot — world-building" ratio="aspect-[21/9]" caption="Wide environment beat — establishing the post-apocalyptic world." />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Figure src={ln07.url} alt="Environment detail — corridor" />
            <Figure src={ln08.url} alt="Environment detail — interior corner" />
          </div>
        </div>
      </section>

      {/* LIGHTING & MOOD */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="06">Lighting & Mood Development</SectionLabel>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start mb-10">
            <Figure src={ln09.url} alt="Lighting study render" ratio="aspect-[4/5]" />
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                One cold rim. One warm practical. Everything else is fog.
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                The lighting rig is deliberately small. A narrow set of practicals
                carries the warm key — flickering bulbs, an EXIT sign, a screen still
                glowing. A single cool rim from a broken window separates the silhouettes
                from the deep blacks behind them.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Lumen handles the bounce, exponential height-fog softens the depth, and
                volumetric god-rays carry the story forward. The whole palette sits in
                a low key — almost no mid-tones — so the eye reads tension first and
                detail second.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                {[
                  ["Key", "Warm practicals · 2700K"],
                  ["Rim", "Cool moon · 6500K"],
                  ["Bounce", "Lumen GI"],
                  ["Atmos", "Volumetric fog · god-rays"],
                ].map(([t, d]) => (
                  <div key={t} className="border border-white/10 rounded-lg p-3">
                    <div className="font-mono text-accent-purple">{t}</div>
                    <div className="text-foreground/70 mt-1">{d}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Figure src={ln10.url} alt="Mood frame — emergency lighting" />
            <Figure src={ln11.url} alt="Mood frame — cold rim" />
          </div>
        </div>
      </section>

      {/* UE5 WORKFLOW */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="07">Unreal Engine 5 Workflow</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12">
            An eight-step pipeline from blockout to final grade.
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {designProcess.map((s) => (
              <motion.div
                {...fade}
                key={s.n}
                className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.04] to-transparent"
              >
                <div className="text-xs font-mono text-accent-purple mb-3">{s.n}</div>
                <div className="font-display text-base font-semibold mb-2">{s.t}</div>
                <div className="text-xs text-foreground/65 leading-relaxed">{s.d}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade} className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
            {ueWorkflow.map((w, i) => (
              <span key={w} className="inline-flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-full border border-white/15">{w}</span>
                {i < ueWorkflow.length - 1 && <span className="text-accent-purple">→</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOTION GIF showcase */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="08">Motion Study</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-10 max-w-3xl">
            A slow camera, a held breath, a single moving light.
          </motion.h2>
          <Figure src={ln04.url} alt="Animated motion frame — The Last Night" ratio="aspect-[16/9]" caption="Sequencer beat — slow dolly with flickering practical light." />
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="09">Tools Used</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5">
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

      {/* GALLERY */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="10">Gallery</SectionLabel>
          <motion.h2 {...fade} className="font-display text-3xl sm:text-4xl leading-tight font-semibold mb-12">
            Frames from the last night.
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ln01, ln02, ln03, ln05, ln06, ln07, ln08, ln09, ln10, ln11].map((g, i) => (
              <Figure key={i} src={g.url} alt={`Gallery frame ${i + 1}`} ratio="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL OUTCOME */}
      <section className="px-4 sm:px-8 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="11">Final Outcome</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade}>
              <h2 className="font-display text-3xl sm:text-5xl leading-[1.05] font-semibold mb-6">
                A short film, <span className="text-accent-purple italic font-light">told by a room.</span>
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-4">
                The Last Night closed as a cinematic environment showcase — a series
                of beauty renders, a Sequencer-driven walkthrough, and a final
                YouTube film. It became the cornerstone of my UE5 portfolio and
                the project I now point to first when discussing environment
                storytelling.
              </p>
              <a
                href="https://www.youtube.com/watch?v=TpsovA4EWvI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent-purple transition-colors border border-white/15 rounded-full px-5 py-2.5"
              >
                Watch the film <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
            <Figure src={ln06.url} alt="Final cinematic frame" ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel n="12">Key Learnings</SectionLabel>
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

      {/* FOOTER NAV */}
      <section className="px-4 sm:px-8 py-16 border-t border-white/5">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent-purple transition-colors">
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
          <Link to="/projects/h-radhe" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent-purple transition-colors">
            Next case study — H. Radhe Jewellery <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
