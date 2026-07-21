interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <h1 className={`font-bold tracking-wide ${className}`}>
      FRANK OBIADI
    </h1>
  );
}