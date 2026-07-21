import Image from "next/image";
import Link from "next/link";

import Frank from "@/public/frankobiadi.png";
import LogoX from "@/public/X_logo_2023.png";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-12">
        <div className="flex flex-col gap-10">

          {/* Top */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Logo */}
            <Link href="/" className="flex justify-center lg:justify-start">
              <Logo className="text-white w-8 h-auto" />
            </Link>

            {/* Right Side */}
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">

              {/* Social Icons */}
              <div className="flex items-center gap-5">

                <Link
                  href="https://www.instagram.com/frankobiadi?igsh=djI2bHcyZWpyMXU%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bx bxl-instagram text-2xl transition hover:text-gray-400"></i>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/frank-obiadi-5290a417b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin-square text-2xl transition hover:text-gray-400"></i>
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
                    className="transition hover:opacity-70"
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/share/1MZ5uXR4uD/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bx bxl-facebook-circle text-2xl transition hover:text-gray-400"></i>
                </Link>

              </div>

              {/* Email */}
              <Link
                href="mailto:hello@frankobiadi.com"
                className="text-center text-sm tracking-wider break-all hover:text-gray-400 transition"
              >
                HELLO@FRANKOBIADI.COM
              </Link>

            </div>
          </div>

          {/* Bottom Image */}
          <div className="flex justify-center">
            <Image
              src={Frank}
              alt="Frank Obiadi"
              priority
              className="w-full  sm:m h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;