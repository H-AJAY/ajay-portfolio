import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Sun, Moon, ExternalLink, ArrowUpRight, Mail, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Bootstrap", level: 88 },
  { name: "MUI v5", level: 82 },
  { name: "Axios", level: 80 },
  { name: "REST APIs", level: 80 },
  { name: "Git", level: 78 },
];

const projects = [
  {
    title: "Project Management Tool",
    desc: "Role-based React application with login/register, Manager and Employee dashboards, project and task tracking, and chart integrations. Built as a real-world enterprise-style frontend.",
    tech: ["React", "JavaScript", "Bootstrap", "REST API"],
    github: "https://github.com/H-AJAY/project-management-tool",
    number: "01",
  },
];

// Job Description Analyzer — your featured AI project
const featuredProject = {
  title: "Job Description Analyzer",
  desc: "An AI-powered tool built with React and the Anthropic Claude API that analyzes job descriptions, extracts key skills, and scores your resume fit. Built to solve a real problem in the hiring process.",
  tech: ["React", "Anthropic SDK", "MUI v5", "Claude API"],
  github: "https://github.com/H-AJAY/jd-analyzer",
  live: "https://jd-analyzer-alpha.vercel.app/",
  number: "00",
  featured: true,
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const theme = {
    bg: darkMode ? "#0a0a0f" : "#f5f4f0",
    bgCard: darkMode ? "#111118" : "#ffffff",
    bgMuted: darkMode ? "#16161f" : "#eeece8",
    text: darkMode ? "#e8e6df" : "#0f0e0b",
    textMuted: darkMode ? "#7a7870" : "#6b6960",
    accent: "#00e5c8",
    accentDim: darkMode ? "rgba(0,229,200,0.08)" : "rgba(0,180,160,0.08)",
    border: darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    navBg: darkMode ? "rgba(10,10,15,0.85)" : "rgba(245,244,240,0.85)",
  };

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --accent: #00e5c8;
          --accent-glow: rgba(0,229,200,0.25);
        }

        html { scroll-behavior: smooth; }

        .cursor-dot {
          width: 6px; height: 6px;
          background: var(--accent);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
          mix-blend-mode: difference;
        }

        .nav-link-custom {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.4rem 0;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .nav-link-custom.active {
          color: var(--accent) !important;
        }

        .hero-number {
          font-family: 'Syne', sans-serif;
          font-size: clamp(6rem, 15vw, 14rem);
          font-weight: 800;
          line-height: 0.85;
          opacity: 0.04;
          position: absolute;
          right: -1rem;
          top: -2rem;
          user-select: none;
          pointer-events: none;
        }

        .skill-bar-track {
          height: 2px;
          border-radius: 2px;
          flex: 1;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 2px;
          background: var(--accent);
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 0 8px var(--accent-glow);
        }

        .project-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .project-card:hover .project-img-wrap img {
          transform: scale(1.05);
        }

        .project-img-wrap {
          overflow: hidden;
          border-radius: 8px;
        }

        .project-img-wrap img {
          transition: transform 0.5s ease;
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .tech-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.06em;
          padding: 0.2rem 0.55rem;
          border-radius: 100px;
          border: 1px solid;
          white-space: nowrap;
        }

        .btn-accent {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.55rem 1.1rem;
          border-radius: 100px;
          border: 1px solid var(--accent);
          color: var(--accent);
          background: transparent;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .btn-accent:hover {
          background: var(--accent);
          color: #0a0a0f;
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .btn-ghost {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.55rem 1.1rem;
          border-radius: 100px;
          border: 1px solid;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          transition: background 0.2s ease;
          font-size: 0.95rem;
        }

        .divider-line {
          height: 1px;
          width: 100%;
          opacity: 0.08;
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          line-height: 1.1;
        }

        .featured-badge {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0a0a0f;
          background: var(--accent);
          padding: 0.2rem 0.6rem;
          border-radius: 100px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .nav-links-desktop { display: none !important; }
          .nav-links-mobile {
            position: fixed;
            top: 60px; left: 0; right: 0;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            z-index: 998;
            backdrop-filter: blur(20px);
            border-bottom: 1px solid;
          }
          .hero-number { display: none; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: 1fr 1fr !important; }
          p, li { font-size: 0.88rem !important; line-height: 1.7 !important; word-break: normal !important; overflow-wrap: break-word !important; }
        }

        @media (min-width: 769px) {
          .nav-links-mobile { display: none !important; }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .glow-dot {
          width: 4px; height: 4px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--accent);
        }

        .hero-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          border: 1px solid var(--accent);
          color: var(--accent);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .about-stat {
          padding: 1.25rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid;
        }

        .about-stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-grid p {
            font-size: 0.88rem !important;
            overflow-wrap: break-word !important;
            line-height: 1.75 !important;
          }
        }
      `}</style>

      {/* Cursor dot */}
      <div className="cursor-dot" ref={cursorRef} />

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: theme.navBg,
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${theme.border}`,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.02em" }}>
          H.<span style={{ color: theme.accent }}>AJAY</span>
        </span>

        {/* Desktop nav */}
        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {["home", "about", "skills", "projects", "contact"].map((s) => (
            <button key={s} className={`nav-link-custom ${activeSection === s ? "active" : ""}`}
              style={{ color: activeSection === s ? theme.accent : theme.textMuted }}
              onClick={() => scrollTo(s)}>
              {s}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a href="https://github.com/H-AJAY" target="_blank" rel="noopener noreferrer" style={{ color: theme.textMuted, display: "flex", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = theme.accent}
            onMouseLeave={e => e.currentTarget.style.color = theme.textMuted}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ajayhochumin" target="_blank" rel="noopener noreferrer" style={{ color: theme.textMuted, display: "flex", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = theme.accent}
            onMouseLeave={e => e.currentTarget.style.color = theme.textMuted}>
            <Linkedin size={18} />
          </a>
          <a href="/Ajay_H_Frontend_Developer_Resume.pdf" download className="btn-accent" style={{ padding: "0.35rem 0.9rem", fontSize: "0.65rem" }}>
            Resume
          </a>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: "none", border: `1px solid ${theme.border}`, borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", color: theme.textMuted, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ background: theme.text }} />
            <span style={{ background: theme.text }} />
            <span style={{ background: theme.text }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-links-mobile" style={{ background: theme.navBg, borderColor: theme.border }}>
          {["home", "about", "skills", "projects", "contact"].map((s) => (
            <button key={s} className="nav-link-custom" style={{ color: activeSection === s ? theme.accent : theme.textMuted, textAlign: "left" }}
              onClick={() => scrollTo(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 2rem 2rem", position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-tag">Frontend Developer · Chennai</div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            maxWidth: "800px",
          }}>
            Building interfaces<br />
            <span style={{ color: theme.accent }}>people love</span><br />
            to use.
          </h1>
          <p style={{ fontSize: "1.05rem", color: theme.textMuted, maxWidth: "500px", lineHeight: 1.7, marginBottom: "2.5rem", fontWeight: 300 }}>
            2.2 years crafting React applications. Specialized in MUI v5, REST APIs, and now building AI-powered tools with Claude. Open to roles in Chennai and Bangalore.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-accent" onClick={() => scrollTo("projects")}>
              View Work <ArrowUpRight size={13} />
            </button>
            <button className="btn-ghost" style={{ borderColor: theme.border, color: theme.textMuted }}
              onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-number">2.2</div>

        <div className="scroll-indicator">
          <div className="glow-dot" />
          <div style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, ${theme.accent}, transparent)` }} />
        </div>
      </section>

      <div className="divider-line" style={{ background: theme.text, maxWidth: "1100px", margin: "0 auto" }} />

      {/* About Section */}
      <section id="about" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div data-aos="fade-up">
          <p className="section-label">About</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: theme.text, marginBottom: "2.5rem" }}>
            Turning ideas into<br />real products.
          </h2>
        </div>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} data-aos="fade-up" data-aos-delay="100">
          <div>
            <p style={{ color: theme.textMuted, lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              I'm <strong style={{ color: theme.text }}>H. Ajay</strong>, a Frontend Developer with 2.2 years of hands-on experience building production React applications. I specialize in React.js, MUI v5, and REST API integration — and have shipped real features for DENSO, a leading automotive client.
            </p>
            <p style={{ color: theme.textMuted, lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              I hold a Full Stack certification from GUVI and a B.E. in Mechanical Engineering — a background that gives me structured problem-solving instincts alongside frontend craft.
            </p>
            <p style={{ color: theme.textMuted, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Currently building AI-powered tools with the Anthropic Claude API, and actively sharpening TypeScript and Redux Toolkit to go deeper on the React ecosystem.
            </p>
          </div>

          <div className="about-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { number: "2.2+", label: "Years Experience" },
              { number: "5+", label: "Projects Built" },
              { number: "5", label: "Anthropic Certs" },
              { number: "∞", label: "Drive to Grow" },
            ].map((stat, i) => (
              <div key={i} className="about-stat" style={{ borderColor: theme.border, background: theme.bgCard }}>
                <div className="about-stat-number">{stat.number}</div>
                <div style={{ fontSize: "0.75rem", color: theme.textMuted, marginTop: "0.4rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line" style={{ background: theme.text, maxWidth: "1100px", margin: "0 auto" }} />

      {/* Skills Section */}
      <section id="skills" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div data-aos="fade-up">
          <p className="section-label">Skills</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: theme.text, marginBottom: "3rem" }}>
            What I work with.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }} data-aos="fade-up" data-aos-delay="100">
          {skills.map((skill, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", borderRadius: "8px", background: theme.bgCard, border: `1px solid ${theme.border}` }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", minWidth: "90px", color: theme.text }}>{skill.name}</span>
              <div className="skill-bar-track" style={{ background: theme.bgMuted }}>
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: theme.accent, minWidth: "32px", textAlign: "right" }}>{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-line" style={{ background: theme.text, maxWidth: "1100px", margin: "0 auto" }} />

      {/* Projects Section */}
      <section id="projects" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div data-aos="fade-up">
          <p className="section-label">Work</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: theme.text, marginBottom: "3rem" }}>
            Featured projects.
          </h2>
        </div>

        {/* Featured AI Project */}
        <div data-aos="fade-up" style={{ marginBottom: "2rem" }}>
          <div style={{
            padding: "2rem",
            borderRadius: "16px",
            background: theme.bgCard,
            border: `1px solid ${theme.accent}`,
            boxShadow: `0 0 40px rgba(0,229,200,0.06)`,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(0,229,200,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: theme.accent, opacity: 0.5 }}>{featuredProject.number}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: theme.text }}>{featuredProject.title}</h3>
              </div>
              <span className="featured-badge">AI-Powered · Featured</span>
            </div>
            <p style={{ color: theme.textMuted, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "600px" }}>{featuredProject.desc}</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {featuredProject.tech.map((t, i) => (
                <span key={i} className="tech-tag" style={{ borderColor: `${theme.accent}40`, color: theme.accent }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="btn-accent">
                <ExternalLink size={12} /> Live Demo
              </a>
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ borderColor: theme.border, color: theme.textMuted }}>
                <Github size={12} /> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", maxWidth: "680px" }}>
          {projects.map((project, idx) => (
            <div key={idx} className="project-card" data-aos="fade-up" data-aos-delay={idx * 80}
              style={{ padding: "1.5rem", borderRadius: "12px", background: theme.bgCard, border: `1px solid ${theme.border}` }}>
              <div style={{
                marginBottom: "1.25rem",
                height: "120px",
                borderRadius: "8px",
                background: `linear-gradient(135deg, ${theme.bgMuted} 0%, ${theme.accentDim} 100%)`,
                border: `1px solid ${theme.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "3.5rem", opacity: 0.06, color: theme.accent, userSelect: "none" }}>{project.number}</span>
                <span style={{ position: "absolute", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", color: theme.accent, opacity: 0.5, textTransform: "uppercase" }}>React App</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: theme.accent, opacity: 0.5 }}>{project.number}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: theme.text }}>{project.title}</h3>
              </div>
              <p style={{ color: theme.textMuted, fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "1rem" }}>{project.desc}</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag" style={{ borderColor: theme.border, color: theme.textMuted }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ borderColor: theme.border, color: theme.textMuted, fontSize: "0.65rem", padding: "0.35rem 0.8rem" }}>
                    <Github size={11} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ fontSize: "0.65rem", padding: "0.35rem 0.8rem" }}>
                    <ExternalLink size={11} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-line" style={{ background: theme.text, maxWidth: "1100px", margin: "0 auto" }} />

      {/* Contact Section */}
      <section id="contact" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div data-aos="fade-up">
          <p className="section-label">Contact</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: theme.text, marginBottom: "0.75rem" }}>
            Let's work together.
          </h2>
          <p style={{ color: theme.textMuted, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Available immediately · Open to Chennai &amp; Bangalore · Full-time roles
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }} data-aos="fade-up" data-aos-delay="100">
          {[
            { icon: <Mail size={18} />, label: "Email", value: "ajayhochumin00@gmail.com", href: "mailto:ajayhochumin00@gmail.com" },
            { icon: <Phone size={18} />, label: "Mobile", value: "+91 63802 98751", href: "tel:+916380298751" },
            { icon: <Linkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/ajayhochumin", href: "https://www.linkedin.com/in/ajayhochumin" },
            { icon: <Github size={18} />, label: "GitHub", value: "github.com/H-AJAY", href: "https://github.com/H-AJAY" },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
              className="contact-link"
              style={{ color: theme.text, background: theme.bgCard, border: `1px solid ${theme.border}` }}
              onMouseEnter={e => { e.currentTarget.style.background = theme.accentDim; e.currentTarget.style.borderColor = `${theme.accent}40`; }}
              onMouseLeave={e => { e.currentTarget.style.background = theme.bgCard; e.currentTarget.style.borderColor = theme.border; }}>
              <span style={{ color: theme.accent }}>{item.icon}</span>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: theme.textMuted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.1rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.88rem" }}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "2rem", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: theme.textMuted, letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} H. AJAY · BUILT WITH REACT · CHENNAI
        </p>
      </footer>
    </div>
  );
}
