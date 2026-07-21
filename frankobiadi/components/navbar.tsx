// "use client"

// import Link from "next/link";
// import { useState } from "react";



// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState();
//   const [closeMenu, setCloseMenu] = useState();


//   useEffect(() => {
//     if (openMenu) {
//       setOpenMenu(false);
//     } else {
//       setCloseMenu(true);
//     }
//   })



//   return (
//     <nav className="flex items-center justify-between px-6 py-4">
//       {/* Logo */}
//       <Link href="/" className="text-lg font-bold">
//         FRANK OBIADI
//       </Link>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex gap-6 text-sm font-medium">
//         <li>
//           <Link href="/about" className="transition-colors hover:text-gray-500">
//             ABOUT
//           </Link>
//         </li>
//         <li>
//           <Link href="/works" className="transition-colors hover:text-gray-500">
//             WORKS
//           </Link>
//         </li>
//         <li>
//           <Link href="/company" className="transition-colors hover:text-gray-500">
//             COMPANY
//           </Link>
//         </li>
//         <li>
//           <Link href="/philosophy" className="transition-colors hover:text-gray-500">
//             PHILOSOPHY
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className="transition-colors hover:text-gray-500">
//             CONTACT
//           </Link>
//         </li>
//       </ul>

//       {/* Mobile Menu */}
//       <button className="md:hidden">
//         <i className="bx bx-menu text-3xl hover:cursor-pointer"></i>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;








"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          FRANK OBIADI
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-gray-500"
            >
              ABOUT
            </Link>
          </li>

          <li>
            <Link
              href="/works"
              className="transition-colors hover:text-gray-500"
            >
              WORKS
            </Link>
          </li>

          <li>
            <Link
              href="/company"
              className="transition-colors hover:text-gray-500"
            >
              COMPANY
            </Link>
          </li>

          <li>
            <Link
              href="/philosophy"
              className="transition-colors hover:text-gray-500"
            >
              PHILOSOPHY
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition-colors hover:text-gray-500"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl hover:cursor-pointer"
          aria-label="Toggle Menu"
        >
          <i className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-6 px-6 py-6 text-sm font-medium">
            <li>
              <Link href="/about" onClick={closeMenu}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link href="/works" onClick={closeMenu}>
                WORKS
              </Link>
            </li>

            <li>
              <Link href="/company" onClick={closeMenu}>
                COMPANY
              </Link>
            </li>

            <li>
              <Link href="/philosophy" onClick={closeMenu}>
                PHILOSOPHY
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;