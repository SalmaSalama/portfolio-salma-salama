"use client"

import React, { useState } from "react"
import {
  FiTarget,
  FiCpu,
  FiLink,
  FiBookOpen,
  FiUsers,
  FiCheckCircle,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiFacebook,
  FiMenu,
  FiX,
} from "react-icons/fi"
import {
  FaDownload,
  FaPython,
  FaJava,
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJira,
  FaBrain,
  FaRobot,
  FaCogs,
  FaChartLine,
  FaCloud,
  FaCube,
  FaFileExcel,
  FaCode,
  FaSitemap,
  FaWindows,
  FaEye,
  FaPhp,
} from "react-icons/fa"
import {
  SiSpringboot,
  SiDjango,
  SiTensorflow,
  SiJavascript,
  SiApachehadoop,
  SiApachespark,
  SiMongodb,
  SiPostman,
  SiC,
  SiCplusplus,
  SiJupyter,
  SiDocker,
  SiEclipseide,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiLinux,
  SiApachekafka,
  SiApachehive,
  SiApacheflink,
  SiScala,
  SiR,
  SiMysql,
  SiOracle,
  SiPostgresql,
} from "react-icons/si"
import { IoLogoTableau } from "react-icons/io5"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionIds = ["home", "about", "skills", "projects", "contact"]
  const [activeSection, setActiveSection] = useState("home")

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  React.useEffect(() => {
    const HEADER = 76
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    if (!sections.length) return

    let ticking = false

    const pickActive = () => {
      ticking = false
      const viewportCenter = window.scrollY + window.innerHeight / 2
      let current = sections[0].id
      for (const el of sections) {
        const top = el.offsetTop - HEADER
        const bottom = top + el.offsetHeight
        if (viewportCenter >= top && viewportCenter < bottom) {
          current = el.id
          break
        }
      }
      setActiveSection((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(pickActive)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    pickActive()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const useRevealOnScroll = () => {
    React.useEffect(() => {
      const els = Array.from(document.querySelectorAll("[data-animate]"))
      if (!els.length) return
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const delay = e.target.getAttribute("data-delay") || "0"
              e.target.style.setProperty("--reveal-delay", `${delay}ms`)
              e.target.classList.add("in")
              io.unobserve(e.target)
            }
          })
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }, [])
  }

  const useHeroParallax = () => {
    React.useEffect(() => {
      const img = document.querySelector(".card-illu img")
      if (!img) return
      let raf = 0
      const onScroll = () => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const y = window.scrollY * 0.06
          img.style.transform = `translate3d(0, ${y}px, 0) scale(1.02)`
        })
      }
      window.addEventListener("scroll", onScroll, { passive: true })
      onScroll()
      return () => {
        window.removeEventListener("scroll", onScroll)
        cancelAnimationFrame(raf)
      }
    }, [])
  }

  const useStagger = () => {
    React.useEffect(() => {
      const groups = document.querySelectorAll("[data-stagger] > *")
      groups.forEach((el, i) => {
        el.setAttribute("data-delay", String(60 * i))
        el.setAttribute("data-animate", el.getAttribute("data-animate") || "fade-up")
      })
    }, [])
  }

  React.useEffect(() => {
    const btn = document.getElementById("scrollTopBtn")
    const onScroll = () => {
      if (window.scrollY > 300) {
        btn.classList.add("show")
      } else {
        btn.classList.remove("show")
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useRevealOnScroll()
  useHeroParallax()
  useStagger()

  const projects = [
    {
      title: "Plateforme IA Freelance - Entreprise",
      desc: "Matching intelligent (embeddings/ML) + front React + backEnd Django Rest API.",
      cover: "/image.png",
      tags: ["React", "Django REST", "ML", "PostgreSQL"],
      code: "https://github.com/SalmaSalama/opportmatch.git",
    },
    {
      title: "Gestion de résidences étudiantes",
      desc: "Application Spring Boot + React : gestion des chambres, résidents, paiements et notifications.",
      cover: "/image2.png",
      tags: ["React", "Spring Boot", "MySQL"],
      code: "https://github.com/SalmaSalama/residences-app.git",
    },
    {
      title: "IoT - Détection de fuites d'eau",
      desc: "Capteurs connectés + dashboard web interactif pour la détection et la visualisation des fuites.",
      cover: "/image1.png",
      tags: ["IoT", "Laravel", "HTML", "CSS", "JavaScript"],
      code: "https://github.com/SalmaSalama/DetectionFuitesDansR-seauxDeDistribution.git",
    },
    {
      title: "Prédiction des prix des maisons",
      desc: "Projet Python / Machine Learning utilisant des données socio-économiques pour entraîner un modèle de régression et évaluer ses performances prédictives.",
      cover: "/image5.png",
      tags: ["Python", "Machine Learning", "Pandas", "Seaborn"],
      code: "https://github.com/SalmaSalama/housePriceMachineLearning.git",
    },
    {
      title: "Application de gestion de rendez-vous médicaux",
      desc: "Système distribué basé sur Spring Boot & React.js avec architecture microservices : profils patients/médecins, agendas et notifications.",
      cover: "/image3.png",
      tags: ["Spring Boot", "React", "Microservices", "MySQL"],
      code: "https://github.com/SalmaSalama/gestion-rendezvous-medicaux-microservices.git",
    },
    {
      title: "Système d'enregistrement de diplômes universitaires",
      desc: "Implémentation d'un smart contract Blockchain pour l'enregistrement et la vérification sécurisée des diplômes, assurant traçabilité et intégrité.",
      cover: "/image6.png",
      tags: ["Blockchain", "Smart Contract", "Solidity", "Ethereum"],
      code: "https://github.com/SalmaSalama/GestionDiplomesBlockchain.git",
    },
    {
      title: "Prévention des incendies agricoles",
      desc: "Création d'un modèle prédictif IA exploitant des données météorologiques pour identifier les zones à risque et renforcer la surveillance.",
      cover: "/image4.png",
      tags: ["IA", "Machine Learning", "Python", "Data Science"],
      code: "https://github.com/SalmaSalama/agri-fire-risk-ia.git",
    },
  ]

  function ContactForm() {
    const [status, setStatus] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)

      try {
        const response = await fetch("https://formsubmit.co/ajax/salamasalma946@gmail.com", {
          method: "POST",
          body: formData,
        })

        const data = await response.json()
        if (data.success) {
          setStatus({ type: "ok", msg: "Message envoyé avec succès !" })
          e.target.reset()
        } else {
          setStatus({ type: "error", msg: "Erreur lors de l'envoi. Réessaie." })
        }
      } catch (err) {
        setStatus({ type: "error", msg: "Impossible de contacter le serveur." })
      }
    }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form-title">M'écrire un message</h3>

        {status && <div className={`form-alert ${status.type === "ok" ? "ok" : "error"}`}>{status.msg}</div>}

        <div className="grid2">
          <div className="field">
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" placeholder="Votre nom" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Votre email" required />
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Votre message" required />
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="📨 Nouveau message depuis le portfolio" />
        <input type="hidden" name="_from" value="Portfolio Salma Salama" />
        <input type="text" name="_honey" style={{ display: "none" }} />

        <button className="btn-glass" type="submit" aria-label="Envoyer le message">
          <FiSend />
          <span>Envoyer</span>
        </button>
      </form>
    )
  }

  return (
    <main className="site">
      <style>{`
        :root{
          --bg:#0e1116;
          --card:#141a22;
          --ink:#f1f5f9;
          --muted:#9aa4b2;
          --accent:#00D4A9;
          --accent-2:#19E6C1;
          --line:#233042;
          --radius:18px;
          --shadow:0 12px 28px rgba(0,0,0,.24);
          --container:1180px;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{
          margin:0;background:var(--bg);color:var(--ink);
          font-family:Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif
        }
        a{color:inherit;text-decoration:none}
        img{max-width:100%;display:block}
        .container{max-width:var(--container);margin:0 auto;padding:0 16px}
        .section{border-top:1px solid var(--line)}

        /* Improved responsive nav with hamburger menu */
        .nav{
          position:sticky;top:0;z-index:50;
          background:rgba(10,14,18,.88);
          backdrop-filter:blur(10px);
          border-bottom:1px solid var(--line);
          transition:background .3s ease;
        }
        .nav.is-skills{
          background:rgba(0,212,169,.15);
          border-bottom-color:rgba(0,212,169,.45);
          box-shadow:0 8px 16px rgba(0,212,169,.08);
        }

        .nav .inner{
          height:64px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 16px;
          max-width:var(--container);
          margin:0 auto;
        }

        .brand{
          display:flex;
          align-items:center;
          gap:12px;
          font-weight:700;
          font-size:18px;
          letter-spacing:0.2px;
          flex-shrink:0;
        }

        .logo-img{
          width:42px;
          height:42px;
          object-fit:contain;
          background:transparent;
          border-radius:8px;
        }

        .logo-text strong{
          color:var(--accent-2);
        }

        /* Desktop menu - hidden on mobile */
        .menu{
          display:flex;
          gap:26px;
          align-items:center;
        }

        .menu a{
          opacity:.9;
          font-size:16px;
          transition:color .2s ease, transform .2s ease;
        }

        .menu a:hover{
          color:var(--accent);
          transform:translateY(-1px);
        }

        .menu a.active{
          color:var(--accent);
          font-weight:600;
          position:relative;
        }

        .menu a.active::after{
          content:"";
          position:absolute;
          left:0;
          right:0;
          bottom:-8px;
          height:2px;
          background:var(--accent);
          border-radius:2px;
        }

        /* Hamburger button - visible on mobile */
        .hamburger{
          display:none;
          background:none;
          border:none;
          color:var(--ink);
          font-size:24px;
          cursor:pointer;
          padding:8px;
          align-items:center;
          justify-content:center;
          transition:color .2s ease, transform .2s ease;
        }

        .hamburger:hover{
          color:var(--accent);
          transform:scale(1.1);
        }

        /* Mobile menu drawer */
        .menu-mobile{
          position:fixed;
          top:64px;
          left:0;
          right:0;
          background:rgba(10,14,18,.96);
          backdrop-filter:blur(10px);
          border-bottom:1px solid var(--line);
          display:flex;
          flex-direction:column;
          gap:0;
          max-height:0;
          overflow:hidden;
          transition:max-height .3s cubic-bezier(.2,.65,.2,1);
          z-index:49;
        }

        .menu-mobile.open{
          max-height:400px;
        }

        .menu-mobile a{
          padding:16px;
          border-bottom:1px solid rgba(35,48,66,.5);
          color:var(--ink);
          font-size:16px;
          font-weight:500;
          transition:all .2s ease;
          display:flex;
          align-items:center;
        }

        .menu-mobile a:hover{
          background:rgba(0,212,169,.08);
          color:var(--accent);
          padding-left:24px;
        }

        .menu-mobile a.active{
          background:rgba(0,212,169,.12);
          color:var(--accent);
          border-left:3px solid var(--accent);
          padding-left:20px;
        }

        /* Responsive breakpoint */
        @media (max-width:768px){
          .menu{
            display:none;
          }

          .hamburger{
            display:flex;
          }

          .nav .inner{
            padding:0 12px;
          }
        }

        /* Rest of styles */
        .btn{display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#062a23;border:none;border-radius:999px;padding:10px 16px;font-weight:500;box-shadow:var(--shadow);cursor:pointer;transition:all .2s ease}
        .btn:hover{transform:translateY(-1px)}
        .btn.secondary{background:#1c2530;color:var(--ink);box-shadow:none;border:1px solid var(--line)}
        .pill{display:inline-flex;align-items:center;gap:6px;background:#1b2530;border:1px solid var(--line);border-radius:999px;padding:8px 12px;font-size:14px}

        .hero{padding:30px 0}
        .grid-hero{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
        @media (max-width:960px){
          .grid-hero{grid-template-columns:1fr;gap:24px}
        }

        .kicker{color:var(--muted);margin:0 0 10px 0;font-weight:600;letter-spacing:.3px;font-size:15px}
        .title{line-height:1.06;margin:0 0 14px 0;font-size:30px;font-weight:400}
        .title .accent{color:var(--accent-2);font-size:54px}
        @media (max-width:640px){
          .title{font-size:24px}
          .title .accent{font-size:36px}
        }

        .lead{color:#cfd7e3;max-width:58ch;text-align:justify;font-size:16px;line-height:1.7}
        
        .cta{display:flex;gap:12px;margin-top:22px;flex-wrap:wrap}
        @media (max-width:640px){
          .cta{flex-direction:column}
          .cta .btn{width:100%}
        }

        .card-illu{display:flex;justify-content:center;align-items:center;overflow:hidden;height:100%;min-height:220px}

        .about-pro{padding:72px 0}
        .about-pro__grid{display:grid;gap:18px;grid-template-columns:1.1fr .9fr}
        @media (max-width:960px){
          .about-pro__grid{grid-template-columns:1fr}
        }

        .about-pro__card{padding:18px;border:1px solid var(--line);border-radius:14px;background:#111b27}
        .about-pro__head{display:grid;gap:4px;margin-bottom:10px}
        .head-row{display:flex;align-items:center;gap:10px}
        .icon-xl{width:28px;height:28px;color:var(--accent-2);flex-shrink:0}
        .about-pro__title{margin:0;font-size:18px;color:var(--accent)}
        .about-pro__subtitle{margin:0;color:var(--muted);font-size:15px}
        .about-pro__list,.about-pro__mini{list-style:none;padding:0;margin:0;display:grid;gap:10px;color:#dbe4ef;line-height:1.6;font-size:15px}
        .about-pro__list li,.about-pro__mini li{display:grid;grid-template-columns:22px 1fr;gap:8px;align-items:start}
        .about-pro__list li svg,.about-pro__mini li svg{color:var(--accent-2);margin-top:2px}
        .about-pro__steps{margin:10px 0 12px;padding-left:18px;display:grid;gap:8px;color:#cfd7e3;line-height:1.6;font-size:15px}
        .about-pro__chips{display:flex;flex-wrap:wrap;gap:8px}
        .chip{display:inline-flex;align-items:center;gap:6px;background:#0f1720;color:#dce3ea;border:1px solid var(--line);border-radius:999px;padding:6px 10px;font-size:12px}
        .chip svg{width:14px;height:14px;color:var(--accent-2)}
        .about-pro__now{margin-top:18px;padding:18px;border:1px solid var(--line);background:#101824;border-radius:14px}
        .about-pro__now h3{margin:0 0 10px 0;font-size:16px;font-weight:700;color:var(--accent);letter-spacing:.2px}
        .about-pro__nowgrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:20px;row-gap:12px}
        @media (max-width:960px){
          .about-pro__nowgrid{grid-template-columns:1fr}
        }

        .skills{padding:74px 0}
        .skill-cols{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
        .card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:18px}
        .card h3{margin:0 0 10px 0;font-size:18px}
        .tags{display:flex;flex-wrap:wrap;gap:8px}
        .tag{background:#1b2530;border:1px solid var(--line);border-radius:999px;padding:8px 14px;font-size:14px}
        .icon-tags .tag{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;background:#0e1720;border:1px solid var(--line);font-size:14px;color:#dce3ea;margin:4px;transition:all .25s ease}
        .icon-tags .tag svg{width:17px;height:17px;color:var(--accent-2);flex-shrink:0;transition:color .25s ease,transform .25s ease}
        .icon-tags .tag:hover{background:var(--accent);border-color:transparent;color:#052022;transform:translateY(-2px)}
        .icon-tags .tag:hover svg{color:#052022;transform:scale(1.1)}

        .works{padding:74px 0}
        .work-grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
        @media (max-width:640px){
          .work-grid{grid-template-columns:1fr}
        }

        .work{background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
        .work-cover{position:relative;aspect-ratio:16/9;background:#0f1823;overflow:hidden}
        .work-cover img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease,opacity .35s ease}
        .work:hover .work-cover img{transform:scale(1.03);opacity:.96}
        .work-badges{position:absolute;left:10px;bottom:10px;display:flex;gap:6px;flex-wrap:wrap}
        .wb{background:rgba(0,0,0,.45);color:#e7f6f3;border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(4px);padding:4px 8px;font-size:12px;border-radius:999px}
        .work-body{padding:12px 14px 4px 14px}
        .work-title{margin:4px 0 6px 0;font-size:18px;font-weight:500}
        .work-actions{padding:10px 14px 14px 14px;display:flex;gap:8px;margin-top:auto}
        .btn.tiny{padding:6px 10px;font-size:12px;display:inline-flex;align-items:center;gap:6px}
        .work:hover{box-shadow:0 10px 30px rgba(0,0,0,.28);border-color:rgba(0,212,169,.35)}

        .contact{padding:74px 0}
        .contact-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:start}
        @media (max-width:960px){
          .contact-grid{grid-template-columns:1fr}
        }

        .contact-cards .cards{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:14px}
        .contact-card{display:grid;grid-template-columns:44px 1fr;gap:10px;padding:12px;border:1px solid var(--line);background:var(--card);border-radius:14px;align-items:center;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
        .contact-card:hover{transform:translateY(-2px);border-color:rgba(0,212,169,.35);box-shadow:0 10px 24px rgba(0,0,0,.2)}
        .cc-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0f1720;border:1px solid var(--line);color:var(--accent-2);font-size:20px}
        .cc-title{font-weight:600}
        .cc-sub{color:var(--muted);font-size:14px}

        .form{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:18px;display:grid;gap:12px}
        .form-title{margin:0 0 6px 0;font-size:18px;color:var(--accent)}
        .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        @media (max-width:640px){
          .grid2{grid-template-columns:1fr}
        }

        .field{display:grid;gap:6px}
        .field input,.field textarea{width:100%;background:#0f1720;border:1px solid var(--line);border-radius:12px;padding:12px 14px;color:var(--ink);font-family:inherit;font-size:15px}
        .field textarea{min-height:120px;resize:vertical}
        .form-alert{border-radius:8px;padding:10px 12px;font-size:14px;animation:fadeIn .4s ease}
        .form-alert.ok{background:#06281f;border:1px solid #0c3;color:#b6ffe0}
        .form-alert.error{background:#281316;border:1px solid #c33;color:#ffd6db}
        @keyframes fadeIn{
          from{opacity:0;transform:translateY(-5px)}
          to{opacity:1;transform:translateY(0)}
        }

        .btn-glass{display:inline-flex;align-items:center;gap:8px;justify-content:center;padding:10px 22px;font-weight:500;font-size:15px;color:#052022;background:var(--accent);border:1px solid rgba(0,212,169,.3);border-radius:999px;backdrop-filter:blur(8px);cursor:pointer;transition:all .3s ease}
        .btn-glass:hover{background:var(--accent);color:#052022;border-color:var(--accent);transform:translateY(-2px);box-shadow:0 0 18px rgba(0,212,169,.25)}

        .footer{
          padding:24px 16px;
          background:linear-gradient(to top,#0b1117,#0e1116);
          border-top:1px solid var(--line);
          text-align:center;
          position:relative;
          overflow:hidden
        }
        .footer::before{
          content:"";
          position:absolute;
          inset:0;
          background:radial-gradient(600px 300px at 50% -80px,rgba(0,212,169,.08),transparent);
          opacity:.9;
          pointer-events:none
        }

        .foot{
          display:flex;
          flex-direction:row;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          flex-wrap:nowrap;
          position:relative;
          z-index:1;
          width:100%;
          max-width:var(--container);
          margin:0 auto;
        }

        .foot-links{
          display:flex;
          justify-content:flex-start;
          gap:16px;
          flex-wrap:wrap;
          margin-bottom:0;
        }

        .foot-links a{
          color:var(--muted);
          font-size:14px;
          transition:color .25s ease,transform .25s ease;
          display:inline-block;
          padding:4px 0;
        }
        .foot-links a:hover{
          color:var(--accent);
          transform:translateY(-1px)
        }

        .social{
          display:flex;
          justify-content:center;
          gap:16px;
          flex-wrap:nowrap;
        }

        .social a{
          width:40px;
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          background:#121a22;
          border:1px solid var(--line);
          color:var(--accent-2);
          font-size:18px;
          transition:all .3s ease;
          flex-shrink:0;
        }
        .social a:hover{
          background:var(--accent);
          color:#052022;
          transform:translateY(-2px);
          box-shadow:0 0 12px rgba(0,212,169,.25)
        }

        .copy{
          color:var(--muted);
          font-size:13px;
          border:none;
          padding:0;
          text-align:right;
        }
        .copy strong{color:var(--accent-2);font-weight:600}

        @media(max-width:960px){
          .foot{flex-direction:column;gap:14px;text-align:center}
          .copy{text-align:center}
          .foot-links a{
          font-size:14px;
          transition:color .25s ease,transform .25s ease;
          display:inline-block;
        
        }
        }

        [data-animate]{
          opacity:0;
          transform:translate3d(0,8px,0);
          will-change:transform,opacity;
        }
        [data-animate].in{
          opacity:1;
          transform:none;
          animation-duration:.6s;
          animation-timing-function:cubic-bezier(.2,.65,.2,1);
          animation-fill-mode:both;
          animation-delay:var(--reveal-delay,0ms);
        }
        [data-animate="fade-up"].in{animation-name:enter-fade-up}
        [data-animate="fade"].in{animation-name:enter-fade}
        [data-animate="zoom-in"].in{animation-name:enter-zoom-in}

        .hero .title{letter-spacing:.2px}
        .hero .title .accent{display:inline-block}
        .hero .kicker[data-animate].in{animation-duration:.45s}
        .hero .title [data-animate].in,.hero .title.in{animation-duration:.65s}
        .card-illu img{transition:transform .6s ease;will-change:transform}
        .card-illu img:hover{transform:translate3d(0,-2px,0) scale(1.03)}
        .work.in,.card.in{animation-duration:.55s}
        .btn,.btn-glass{transition:transform .15s ease,box-shadow .25s ease,filter .25s ease}
        .btn:active,.btn-glass:active{transform:translateY(1px) scale(.995)}
        .work-badges .wb{transform:translateY(6px);opacity:0;transition:transform .35s ease,opacity .35s ease}
        .work.in .work-badges .wb{transform:none;opacity:1;transition-delay:.25s}

        #scrollTopBtn{
          position:fixed;right:22px;bottom:24px;width:46px;height:46px;
          border-radius:50%;border:none;outline:none;background:var(--accent);
          color:#052022;font-size:24px;font-weight:bold;
          box-shadow:0 6px 20px rgba(0,212,169,.3);cursor:pointer;
          opacity:0;visibility:hidden;transform:translateY(20px);
          transition:all .3s ease;z-index:100;
        }
        #scrollTopBtn.show{opacity:1;visibility:visible;transform:translateY(0)}
        #scrollTopBtn:hover{background:var(--accent-2);box-shadow:0 0 20px rgba(25,230,193,.4);transform:translateY(-2px)}

        .section-title{
          margin:0 0 6px 0;
          font-size:30px;
          font-weight:400;
          color:var(--accent)
        }

        .muted{
          color:var(--muted);
          font-size:16px;
        }

        .titreSkills{font-weight:400}
      `}</style>

      <nav className={`nav ${activeSection === "skills" ? "is-skills" : ""}`}>
        <div className="inner">
          <div className="brand">
            <img src="/logoPortfolio1.png" alt="Logo Salma Salama" className="logo-img" />
          </div>

          {/* Desktop Menu */}
          <div className="menu">
            <a href="#home" onClick={handleNavClick} className={activeSection === "home" ? "active" : ""}>
              Accueil
            </a>
            <a href="#about" onClick={handleNavClick} className={activeSection === "about" ? "active" : ""}>
              À propos
            </a>
            <a href="#skills" onClick={handleNavClick} className={activeSection === "skills" ? "active" : ""}>
              Compétences
            </a>
            <a href="#projects" onClick={handleNavClick} className={activeSection === "projects" ? "active" : ""}>
              Projets
            </a>
            <a href="#contact" onClick={handleNavClick} className={activeSection === "contact" ? "active" : ""}>
              Contact
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`menu-mobile ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={handleNavClick} className={activeSection === "home" ? "active" : ""}>
            Accueil
          </a>
          <a href="#about" onClick={handleNavClick} className={activeSection === "about" ? "active" : ""}>
            À propos
          </a>
          <a href="#skills" onClick={handleNavClick} className={activeSection === "skills" ? "active" : ""}>
            Compétences
          </a>
          <a href="#projects" onClick={handleNavClick} className={activeSection === "projects" ? "active" : ""}>
            Projets
          </a>
          <a href="#contact" onClick={handleNavClick} className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="container grid-hero">
          <div>
            <p className="kicker">• Data Science • IA • Web</p>
            <div className="title">
              Bonjour, je suis <br />
              <span className="accent">Salma Salama</span>
            </div>

            <p className="lead">
              Étudiante en Master 2 Data Science & Big Data à la Faculté des Sciences Ben M'Sik à Casablanca. Passionnée
              par l'intelligence artificielle, le machine learning et le développement web moderne, j'aime comprendre
              les données, concevoir des modèles intelligents et créer des applications utiles et intuitives.
              <br />
              <br />
              Mon objectif : combiner la puissance des données et la créativité du développement pour transformer la
              complexité en solutions concrètes.
            </p>

            <div className="cta">
              <a className="btn" href="mailto:salamasalma946@gmail.com">
                Me contacter
              </a>
              <a
                className="btn secondary"
                href="/cv.pdf"
                download
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <FaDownload size={16} />
                Télécharger CV
              </a>
            </div>
          </div>

          <div className="card-illu" aria-hidden>
            <img src="/hero.png" alt="Étudiante en data, voilée, travaillant sur laptop" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-pro">
        <div className="container">
          <h2 className="section-title">À propos de moi</h2>
          <p className="muted">
            Passionnée par la Data Science et le Machine Learning, je transforme les données en modèles exploitables et
            en applications performantes, du traitement à la visualisation.
          </p>

          <div className="about-pro__grid">
            <article className="card about-pro__card">
              <header className="about-pro__head">
                <div className="head-row">
                  <FiTarget className="icon-xl" />
                  <h3 className="about-pro__title">Qui je suis</h3>
                </div>
                <p className="about-pro__subtitle">Calme, méthodique, curieuse</p>
              </header>

              <ul className="about-pro__list">
                <li>
                  <FiCheckCircle /> J'aime comprendre avant d'agir et garder la clarté au centre.
                </li>
                <li>
                  <FiBookOpen /> J'apprends vite, je documente et je partage des démos simples.
                </li>
                <li>
                  <FiCpu /> J'apprécie les interfaces sobres et utiles, appuyées par des modèles solides.
                </li>
              </ul>
            </article>

            <article className="card about-pro__card">
              <header className="about-pro__head">
                <div className="head-row">
                  <FiLink className="icon-xl" />
                  <h3 className="about-pro__title">Ma façon de travailler</h3>
                </div>
                <p className="about-pro__subtitle">Pragmatique, mesurée, orientée résultat</p>
              </header>

              <ol className="about-pro__steps">
                <li>
                  <strong>Analyser</strong> : comprendre les données et le besoin réel.
                </li>
                <li>
                  <strong>Modéliser</strong> : créer des solutions IA pertinentes et mesurables.
                </li>
                <li>
                  <strong>Déployer</strong> : transformer les modèles en outils concrets.
                </li>
              </ol>

              <div className="about-pro__chips">
                <span className="chip">
                  <FiUsers /> Esprit d'équipe
                </span>
                <span className="chip">
                  <FiBookOpen /> Pédagogie
                </span>
                <span className="chip">
                  <FiCheckCircle /> Autonomie
                </span>
              </div>
            </article>
          </div>

          <div className="card about-pro__now">
            <h3>Ce que je fais</h3>
            <div className="about-pro__nowgrid">
              <ul className="about-pro__mini">
                <li>
                  <FiCpu />
                  <span>
                    Conception de modèles Machine Learning et Deep Learning pour l'analyse, la classification et la
                    prédiction.
                  </span>
                </li>
                <li>
                  <FiLink />
                  <span>
                    Développement full-stack : APIs Django REST, Laravel ou Spring Boot connectées à des interfaces
                    React.
                  </span>
                </li>
              </ul>

              <ul className="about-pro__mini">
                <li>
                  <FiBookOpen />
                  <span>
                    Traitement et visualisation des données : nettoyage, transformation et création de dashboards
                    interactifs.
                  </span>
                </li>
                <li>
                  <FiCheckCircle />
                  <span>Intégration et industrialisation légère : Git, Docker, tests et documentation claire.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Compétences</h2>

          <div className="skill-cols">
            <div className="card">
              <h3 className="titreSkills">Langages de Programmations</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <SiC /> C
                </span>
                <span className="tag">
                  <SiCplusplus /> C++
                </span>
                <span className="tag">
                  <FaJava /> Java
                </span>
                <span className="tag">
                  <FaPython /> Python
                </span>
                <span className="tag">
                  <FaPhp /> Php
                </span>
                <span className="tag">
                  <SiR /> R
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Développement Web</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <FaHtml5 /> HTML
                </span>
                <span className="tag">
                  <FaCss3Alt /> CSS
                </span>
                <span className="tag">
                  <SiJavascript /> JavaScript
                </span>
                <span className="tag">
                  <FaReact /> React.js
                </span>
                <span className="tag">
                  <SiSpringboot /> Spring Boot
                </span>
                <span className="tag">
                  <FaLaravel /> Laravel
                </span>
                <span className="tag">
                  <FaJava /> JEE
                </span>
                <span className="tag">
                  <SiDjango /> Django REST
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">
                Bases de Donnée Sql , Base de Données NoSQL et Programmation de Base de Données
              </h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <SiMysql /> MySQL
                </span>
                <span className="tag">
                  <SiOracle /> Oracle
                </span>
                <span className="tag">
                  <SiPostgresql /> Postgresql
                </span>
                <span className="tag">
                  <SiMongodb /> MongoDB
                </span>
                <span className="tag">
                  <FaCogs /> PL/SQL
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Langage de Modélisation et Systèmes d'exploitation</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <FaSitemap /> UML
                </span>
                <span className="tag">
                  <SiLinux /> Linux
                </span>
                <span className="tag">
                  <FaWindows /> Windows
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Outils pour la Big Data</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <SiApachehadoop /> Hadoop
                </span>
                <span className="tag">
                  <SiScala /> Scala
                </span>
                <span className="tag">
                  <SiApachespark /> Spark
                </span>
                <span className="tag">
                  <SiApachekafka /> Kafka
                </span>
                <span className="tag">
                  <SiApachehive /> Hive
                </span>
                <span className="tag">
                  <SiApacheflink /> Flink
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Machine Learning</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <SiNumpy /> NumPy
                </span>
                <span className="tag">
                  <SiPandas /> Pandas
                </span>
                <span className="tag">
                  <SiScikitlearn /> scikit-learn
                </span>
                <span className="tag">
                  <FaChartLine /> Matplotlib
                </span>
                <span className="tag">
                  <FaChartLine /> Seaborn
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">AI et Data Science</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <FaRobot /> AI Agents
                </span>
                <span className="tag">
                  <FaBrain /> Gen AI
                </span>
                <span className="tag">
                  <SiTensorflow /> Deep Learning
                </span>
                <span className="tag">
                  <FaRobot /> NLP
                </span>
                <span className="tag">
                  <FaEye /> Computer Vision
                </span>
                <span className="tag">
                  <FaChartLine /> Data Analytics
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Gestion & Collaboration</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <FaGitAlt /> Git
                </span>
                <span className="tag">
                  <FaJira /> Jira
                </span>
                <span className="tag">
                  <SiPostman /> Postman
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">DevOps & Cloud</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <SiDocker /> Docker
                </span>
                <span className="tag">
                  <FaCloud /> Cloud
                </span>
                <span className="tag">
                  <FaCogs /> DevOps
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Architecture & Backend</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <FaCogs /> Microservices
                </span>
                <span className="tag">
                  <FaCode /> APIs REST
                </span>
                <span className="tag">
                  <FaCube /> Design Patterns
                </span>
              </div>
            </div>

            <div className="card">
              <h3 className="titreSkills">Outils & Technologies</h3>
              <div className="tags icon-tags">
                <span className="tag">
                  <FaCube /> Blockchain
                </span>
                <span className="tag">
                  <FaCode /> VS Code
                </span>
                <span className="tag">
                  <SiEclipseide /> Eclipse
                </span>
                <span className="tag">
                  <FaFileExcel /> Excel
                </span>
                <span className="tag">
                  <SiJupyter /> Jupyter
                </span>
                <span className="tag">
                  <IoLogoTableau /> Tableau
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section works">
        <div className="container">
          <h2 className="section-title">Projets</h2>

          <div className="work-grid">
            {projects.map((p) => (
              <article key={p.title} className="work" data-animate="fade-up">
                <div className="work-cover">
                  <img src={p.cover || "/placeholder.svg"} alt={`Capture du projet ${p.title}`} loading="lazy" />
                  <div className="work-badges">
                    {p.tags?.map((t) => (
                      <span key={t} className="wb">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="work-body">
                  <h3 className="work-title">{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                </div>

                <div className="work-actions">
                  {p.code && (
                    <a className="btn tiny" href={p.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                  {p.demo && (
                    <a className="btn tiny secondary" href={p.demo} target="_blank" rel="noreferrer">
                      Démo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-cards">
            <h2 className="section-title">Contact & Réseaux</h2>
            <p className="muted">Pour discuter d'un projet Data/IA ou d'une collaboration.</p>

            <div className="cards">
              <a className="card contact-card" href="mailto:salamasalma946@gmail.com">
                <div className="cc-icon">
                  <FiMail />
                </div>
                <div className="cc-body">
                  <div className="cc-title">Email</div>
                  <div className="cc-sub">salamasalma946@gmail.com</div>
                </div>
              </a>

              <a className="card contact-card" href="tel:+212621151701">
                <div className="cc-icon">
                  <FiPhone />
                </div>
                <div className="cc-body">
                  <div className="cc-title">Téléphone</div>
                  <div className="cc-sub">+212 6 21 15 17 01</div>
                </div>
              </a>

              <a
                className="card contact-card"
                href="https://www.linkedin.com/in/salma-salama-ba5b5a265"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cc-icon">
                  <FiLinkedin />
                </div>
                <div className="cc-body">
                  <div className="cc-title">LinkedIn</div>
                  <div className="cc-sub">SALMA SALAMA</div>
                </div>
              </a>

              <a className="card contact-card" href="https://github.com/SalmaSalama" target="_blank" rel="noreferrer">
                <div className="cc-icon">
                  <FiGithub />
                </div>
                <div className="cc-body">
                  <div className="cc-title">GitHub</div>
                  <div className="cc-sub">SalmaSalama</div>
                </div>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container foot">
          <nav className="foot-links">
            <a href="#home">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#skills">Compétences</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="social">
            <a href="mailto:salamasalma946@gmail.com" target="_blank" rel="noreferrer" title="Email">
              <FiMail />
            </a>
            <a
              href="https://www.linkedin.com/in/salma-salama-ba5b5a265"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="https://github.com/SalmaSalama" target="_blank" rel="noreferrer" title="GitHub">
              <FiGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094421020916&sk=followers"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FiFacebook />
            </a>
          </div>

          <div className="copy">
            © {new Date().getFullYear()} <strong>Salma Salama</strong> - Data Science & Big Data
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        id="scrollTopBtn"
        aria-label="Remonter en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </main>
  )
}
