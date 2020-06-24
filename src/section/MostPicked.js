import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <Fade bottom>
      <section
        className="container"
        ref={props.refMostPicked}
        style={{ marginTop: "100px" }}
      >
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                key={index + 1}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">
                        {" "}
                        per {item.unit}
                      </span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-white"
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
