import React from "react";

import "./Contactus.scss";
import ContactForm from "../Contactus/ContactForm";
import Card from "../../../UI/Card";

const Contactus = () => {
  return (
    <Card>
      <div className="contact-container">
        <h1>Contact us</h1>
        <ContactForm />
      </div>
    </Card>
  );
};

export default Contactus;
