"use client";

import Image from "next/image";
import StarField from "./components/StarField";
import ScrollReveal from "./components/ScrollReveal";
import {
  CompassRose,
  RadiantSun,
  CrescentMoon,
  Sparkle,
  OrbitalRings,
  CelestialDivider,
  SparkleField,
} from "./components/CelestialDecorations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/interfaces-carousel";
import { StarButton } from "@/components/ui/star-button";

const galleryImages = [
  { src: "/gallery/25-04-24_event_shots_021_DSC04019.jpg", alt: "PACN highlight 1" },
  { src: "/gallery/25-04-24_event_shots_024_DSC04064.jpg", alt: "PACN highlight 2" },
  { src: "/gallery/25-04-25_event_shots_084_PYPV9260.jpg", alt: "PACN highlight 3" },
  { src: "/gallery/25-04-25_event_shots_271_PYPV1306.jpg", alt: "PACN highlight 4" },
  { src: "/gallery/25-04-25_event_shots_335_PYPV1721.jpg", alt: "PACN highlight 5" },
  { src: "/gallery/25-04-25_event_shots_370_PYPV2096.jpg", alt: "PACN highlight 6" },
  { src: "/gallery/25-04-25_event_shots_489_PYPV3017.jpg", alt: "PACN highlight 7" },
  { src: "/gallery/25-04-25_event_shots_607_IMG_3589.jpg", alt: "PACN highlight 8" },
  { src: "/gallery/25-04-25_event_shots_658_PYPV4195.jpg", alt: "PACN highlight 9" },
  { src: "/gallery/25-04-25_event_shots_713_IMG_3758.jpg", alt: "PACN highlight 10" },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* ══════════════════════════════════════════════
          HERO SECTION — Celestial Immersion
          ══════════════════════════════════════════════ */}
      <section id="hero" className="hero">
        <StarField />

        {/* Decorative celestial elements */}
        <CompassRose className="hero-compass hero-compass-main" size={500} />
        <OrbitalRings className="hero-orbital" />
        <RadiantSun className="hero-sun-left" size={140} />
        <RadiantSun className="hero-sun-right" size={100} />
        <CrescentMoon className="hero-moon" size={90} />

        {/* Scattered sparkles */}
        <Sparkle className="hero-compass" size={16} color="#C9A84C"
          style={{ top: '18%', right: '20%', animationDuration: '90s', opacity: 0.4 } as React.CSSProperties} />
        <Sparkle className="hero-compass" size={10} color="#7B9CC7"
          style={{ bottom: '25%', left: '15%', animationDuration: '110s', opacity: 0.3 } as React.CSSProperties} />
        <Sparkle className="hero-compass" size={12} color="#C9A84C"
          style={{ top: '35%', left: '25%', animationDuration: '95s', opacity: 0.25 } as React.CSSProperties} />
        <Sparkle className="hero-compass" size={8} color="#7B9CC7"
          style={{ bottom: '35%', right: '12%', animationDuration: '100s', opacity: 0.2 } as React.CSSProperties} />

        <div className="hero-content">
          <p className="hero-tagline animate-fade-in-up mb-2 opacity-80 text-[var(--gold-light)] text-[0.75rem] tracking-[0.3em]">
            Kababayan at UCI Presents...
          </p>

          <h1 className="hero-script-title animate-title-up">
            <div className="hero-script-araw">Araw</div>
            <div className="hero-script-gabi">Gabi</div>
          </h1>

          <div className="text-center font-sans tracking-[0.6em] text-[var(--blue-light)] text-[0.8rem] font-bold mt-4 mb-5 animate-fade-in-up delay-300 drop-shadow-[0_0_10px_rgba(123,156,199,0.3)]">
            DAY - NIGHT
          </div>

          <div className="animate-fade-in-up delay-500 font-sans text-center mb-8">
            <span className="block text-xl md:text-3xl tracking-[0.3em] md:tracking-[0.5em] text-[var(--gold)] font-bold uppercase drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">
              PACN 47
            </span>
          </div>

          <div className="animate-fade-in-up delay-700 flex justify-center w-full mt-2">
            <StarButton 
              lightColor="#DFC06E" 
              backgroundColor="#060E24" 
              className="text-[1.1rem] h-14 px-8 font-bold border-[rgba(201,168,76,0.4)] shadow-[0_0_30px_rgba(201,168,76,0.2)] tracking-wide cursor-pointer hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] hover:border-[var(--gold)]/80 hover:bg-[rgba(201,168,76,0.15)] transition-all duration-300"
              onClick={() => {
                window.open('https://tinyurl.com/pacn47tix', '_blank');
              }}
            >
              Get Tickets
            </StarButton>
          </div>
        </div>

        <div className="hero-scroll-indicator animate-fade-in delay-1000">
          <span>Scroll</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT SECTION — Story & Legacy
          ══════════════════════════════════════════════ */}
      <section id="about" className="section about">
        <RadiantSun className="about-deco-sun" size={180} />
        <CrescentMoon className="about-deco-moon" size={70} />
        <SparkleField />

        <div className="section-header reveal">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">47 Years of Culture<br />& Community</h2>
          <CelestialDivider />
        </div>

        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>
              The Pilipinx-American Culture Night (PACN) is an annual student-led production that celebrates the richness of Pilipinx heritage through storytelling, dance, and music. More than just a performance, PACN is a heartfelt tribute to culture, identity, and community, bringing together students to honor traditions while fostering creativity and connection. Each year, PACN showcases a unique narrative that blends historical and contemporary themes, featuring traditional folk dances, modern performances, and a cast of passionate individuals dedicated to preserving and sharing Pilipinx culture. Rooted in unity and pride, PACN continues to inspire and educate, keeping the spirit of our heritage alive for generations to come.
            </p>
          </div>

          <div className="about-highlight-card reveal-right">
            <div className="about-stat">
              <div className="about-stat-number">47</div>
              <div className="about-stat-label">Years of Tradition</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">300+</div>
              <div className="about-stat-label">Student Performers</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">1</div>
              <div className="about-stat-label">Night of Celebration</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GALLERY SECTION — Visual Story
          ══════════════════════════════════════════════ */}
      <section id="gallery" className="section gallery">
        <div className="gallery-top-line" />
        <SparkleField />

        <div className="section-header reveal">
          <p className="section-label">Looking Back</p>
          <h2 className="section-title">PACN 46 Highlights</h2>
          <CelestialDivider />
        </div>

        <div className="reveal flex justify-center max-w-4xl mx-auto px-12 pb-10">
          <Carousel orientation="horizontal" opts={{ loop: true, align: "center" }} className="w-full">
            <CarouselContent className="h-[450px]">
              {galleryImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                  <div className="bg-card text-card-foreground flex h-full flex-col rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.1)] shadow-[0_0_20px_rgba(201,168,76,0.05)]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[rgba(201,168,76,0.2)] text-[var(--gold)] hover:bg-[rgba(201,168,76,0.1)] hover:text-white bg-[var(--navy-abyss)]" />
            <CarouselNext className="border-[rgba(201,168,76,0.2)] text-[var(--gold)] hover:bg-[rgba(201,168,76,0.1)] hover:text-white bg-[var(--navy-abyss)]" />
          </Carousel>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DETAILS SECTION — Event Info
          ══════════════════════════════════════════════ */}
      <section id="details" className="section details">
        <SparkleField />
        <RadiantSun className="details-deco" size={120}
          style={{ bottom: '5%', right: '5%', opacity: 0.08, animation: 'rotateSlowCW 100s linear infinite' } as React.CSSProperties} />

        <div className="section-header reveal">
          <p className="section-label">Event Details</p>
          <h2 className="section-title">Join Us This Spring</h2>
          <CelestialDivider />
        </div>

        <div className="details-grid">
          {/* Date */}
          <div className="detail-card reveal" style={{ transitionDelay: "0s" }}>
            <div className="detail-card-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="detail-card-title">Date</div>
            <div className="detail-card-value">
              May 2, 2026<br />
              Saturday
            </div>
          </div>

          {/* Venue */}
          <div className="detail-card reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="detail-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="detail-card-title">Venue</div>
            <div className="detail-card-value">
              Bren Events Center<br />
              UC Irvine Campus
            </div>
          </div>

          {/* Time */}
          <div className="detail-card reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="detail-card-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="detail-card-title">Showtime</div>
            <div className="detail-card-value">
              Doors at 5:30&thinsp;PM<br />
              Show at 6:00&thinsp;PM
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA BANNER
          ══════════════════════════════════════════════ */}
      <div className="cta-banner reveal">
        <Sparkle size={20} color="#C9A84C" className="animate-fade-in delay-300"
          style={{ margin: '0 auto 1.5rem', display: 'block', opacity: 0.5 } as React.CSSProperties} />
        <h3>Don&apos;t Miss PACN 47</h3>
        <p>
          Secure your seats for an unforgettable evening of culture,
          community, and celebration.
        </p>
        <a href="https://tinyurl.com/pacn47tix" target="_blank" rel="noopener noreferrer" className="hero-cta" id="cta-tickets">
          <span>Get Tickets</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
      <footer id="footer" className="footer">
        <CompassRose className="footer-compass" size={60} />

        <div className="footer-logo-text">PACN 47</div>
        <p className="footer-org">
          Presented by Kababayan at UC Irvine
        </p>

        <div className="footer-coordinators">
          <p className="footer-coord-title">PACN 47 Coordinators:</p>
          <p className="footer-coord-names">Colin Cabreros &bull; Mikayla Salas &bull; Shaine Enriquez</p>
          <a href="mailto:kababayan.pacn@gmail.com" className="footer-coord-email">kababayan.pacn@gmail.com</a>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#details">Details</a>
          <a href="https://tinyurl.com/pacn47tix" target="_blank" rel="noopener noreferrer">Tickets</a>
        </nav>

        <div className="footer-social" aria-label="Social media links">
          <a href="https://www.instagram.com/pacnatuci/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@pacnatuci1769" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        <CelestialDivider />

        <p className="footer-copy" style={{ marginTop: '1.5rem' }}>
          Website built by Noah Tizon
        </p>
      </footer>
    </>
  );
}
