import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="crd text-center bg-dark animate__animated animate__fadeInUp bak">
      <div className="overflow"><br/>
        <img src={imageSource} alt="a wallpaper" className="crd-img-top" />
      </div>
      <div className="crd-body text-light">
        <h4 className="crd-title">{title}</h4>
        <p className="crd-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="tn"
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;