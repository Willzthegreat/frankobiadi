interface LogoProps {
  style?: string;
}

const Logo = ({ style = "" }: LogoProps) => {
  return (
    <h1 className={style}>
      FRANK OBIADI
    </h1>
  );
};

export default Logo;