import Link from 'next/link';
import { MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">

          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">named after women</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              mapping out women's history in berlin's streets
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/colophon"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Colophon
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Impressum & Terms of Service 🇩🇪
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rosamund Mather. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
