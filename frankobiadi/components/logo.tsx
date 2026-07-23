import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`font-bold tracking-wide ${className}`}>
      FRANK OBIADI
    </Link>
  );
}

