/**
 * PACIFIC SHIELD MODERNISM
 * Offset architectural sections, roof-pitch cuts, technical labels, and a restrained lichen signal.
 * This is an independent concept using public business facts; it must never imply official ownership.
 */
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663832435669/fclRVDcVKLQJQslD.png";
const RESIDENTIAL_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663832435669/ybWEHKQgeGKnKSdv.png";
const STRATA_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663832435669/uryaWqVPfdQhVBBt.png";
const MATERIALS_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663832435669/VhGtrNPRLFXrBDVJ.png";
const BRAND_MARK = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663832435669/YxtuhnALHdHGrPpI.png";

const navItems = [
  ["Services", "#services"],
  ["Approach", "#approach"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

const services = [
  {
    number: "01",
    icon: Hammer,
    title: "Residential roofs",
    copy: "New roofs, re-roofs, repairs, and installations planned around your home, budget, and the realities of West Coast weather.",
    detail: "Free estimates available for re-roofing",
  },
  {
    number: "02",
    icon: Building2,
    title: "Strata & multi-family",
    copy: "Detailed estimates, on-site consultations, progress reporting, and crews scaled for both large and small shared-property projects.",
    detail: "Clear information for councils and owners",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Materials & guidance",
    copy: "Straightforward help comparing asphalt, cedar, warranties, and installation considerations before work begins.",
    detail: "Built for informed decisions",
  },
] as const;

const serviceAreas = [
  "Vancouver",
  "North Vancouver",
  "West Vancouver",
  "Surrey",
  "Richmond",
  "Burnaby",
  "Langley",
  "White Rock",
  "Whistler",
  "Pemberton",
] as const;

function RoofMark({ className = "" }: { className?: string }) {
  return <img src={BRAND_MARK} alt="DC Roofing concept mark" className={className} />;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="survey-line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="DC Roofing concept home">
          <RoofMark className="brand-mark" />
          <span className="brand-copy">
            <strong>DC ROOFING</strong>
            <small>QUALITY ROOFS SINCE 1999</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a href="tel:+16045033500" className="header-phone">
          <Phone size={16} aria-hidden="true" />
          <span>604 503 3500</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}<ArrowDownRight aria-hidden="true" />
            </a>
          ))}
          <a className="mobile-call" href="tel:+16045033500">
            <Phone aria-hidden="true" /> Call 604 503 3500
          </a>
        </nav>
      </div>
    </header>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast.error("The inquiry form is not configured yet. Please call 604-503-3500.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = new FormData(form);
      payload.append("access_key", accessKey);
      payload.append("subject", "Demo inquiry — DC Roofing redesign concept");
      payload.append("from_name", "Kiros Li — DC Roofing redesign concept");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");

      form.reset();
      toast.success("Your demo inquiry has been sent to Kiros Li, the concept designer.");
    } catch {
      toast.error("We couldn’t send your request. Please call 604-503-3500 or email info@dcroofing.ca.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field-pair">
        <label>
          <span>Name <em>*</em></span>
          <Input name="name" autoComplete="name" required minLength={2} placeholder="Your name" />
        </label>
        <label>
          <span>Phone <em>*</em></span>
          <Input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+()\-\s]{7,}" placeholder="604 555 0123" />
        </label>
      </div>
      <label>
        <span>Email <em>*</em></span>
        <Input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
      </label>
      <label>
        <span>Property & project type</span>
        <select name="project_type" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Residential re-roof</option>
          <option>Roof repair</option>
          <option>Strata or multi-family</option>
          <option>Commercial roofing</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        <span>How can we help? <em>*</em></span>
        <Textarea name="message" required minLength={12} placeholder="Tell us about the property, roof, and timing." rows={5} />
      </label>
      <label className="demo-consent">
        <input type="checkbox" name="concept_acknowledgement" value="Confirmed" required />
        <span>I understand this is an independent redesign demo and my message will go to Kiros Li, not DC Roofing. <em>*</em></span>
      </label>
      <div className="form-footer">
        <p>For an actual roofing inquiry, use DC Roofing’s published phone number or email shown beside this demo.</p>
        <Button type="submit" disabled={submitting} className="submit-button">
          {submitting ? "Sending…" : "Send demo inquiry"}
          {!submitting && <ArrowRight aria-hidden="true" />}
        </Button>
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="concept-banner">
        <Sparkles size={14} aria-hidden="true" />
        Independent redesign concept — not the official DC Roofing website
      </div>
      <Header />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={HERO_IMAGE} alt="Contemporary West Coast home with a dark pitched roof after rainfall" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-brand-plate" aria-label="DC Roofing concept identity">
                <RoofMark className="hero-brand-mark" />
                <span><strong>DC ROOFING</strong><small>Quality roofs since 1999</small></span>
              </div>
              <p className="eyebrow"><span /> Surrey, BC · Since 1999</p>
              <h1 id="hero-title">Built for the weather.<br /><em>Backed by the work.</em></h1>
              <p className="hero-summary">Residential, strata, and commercial roofing for homes and communities across Metro Vancouver.</p>
              <div className="hero-actions">
                <a className="primary-cta" href="#contact">Plan your roof assessment <ArrowRight aria-hidden="true" /></a>
                <a className="text-cta" href="tel:+16045033500"><Phone size={18} aria-hidden="true" /> 604 503 3500</a>
              </div>
            </div>
            <aside className="hero-proof" aria-label="Company-published assurances">
              <span className="material-tag">Published assurances</span>
              <div><strong>10</strong><span>year workmanship guarantee</span></div>
              <div><strong>$5M</strong><span>liability insurance</span></div>
              <div><strong>30–50</strong><span>year manufacturer warranties</span></div>
              <small>As stated on DC Roofing’s current website. Terms may apply.</small>
            </aside>
          </div>
          <a href="#services" className="hero-scroll" aria-label="Scroll to services">
            <span>Explore</span><ArrowDownRight aria-hidden="true" />
          </a>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="content-shell">
            <div className="technical-strip" aria-label="Business reference details">
              <span><b>Site</b>Surrey / BC</span>
              <span><b>Field</b>Residential · Strata · Commercial</span>
              <span><b>Reference</b>Established / 1999</span>
              <span><b>Source</b>dcroofing.ca</span>
            </div>
            <SectionLabel number="01">Roofing services</SectionLabel>
            <div className="section-intro">
              <h2>One roof. A lot riding on it.</h2>
              <p>Good roofing begins before the first shingle is lifted. The path should be clear, the options understandable, and the work planned around the people underneath it.</p>
            </div>
            <div className="service-list">
              {services.map(({ number, icon: Icon, title, copy, detail }) => (
                <article key={number} className="service-row">
                  <span className="service-number">{number}</span>
                  <Icon className="service-icon" aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <span className="service-detail"><Check aria-hidden="true" />{detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="approach-visual">
            <img src={RESIDENTIAL_IMAGE} alt="Roofing crew installing shingles with safety equipment" />
            <span className="image-note">Conceptual service imagery</span>
          </div>
          <div className="approach-copy">
            <SectionLabel number="02">A clear approach</SectionLabel>
            <h2>Less guesswork.<br />More roof sense.</h2>
            <ol className="process-list">
              <li><span>01</span><div><h3>Start with the property</h3><p>Share the roof type, visible concerns, timing, and whether the project is residential or strata.</p></div></li>
              <li><span>02</span><div><h3>Review the options</h3><p>Compare scope, materials, warranties, and budget considerations in a written estimate.</p></div></li>
              <li><span>03</span><div><h3>Plan the work</h3><p>Confirm access, safety, crew requirements, communication, and the sequence before installation begins.</p></div></li>
            </ol>
            <a className="inline-link" href="#contact">Tell us about your roof <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="strata-section section-pad">
          <div className="content-shell strata-grid">
            <div className="strata-copy">
              <SectionLabel number="03">Strata & commercial</SectionLabel>
              <h2>Complex property. Clearer decisions.</h2>
              <p>Roofing for shared properties has more stakeholders, more questions, and less room for ambiguity. DC Roofing’s published process includes detailed estimates, progress reports, on-site consultations, and project crews sized to the work.</p>
              <ul className="check-list">
                <li><BadgeCheck aria-hidden="true" />Detailed written estimates</li>
                <li><BadgeCheck aria-hidden="true" />On-site consultations or presentations</li>
                <li><BadgeCheck aria-hidden="true" />Progress reporting</li>
                <li><BadgeCheck aria-hidden="true" />Large and small project crews</li>
              </ul>
            </div>
            <div className="strata-image-wrap">
              <img src={STRATA_IMAGE} alt="Coordinated roofs across a Metro Vancouver townhouse complex" />
              <div className="strata-callout"><HardHat aria-hidden="true" /><span>Planning support for councils, managers, and owners</span></div>
              <span className="image-note">Conceptual service imagery</span>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="content-shell about-grid">
            <div className="about-heading">
              <SectionLabel number="04">Family owned</SectionLabel>
              <h2>Built on one referral, then the next.</h2>
            </div>
            <div className="about-story">
              <p className="lead">DC Roofing traces its beginning to a first re-roof in 1999 and a happy client who kept referring friends.</p>
              <p>Today, the company describes itself as a family-owned team of long-time employees. Its published values are practical: earn trust, remember every job protects someone’s home, respect the people doing the work, and let satisfied clients drive growth.</p>
              <blockquote>“It’s not a house, it’s someone’s home.”<cite>— DC Roofing’s published company values</cite></blockquote>
            </div>
            <div className="materials-card">
              <img src={MATERIALS_IMAGE} alt="Architectural shingles, cedar, flashing, and roofing fasteners" />
              <div><span className="material-tag">Material guidance</span><h3>Understand what goes overhead.</h3><p>Ask about asphalt, cedar, manufacturer warranties, and the installation details that matter for your property.</p></div>
              <span className="image-note">Conceptual material imagery</span>
            </div>
          </div>
        </section>

        <section className="service-area-section section-pad">
          <div className="content-shell area-grid">
            <div>
              <SectionLabel number="05">Service area</SectionLabel>
              <h2>Local weather.<br />Regional reach.</h2>
            </div>
            <div className="area-list" aria-label="Published service areas">
              {serviceAreas.map((area, index) => <span key={area}><b>{String(index + 1).padStart(2, "0")}</b>{area}</span>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-shell">
            <div className="contact-intro">
              <SectionLabel number="06">Start a conversation</SectionLabel>
              <h2>Preview the inquiry flow.</h2>
              <p><strong>This working form is part of an independent concept.</strong> It sends to Kiros Li, the concept designer—not DC Roofing. For a real roofing inquiry, call or email the company using its published details below.</p>
              <div className="contact-options">
                <a href="tel:+16045033500"><Phone aria-hidden="true" /><span><small>Customer service</small>604 503 3500</span></a>
                <a href="mailto:info@dcroofing.ca"><Mail aria-hidden="true" /><span><small>Email</small>info@dcroofing.ca</span></a>
                <div><MapPin aria-hidden="true" /><span><small>Mailing address</small>#110 8468 162 St.<br />Surrey, BC V4N 1B4</span></div>
                <div><Clock3 aria-hidden="true" /><span><small>Estimate request</small>Replies during business hours</span></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a href="#top" className="brand footer-brand"><RoofMark className="brand-mark" /><span className="brand-copy"><strong>DC ROOFING</strong><small>QUALITY ROOFS SINCE 1999</small></span></a>
          <p>Residential, strata, and commercial roofing across Metro Vancouver.</p>
          <a href="#contact" className="footer-cta">Request an estimate <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <p><strong>Independent redesign concept.</strong> This preview is not affiliated with, endorsed by, or the official website of DC Roofing Inc.</p>
          <p>Business facts sourced from <a href="https://www.dcroofing.ca/" target="_blank" rel="noreferrer">dcroofing.ca</a>. Generated images are conceptual and do not depict documented DC Roofing projects.</p>
        </div>
      </footer>
    </div>
  );
}
