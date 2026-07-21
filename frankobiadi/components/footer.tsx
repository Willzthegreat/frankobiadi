import Image from "next/image";
import Link from "next/link";

import Frank from "@/public/frankobiadi.png";
import LogoX from "@/public/X_logo_2023.png";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-12">
        <div className="flex flex-col items-center gap-8">
          {/* Top */}
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Logo style="text-white" />
            </Link>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/frankobiadi?igsh=djI2bHcyZWpyMXU%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bx bxl-instagram text-2xl hover:text-gray-400 transition-colors"></i>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/frank-obiadi-5290a417b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin-square text-2xl hover:text-gray-400 transition-colors"></i>
                </Link>

                <Link
                  href="https://x.com/Frankobiadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <Image
                    src={LogoX}
                    alt="X"
                    width={20}
                    height={20}
                    className="hover:opacity-70 transition-opacity"
                  />
                </Link>

                <Link href="https://www.facebook.com/share/1MZ5uXR4uD/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook">
                  <i className="bx bxl-facebook-circle text-2xl hover:text-gray-400 transition-colors"></i>
                </Link>
              </div>

              <p className="text-sm tracking-wider">
                HELLO@FRANKOBIADI.COM
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-center w-full">
            <Image
              src={Frank}
              alt="Frank Obiadi"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;