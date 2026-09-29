import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/Header";

const partners = [
  { src: "/logos/agc.png", alt: "Associated General Contractors of America", className: "partner-agc" },
  { src: "/logos/site-docs.png", alt: "SiteDocs Digital Workplace Safety", className: "partner-sitedocs" },
  { src: "/logos/bis-safety.png", alt: "BIS Safety Software", className: "partner-bis" },
  { src: "/logos/missouri-sdve.jpeg", alt: "Service Disabled Veteran Owned Small Business certification", className: "partner-sdve" },
];

const fieldServices = ["Safety Management", "Audits & Inspections", "Safety Staffing", "Accident Investigations"];
const complianceServices = ["OSHA Compliance", "Customized Safety Manuals", "ISNetworld", "Avetta", "NCMS"];
const trainingTopics = [
  "OSHA Construction Safety",
  "Aerial & Scissor Lift",
  "Confined Space",
  "Excavation & Trenching",
  "Silica Exposure",
  "CPR / First Aid",
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy-block">
            <h1 id="hero-title">Safety support built for the real world</h1>
            <p className="hero-copy">Safety consulting, OSHA compliance, training and field support for contractors and businesses.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Request a consultation <ArrowRight size={17} /></a>
              <a className="text-link" href="#services">Explore services <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image className="hero-image" src="/images/jobsite-inspection-real.jpg" alt="Safety professional reviewing plans at a large active construction site" fill priority sizes="(max-width: 800px) calc(100vw - 32px), 52vw" />
          </div>
        </div>
      </section>

      <section className="partner-band" aria-label="Industry platforms, associations and credentials">
        <div className="marquee">
          <div className="marquee-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-item" key={`${partner.src}-${index}`}>
                <Image className={`partner-logo ${partner.className}`} src={partner.src} alt={index < partners.length ? partner.alt : ""} width={320} height={120} loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-feature field-feature" id="services">
        <div className="container feature-grid">
          <div className="feature-image-wrap field-feature-image">
            <Image className="feature-image" src="/images/field-support-team.jpg" alt="Construction professionals discussing safety at an active jobsite" fill sizes="(max-width: 739px) calc(100vw - 32px), 50vw" />
          </div>
          <div className="feature-copy">
            <h2>Safety support where the work happens</h2>
            <p className="feature-body">Total Safety Solutions helps contractors and businesses manage safety in the field through oversight, inspections, staffing and practical jobsite support.</p>
            <ul className="feature-list">
              {fieldServices.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
            </ul>
            <a className="text-link feature-link" href="#contact">Learn more about field support <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="service-feature compliance-feature">
        <div className="container feature-grid feature-grid-reverse">
          <div className="feature-image-wrap compliance-feature-image">
            <Image className="feature-image" src="/images/compliance-documentation.jpg" alt="Safety professional reviewing compliance documentation on a clipboard" fill sizes="(max-width: 739px) calc(100vw - 32px), 50vw" />
          </div>
          <div className="feature-copy">
            <h2>Practical support for safety requirements and documentation</h2>
            <p className="feature-body">We help organizations manage OSHA requirements, safety manuals and contractor compliance systems without turning the process into unnecessary complexity.</p>
            <ul className="feature-list feature-list-compact">
              {complianceServices.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
            </ul>
            <a className="text-link feature-link" href="#contact">Learn more about compliance support <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="service-feature training-feature" id="training">
        <div className="container feature-grid">
          <div className="feature-image-wrap training-feature-image">
            <Image className="feature-image" src="/images/industrial-safety-training.jpg" alt="Industrial team participating in a workplace safety training session" fill sizes="(max-width: 739px) calc(100vw - 32px), 50vw" />
          </div>
          <div className="feature-copy">
            <h2>Training built for real workplace risks</h2>
            <p className="feature-body">From OSHA fundamentals to equipment and emergency response topics, Total Safety Solutions offers training designed for real workplace conditions.</p>
            <ul className="feature-list feature-list-compact">
              {trainingTopics.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
            </ul>
            <a className="text-link feature-link" href="https://videotilehost.com/totalsafetysolutionsllc/" target="_blank" rel="noreferrer">View training options <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="approach-section" id="about">
        <div className="container approach-grid">
          <div className="approach-image-wrap">
            <Image className="feature-image" src="/images/field-inspector-real.jpg" alt="Safety consultant documenting an industrial field inspection" fill sizes="(max-width: 739px) calc(100vw - 32px), 42vw" />
          </div>
          <div className="approach-copy">
            <h2>Safety should work on paper and on site</h2>
            <p>We focus on practical systems, clear communication and support that helps teams work more safely without overcomplicating the job.</p>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="container cta-grid">
          <div>
            <h2>Need help with safety or compliance</h2>
            <p>Tell us what you&apos;re working on and we&apos;ll help identify the right support.</p>
          </div>
          <a className="button button-primary" href="mailto:TotalSafetySolutions.LLC@gmail.com">Request a consultation <ArrowRight size={17} /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#top" aria-label="Total Safety Solutions home"><Image className="footer-logo" src="/logos/total-safety-solutions.png" alt="Total Safety Solutions LLC" width={514} height={148} /></a>
          </div>
          <div className="footer-nav"><a href="#services">Services</a><a href="#about">About</a><a href="#training">Training</a><a href="#contact">Contact</a></div>
          <div className="footer-contact">
            <a href="tel:+16363882685"><Phone size={15} /> (636) 388-2685</a>
            <a href="mailto:TotalSafetySolutions.LLC@gmail.com"><Mail size={15} /> TotalSafetySolutions.LLC@gmail.com</a>
            <span><MapPin size={15} /> Greater St. Louis, Missouri</span>
          </div>
          <div className="footer-action"><a href="mailto:TotalSafetySolutions.LLC@gmail.com">Request a consultation <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Total Safety Solutions LLC</span></div>
      </footer>
    </main>
  );
}
