import { Link } from "react-router-dom";
import { Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoLight from "@/assets/WfOS-LOGO.png";
import logoDark from "@/assets/Logo-dark.png";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();
  
  // Choose logo based on theme
  const currentLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <footer className="relative mt-24 bg-card/50 backdrop-blur-xl border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src={currentLogo}
                alt="Workforce One Information Technology (WorkforceOneIT) Logo"
                className="h-14 w-auto transition-opacity duration-300"
                width={168}
                height={56}
                decoding="async"
                loading="lazy"
              />
            </Link>
            <p className="text-muted-foreground">
              Workforce One Information Technology (WorkforceOneIT) - Empowering Businesses through Talent and Innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/proposal" className="text-muted-foreground hover:text-accent transition-colors">Proposal Development</Link></li>
              <li><Link to="/services/recruitment" className="text-muted-foreground hover:text-accent transition-colors">Cleared Recruitment</Link></li>
              <li><Link to="/services/staffing" className="text-muted-foreground hover:text-accent transition-colors">Workforce Staffing</Link></li>
              <li><Link to="/services/software" className="text-muted-foreground hover:text-accent transition-colors">Software Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">Workforce One Information Technology LLC</p>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  7901 4th St N, STE 300<br />
                  St. Petersburg, FL 33702
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-2">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a 
                  href="tel:+17037911501" 
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  +1 (703) 791-1501
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-2">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@workforceoneit.com" 
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  info@workforceoneit.com
                </a>
              </div>
            </div>
            
            <h5 className="text-sm font-semibold mt-6 mb-3 text-foreground">Follow Us</h5>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/workforce-one-it/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass/40 hover:bg-glass border border-glass-border hover:border-accent transition-all hover:scale-110"
                aria-label="Workforce One Information Technology LinkedIn"
              >
                <Linkedin size={20} className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border text-center text-muted-foreground">
          <p>&copy; 2025 Workforce One Information Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
