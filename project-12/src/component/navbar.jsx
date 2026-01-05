import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

export default function NavbarDemo() {
  const navItems = [
    { name: "Surveillance", link: "#" },
    { name: "Detection", link: "#" },
    { name: "Pricing", link: "#" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="gradient">Secure Brand</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-oswald font-light text-white hover:text-sentinel-accent1 uppercase tracking-wider">
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-6 border-t border-white/10">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full py-5">Login</NavbarButton>
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="gradient" className="w-full py-5">Secure Brand</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
