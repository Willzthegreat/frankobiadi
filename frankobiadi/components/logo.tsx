interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <h1
      className={`font-bold tracking-wide ${className}`}
    >
      FRANK OBIADI
    </h1>
  );
};

export default Logo;