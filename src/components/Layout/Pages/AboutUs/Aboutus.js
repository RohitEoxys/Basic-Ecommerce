import React from "react";

import "./Aboutus.scss";
const Aboutus = () => {
  return (
    <div className="main_container-aboutus">
      <div className="main_container_aboutus-title">
        <h1>About Our E-commerce</h1>
      </div>
      <div className="about-box">
        <img
          src={require("../../../Assets/Aboutus/background.jpg")}
          alt="aboutUS"
        />
        <div className="about-box-inner-heading">
          <h1>We care about our customers?</h1>\
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, ut!
            Quia laborum, voluptas pariatur dolore eaque ipsum. Laboriosam
            fugiat iure necessitatibus distinctio perspiciatis rerum earum ullam
            error voluptas inventore eligendi praesentium impedit repellendus
            nemo eveniet voluptate, incidunt sequi eos nobis nihil iste
            obcaecati vero qui libero! Minima soluta debitis in adipisci nisi
            deserunt obcaecati, velit minus cupiditate doloremque, cumque sequi
            deleniti. Nesciunt repellendus quis doloremque provident, expedita
            officiis commodi explicabo ut molestiae totam sint at voluptatem
            deleniti atque eligendi nisi voluptatum cupiditate non assumenda
            iste odio minus? Quos dolore ipsum harum. Illum fuga minus officiis
            dolores aperiam, culpa repellendus doloremque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
