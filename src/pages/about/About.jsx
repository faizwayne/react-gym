import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const about = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae
        porro, laboriosam voluptatem eveniet unde quibusdam explicabo voluptate
        dolor saepe!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              autem facere porro rerum amet ipsa. Veritatis voluptatibus esse
              aliquid! Illo fugiat ratione aut odio deserunt tempore praesentium
              expedita facilis aperiam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ipsam possimus consequatur esse adipisci corporis eligendi
              nesciunt similique suscipit deleniti.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tenetur.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              autem facere porro rerum amet ipsa. Veritatis voluptatibus esse
              aliquid! Illo fugiat ratione aut odio deserunt tempore praesentium
              expedita facilis aperiam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ipsam possimus consequatur esse adipisci corporis eligendi
              nesciunt similique suscipit deleniti.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              autem facere porro rerum amet ipsa. Veritatis voluptatibus esse
              aliquid! Illo fugiat ratione aut odio deserunt tempore praesentium
              expedita facilis aperiam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ipsam possimus consequatur esse adipisci corporis eligendi
              nesciunt similique suscipit deleniti.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tenetur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
