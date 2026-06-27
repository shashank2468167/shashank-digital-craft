import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight, Download, Mail, Phone, MapPin, ExternalLink,
  Palette, Box, Sparkles, Layers, Brush, Gamepad2, Package,
  Globe, Camera, Lightbulb, Send,
} from "lucide-react";
import { toast } from "sonner";
import heroAsset from "@/assets/hero-workstation.png.asset.json";
import profileAsset from "@/assets/profile.png.asset.json";
import resumeAsset from "@/assets/resume.png.asset.json";
import CustomCursor from "@/components/CustomCursor";
const heroImg = heroAsset.url;
const profileImg = profileAsset.url;


const ROLES = ["Graphic Designer", "3D Artist", "Brand Designer", "UI/UX Designer", "Visual Designer"];

function useTypewriter(words: string[], typeMs = 90, deleteMs = 45, holdMs = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => (v + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, deleting ? deleteMs : typeMs);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeMs, deleteMs, holdMs]);

  return text;
}

function TypewriterRole() {
  const text = useTypewriter(ROLES);
  return (
    <span className="inline-flex items-baseline text-accent-purple">
      <span>{text}</span>
      <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-[#8b5cf6] animate-pulse rounded-sm" />
    </span>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shashank Kumar — Graphic Designer & 3D Artist" },
      { name: "description", content: "Portfolio of Shashank Kumar — Fashion Communication student at NIFT Srinagar specializing in branding, UI/UX, and 3D visualization." },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
];


function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 px-4 sm:px-8 py-5">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-xl tracking-tight text-foreground">
          Shashank's Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent-purple transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}


function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-32 px-4 sm:px-8 border-b border-white/15">
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.25]">
            Hi, My name is <span className="text-accent-purple">Shashank Kumar</span>
            <br />
            <span>and I am a passionate</span>
            <br />
            <TypewriterRole />
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={resumeAsset.url} download="Shashank_Kumar_Resume.png" className="btn-outline">Download Resume</a>
            <a href="#projects" className="btn-outline">View Portfolio</a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={heroImg}
            alt="Designer at futuristic 3D workstation"
            width={1024}
            height={1024}
            className="relative w-full max-w-lg mx-auto animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
}


function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gradient font-display">{n}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{tag}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[400px_1fr] gap-12 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl rounded-3xl" />
          <img
            src={profileImg}
            alt="Shashank Kumar portrait"
            width={768}
            height={768}
            loading="lazy"
            className="relative rounded-3xl w-full object-cover aspect-square border border-white/10"
          />
        </motion.div>
        <motion.div {...fadeUp}>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">About me</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Designing stories that <span className="text-gradient">live in pixels & polygons</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Shashank Kumar is currently pursuing a Bachelor of Design in Fashion Communication from
            the National Institute of Fashion Technology, Srinagar, expected to graduate in 2026.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            He specializes in graphic design, branding, social media design, website design,
            3D visualization, and immersive design experiences — combining creativity, technology,
            storytelling, and detail.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { y: "2022–2026", t: "B.Des Fashion Communication", s: "NIFT Srinagar · CGPA 7.8" },
              { y: "2022", t: "Higher Secondary", s: "Teresa International Academy, Khanpura" },
              { y: "2020", t: "Secondary", s: "St. Joseph's High School" },
            ].map((e) => (
              <div key={e.t} className="glass-card p-4">
                <div className="text-xs text-primary font-mono">{e.y}</div>
                <div className="font-semibold text-sm mt-1">{e.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{e.s}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const skills = [
  "Branding & Identity", "Logo Design", "Visual Communication", "Social Media Design",
  "UI/UX Design", "Website Design", "Packaging Design", "3D Modeling",
  "Product Visualization", "Environment Design", "Lighting & Rendering", "Game Environments",
  "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Blender",
  "Unreal Engine", "Figma",
];

function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Skills" title="Tools I command" sub="A blend of design craft and 3D engineering." />
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="glass-card px-5 py-2.5 text-sm hover:border-primary/60 hover:text-primary transition-colors cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    title: "Freelance Graphic Designer & 3D Artist",
    org: "Self-Employed",
    period: "2023 – Present",
    desc: "Branding, social media design, visual identity development, marketing creatives, product visualization, and 3D assets.",
  },
  {
    title: "Graphic Design Intern",
    org: "MEDIAMIX, Gurgaon",
    period: "Dec 2024 – Feb 2025",
    desc: "Designed marketing creatives, social media content, branding materials, and website banners with a professional team.",
  },
  {
    title: "Graduation Project — Brand Designer",
    org: "H. Radhe Jewellery, New Delhi",
    period: "Dec 2025 – Apr 2026",
    desc: "Brand identity, website design, packaging, stationery, social media strategy, content, and 3D jewellery visualization.",
  },
  {
    title: "Academic Project — Game Design & 3D Environment",
    org: "The Last Night",
    period: "2026",
    desc: "Immersive 3D environments with visual storytelling, lighting, world-building, and scene development.",
  },
];

function Experience() {
  return (
    <section id="work" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader tag="Experience" title="What I have done so far" />
        <div className="relative">
          <div className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-primary/40 z-0" />
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              {...fadeUp}
              className="relative mb-10 md:mb-14"
            >
              <div className="pointer-events-none absolute left-4 md:left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-ring ring-4 ring-background z-10" />
              <div className={`md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div]:col-start-2"}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <div className="glass-card p-6">
                    <div className="text-xs text-primary font-mono mb-2">{e.period}</div>
                    <h3 className="text-lg font-bold">{e.title}</h3>
                    <div className="text-sm text-secondary mb-3">{e.org}</div>
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Palette, t: "Branding & Identity", d: "Logos, brand systems, and identity guidelines." },
  { icon: Brush, t: "Logo Design", d: "Distinctive marks built around your story." },
  { icon: Camera, t: "Social Media Design", d: "Scroll-stopping creatives that convert." },
  { icon: Globe, t: "Website & UI Design", d: "Modern interfaces, design systems, prototypes." },
  { icon: Package, t: "Packaging Design", d: "Structural and surface design that sells." },
  { icon: Box, t: "3D Product Visualization", d: "Photoreal renders of products and jewellery." },
  { icon: Layers, t: "3D Environment Design", d: "Immersive worlds for games and stories." },
  { icon: Sparkles, t: "3D Asset Creation", d: "Optimized assets for AR, web, and games." },
  { icon: Gamepad2, t: "Motion & Visual Content", d: "Animated content for brands and reels." },
  { icon: Lightbulb, t: "Creative Consulting", d: "Direction and strategy for your next launch." },
];

function Services() {
  return (
    <section id="services" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Services" title="How I can help" sub="End-to-end design — from a single mark to a full universe." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group glass-card p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 group-hover:glow-ring transition-shadow">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    t: "H. Radhe Jewellery",
    tag: "Brand Identity · Website · Packaging · Social Media · 3D AR Visualization",
    d: "Luxury jewellery brand identity and digital presence project, including logo refinement, website design, packaging, social media strategy, and AR jewellery try-on visualization.",
    grad: "from-amber-500/30 to-pink-500/30",
  },
  {
    t: "VR Online Store Experience",
    tag: "VR · Unreal Engine · Immersive Design",
    d: "An immersive virtual store experience designed to explore how customers can interact with products in a digital retail environment using VR.",
    grad: "from-purple-500/30 to-blue-500/30",
  },
  {
    t: "The Last Night",
    tag: "Game Environment · Unreal",
    d: "Cinematic 3D environment focused on visual storytelling, lighting, mood, and world-building.",
    grad: "from-indigo-500/30 to-cyan-500/30",
  },
  {
    t: "MEDIAMIX Internship",
    tag: "Social · Branding · Banners",
    d: "Creatives, reels, and branding graphics for iVoltaa, PIR, Silverglades, Saan Verdante, The Food Street.",
    grad: "from-fuchsia-500/30 to-orange-500/30",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Portfolio" title="Featured Projects" sub="A selection of recent work across branding, 3D, and immersive design." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const route =
              p.t === "H. Radhe Jewellery"
                ? "/projects/h-radhe"
                : p.t === "VR Online Store Experience"
                ? "/projects/vr-store"
                : p.t === "The Last Night"
                ? "/projects/last-night"
                : p.t === "MEDIAMIX Internship"
                ? "/projects/mediamix"
                : null;
            const cardInner = (
              <>
                <div className={`relative h-56 bg-gradient-to-br ${p.grad} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="text-5xl font-display font-black text-white/30 group-hover:scale-110 transition-transform duration-500">
                    {p.t.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-mono mb-2">{p.tag}</div>
                  <h3 className="text-xl font-bold mb-2">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.d}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-secondary group-hover:text-primary transition-colors">
                    View case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </>
            );
            return (
              <motion.article
                key={p.t}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group glass-card overflow-hidden hover:border-primary/50 transition-all"
              >
                {route ? (
                  <Link to={route} className="block">{cardInner}</Link>
                ) : (
                  cardInner
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const tools = [
  "Photoshop", "Illustrator", "InDesign", "Blender",
  "Unreal Engine", "Figma", "Substance Painter", "Lens Studio",
];

function Tools() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Crafted with
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-12 w-max">
          {[...tools, ...tools, ...tools].map((t, i) => (
            <div key={i} className="text-2xl sm:text-3xl font-display font-bold text-muted-foreground/60 hover:text-gradient whitespace-nowrap">
              {t} <span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-5xl glass-card p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Contact</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's create <span className="text-gradient">something meaningful</span> together.
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or just want to chat about design and 3D? My inbox is open.
            </p>
            <div className="space-y-4">
              <ContactItem icon={Mail} label="Email" value="kshashank2468@gmail.com" href="mailto:kshashank2468@gmail.com" />
              <ContactItem icon={Phone} label="Phone" value="+91 6202826097" href="tel:+916202826097" />
              <ContactItem icon={ExternalLink} label="Behance" value="behance.net/shashankkumar39" href="https://www.behance.net/shashankkumar39" />
              <ContactItem icon={MapPin} label="Location" value="Patna, Bihar, India" />
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const EMAILJS_SERVICE_ID = "service_w4l7d4u";
const EMAILJS_TEMPLATE_ID = "template_ypcsoli";
const EMAILJS_PUBLIC_KEY = "aYlqHZUV2T8sJw9Pi";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Couldn't send message. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.form
      ref={formRef}
      {...fadeUp}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Field label="Your Name" name="from_name" placeholder="John Doe" required />
      <Field label="Email" name="from_email" placeholder="you@email.com" type="email" required />
      <Field label="Subject" name="subject" placeholder="Project enquiry" required />
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell me about your project…"
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors"
        />
      </div>
      <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
        {sending ? "Sending…" : <>Send Message <Send className="w-4 h-4" /></>}
      </button>
    </motion.form>
  );
}

function Field({ label, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</label>
      <input
        {...p}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const isExternal = !!href && /^https?:\/\//.test(href);
  const Wrap = href ? "a" : "div";
  const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Wrap href={href} {...extraProps} className="flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:glow-ring transition-shadow">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium group-hover:text-primary transition-colors">{value}</div>
      </div>
    </Wrap>
  );
}

function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Shashank Kumar. Crafted with care.</div>
        <div className="flex items-center gap-4">
          <a href="https://www.behance.net/shashankkumar39" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">behance.net/shashankkumar39</a>
          <a href="mailto:kshashank2468@gmail.com" className="hover:text-primary transition-colors">Email</a>
          <a href="#home" className="hover:text-primary transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
