"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "szolgaltatasok", label: "Szolgáltatások", href: "#szolgaltatasok" },
  { id: "tervezoknek", label: "Tervezőknek", href: "#tervezoknek" },
  { id: "rolunk", label: "Rólunk", href: "#rolunk" },
  { id: "kapcsolat", label: "Kapcsolat", href: "#kapcsolat" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.5;

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerLine) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="header">
      <a className="brand" href="#fooldal">
        <img src="/marlen-atelier/logo.png" alt="MARLEN Atelier logó" />
        <div>
          <span>MARLEN</span>
          <small>ATELIER</small>
        </div>
      </a>

      <nav className="nav" aria-label="Fő navigáció">
        <div className="navPill">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "isActive" : ""}
            >
              {item.label}
            </a>
          ))}

          <a href="#ajanlatkeres" className="navCta">
            Ajánlatkérés
          </a>
        </div>
      </nav>
    </header>
  );
}
