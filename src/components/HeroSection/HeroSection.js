import NavBar from "../NavBar/NavBar";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="container">
        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <NavBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
