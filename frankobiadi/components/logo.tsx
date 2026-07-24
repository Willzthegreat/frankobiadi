import Link from "next/link";
import Frank from  "@/public/Frank's.png";
import Image from "next/image"



interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`font-bold tracking-wide ${className}`}>
      <Image src={Frank} className="w-30 " alt="Frank's Logo" />
    </Link>
  );
}

