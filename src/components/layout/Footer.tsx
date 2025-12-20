import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { href: "/courses", label: "کۆرسەکان" },
      { href: "/tools", label: "ئامرازەکان" },
      { href: "/services", label: "خزمەتگوزاریەکان" },
      { href: "/pricing", label: "نرخەکان" },
    ],
    company: [
      { href: "/about", label: "دەربارەمان" },
      { href: "/contact", label: "پەیوەندی" },
      { href: "/careers", label: "کارکردن لەگەڵمان" },
      { href: "/blog", label: "بڵاوکراوەکان" },
    ],
    support: [
      { href: "/help", label: "یارمەتی" },
      { href: "/faq", label: "پرسیارە باوەکان" },
      { href: "/terms", label: "مەرجەکان" },
      { href: "/privacy", label: "تایبەتمەندی" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فەیسبووک" },
    { icon: Instagram, href: "#", label: "ئینستاگرام" },
    { icon: Twitter, href: "#", label: "تویتەر" },
    { icon: Youtube, href: "#", label: "یوتیوب" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">د</span>
              </div>
              <span className="text-2xl font-bold">دیجیتاڵ ستۆر</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              ئێمە باشترین بەرهەمە دیجیتاڵیەکان دابین دەکەین بۆ فێربوون و گەشەپێدان. لەگەڵمان فێربە و پیشەسازی ببە.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg mb-4">بەرهەمەکان</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">کۆمپانیا</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">پشتگیری</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70">
            <a href="mailto:info@digitalstore.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@digitalstore.com</span>
            </a>
            <a href="tel:+9647501234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span dir="ltr">+964 750 123 4567</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>هەولێر، کوردستان</span>
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
          <p>© {currentYear} دیجیتاڵ ستۆر. هەموو مافەکان پارێزراون.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
