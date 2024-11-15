import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Book,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { footerConfig } from "@/configs/footer";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-4 mb-12 md:mb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="relative flex items-center text-3xl font-semibold">
              <Book className="w-5 h-5 mr-1" />
              YesBooks
            </div>
            <p className="text-sm">
              EcoStyle: Sustainable fashion for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company Information</h3>
            <ul className="space-y-2 text-sm">
              {footerConfig.companyInfo.map(({ label, link }) => (
                <li key={link}>
                  <Link href={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {footerConfig.customerService.map(({ label, link }) => (
                <li key={link}>
                  <Link href={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerConfig.quickLinks.map(({ label, link }) => (
                <li key={link}>
                  <Link href={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Newsletter</h3>
              <p className="text-sm">
                Suscribe to our newsletter to get latest updates
              </p>
            </div>
            <form>
              <div className="flex items-center border rounded-md py-0.5 px-1 bg-white">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 border-none rounded-none shadow-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  size="sm"
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />{" "}
                {footerConfig.contactInfo.phone}
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />{" "}
                {footerConfig.contactInfo.email}
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />{" "}
                {footerConfig.contactInfo.address}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Download Our App</h3>
            <div className="flex space-x-2">
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="h-full"
                  src="/images/app-store.png"
                  alt="App Store"
                  loading="lazy"
                  width={120}
                  height={40}
                />
              </a>
              <a
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="h-full"
                  src="/images/play-store.png"
                  alt="Google Play"
                  loading="lazy"
                  width={120}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              {footerConfig.paymentMethods.map(({ src, alt }) => (
                <Image
                  loading="lazy"
                  key={alt}
                  src={src}
                  alt={alt}
                  height={30}
                  width={50}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="text-sm">
              <Select>
                {footerConfig.languages.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>
            <div className="text-sm">
              <Select>
                {footerConfig.currencies.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex justify-start lg:justify-end space-x-4">
              <Image
                src="/images/letsencrypt.png"
                alt="Let's Encrypt"
                loading="lazy"
                height={80}
                width={80}
              />
              <Image
                src="/images/pci-dss-compliant.png"
                alt="PCI Compliant"
                loading="lazy"
                height={80}
                width={130}
              />
            </div>
          </div>
          <div className="text-sm text-center md:text-left">
            <p>&copy; 2024 Code&Canvas Studio. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mt-2">
              {footerConfig.footerLinks.map(({ label, link }) => (
                <li key={link}>
                  <Link href={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
