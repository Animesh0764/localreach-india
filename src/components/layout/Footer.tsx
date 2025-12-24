import { Link } from "react-router-dom";
import { MapPin, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">
                LocalReach<span className="text-primary">India</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              India's first hyperlocal influencer marketplace. Connecting small businesses with micro & nano creators in their exact locality.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/for-businesses", label: "For Businesses" },
                { href: "/for-creators", label: "For Creators" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold text-base mb-4">Popular Cities</h4>
            <ul className="space-y-3">
              {["Mumbai", "Bengaluru", "Delhi NCR", "Hyderabad", "Pune", "Chennai"].map(
                (city) => (
                  <li key={city}>
                    <span className="text-background/70 text-sm">{city}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-base mb-4">Stay Updated</h4>
            <p className="text-background/70 text-sm mb-4">
              Get the latest updates on new features and creator opportunities.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 pl-10 pr-4 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>
              <Button className="w-full" size="default">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} LocalReach India. All rights reserved.
          </p>
          <p className="text-background/60 text-sm font-medium">
            Built by <span className="text-primary">Animesh Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
