import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <span className="text-2xl font-bold gradient-text">ClinicQ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your health, our priority. Advanced healthcare at your fingertips.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/reviews" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link to="/schedule" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Schedule Appointment
              </Link>
              <Link to="/ai-assistant" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                AI Health Assistant
              </Link>
              <p className="text-sm text-muted-foreground">Doctor Consultations</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ClinicQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
