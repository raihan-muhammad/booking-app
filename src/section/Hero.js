import React from "react";
import Fade from "react-reveal/Fade";
import ImgHero from "assets/images/img-hero.jpg";
import ImgHeroFrame from "assets/images/frame.png";
import Button from "elements/Button";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade right>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold" style={{ marginTop: -70 }}>
              Forget Busy Work <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>

            <Button
              isPrimary
              className="btn px-5"
              hasShadow
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImgHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  width: 520,
                  height: 410,
                }}
              />
              <img
                src={ImgHeroFrame}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
