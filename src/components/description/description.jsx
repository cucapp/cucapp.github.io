import React from "react";
import "./description.scss";

import logo from "../../assets/owlmov.svg";

const Description = () => (
  <div className="description">
    <div className="title">
      <img style={{ height: "3.6rem" }} src={logo} alt="" />
      CuCapp
    </div>
    {/* <divc className="bar" /> */}
    <div className="text">
      Ce? Unde? Când? este un joc intelectual organizat de{" "}
      <a target="_blank" rel="noopener noreferrer" href="http://cuc.md">
        Clubul Moldovenesc de Jocuri Intelectuale
      </a>
      , destinat tuturor celor pasionați de întrebări provocatoare și răspunsuri
      frumoase. Fie că joci singur sau împreună cu echipa ta, CuCapp îți permite
      să faci asta comod, direct din fața ecranului. Joacă Cu Cap!
    </div>
  </div>
);

export default Description;
