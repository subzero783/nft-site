import AriesLogo from "../../imgs/logos/aries-logo.png";
import "./LogoOne.scss";

const LogoOne = () => {
  return (
    <div className="logo-one">
      <img
        className="logo-one-img"
        src={AriesLogo}
        alt="Aries logo"
      />
    </div>
  );
};

export default LogoOne;
