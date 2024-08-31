import React from "react";
import Card from "./Card";
import "./Blog.css"
import image1 from "./apt.jpg";
import image2 from './CA.jpg'
import image3 from './CE.jpg'

const cards = [
  {
    id: 1,
    title: "Skin Care",
    image: image1,
    url: "/details",
    text:"Healthy, glowing skin starts with understanding your unique skin type. Knowing your skin type allows you to choose the right products, create an effective skincare routine, and address specific concerns. Whether your skin is oily, dry, combination, sensitive, or normal, each type of care for each one has its own set of characteristics and needs. ",
  },
  {
    id: 2,
    title: "Skin Care",
    image: image2,
    url: "/details",
    text:"Healthy, glowing skin starts with understanding your unique skin type. Knowing your skin type allows you to choose the right products, create an effective skincare routine, and address specific concerns. Whether your skin is oily, dry, combination, sensitive, or normal, each type of care for each one has its own set of characteristics and needs. ",

  },
  {
    id: 3,
    title: "Skin Care",
    image: image3,
    url: "/details",
    text:"Healthy, glowing skin starts with understanding your unique skin type. Knowing your skin type allows you to choose the right products, create an effective skincare routine, and address specific concerns. Whether your skin is oily, dry, combination, sensitive, or normal, each type of care for each one has its own set of characteristics and needs. ",

  },
];

function Blogs() {
  return (
    <div className="conainer d-flex justify-content-center align-items-center h-100">
      <br/>
      <div className="rw">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
      <div className="rw">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url}/>
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
}

export default Blogs;
