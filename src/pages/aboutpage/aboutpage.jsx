import React from "react";
import "./aboutpage.scss";
import logo from "../../assets/owlmov.svg";

const AboutPage = () => (
  <div className="aboutpage">
    <div className="info">
      <div className="title">Despre proiect</div>
      <div className="descriere">
        CuCapp a fost creat pentru a familiariza oamenii cu frumusețea jocurilor
        intelectuale, și, de asemenea, pentru a face antrenamentul mai ușor
        pentru echipe, în special pe timp de carantină. Prin intermediul acestui
        site dorim să susținem activitatea CMJI chiar și în afara evenimentelor
        organizate.
        <div className="br" />
        Acest proiect a fost elaborat din propria inițiativă de către jucătorii
        echipei Jean-Jacques Pidjaques, Claudiu Babin și Mihail Lavric. Mulțumim
        în special Clubului Moldovenesc de Jocuri Intelectuale pentru
        organizarea jocurilor, crearea întrebărilor, publicarea lor pe site-ul{" "}
        <a target="_blank" rel="noopener noreferrer" href="http://cuc.md">
          cuc.md
        </a>{" "}
        și testarea proiectului. În cazul în care aveți sugestii sau reclamații,
        nu ezitați să ne contactați pe Facebook:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/mihail.lavric.1"
        >
          Mihail
        </a>
        {", "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/claudebbn"
        >
          Claudiu
        </a>
        .
        <div className="br" />
        La moment, site-ul este în versiune beta – din păcate, întrebările cu
        material distributiv nu sunt disponibile. De asemenea, folosim un
        hosting gratuit și din această cauză, vă îndemnăm să nu faceți refresh
        la pagină.
        <div className="br" />
        Dacă doriți să susțineți financiar proiectul, o puteți face chiar aici:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.paypal.me/cucapp"
        >
          https://www.paypal.me/cucapp
        </a>
        <div className="br" />
        Vă urăm un joc plăcut!
      </div>
    </div>

    <div className="logo">
      <img src={logo} alt="" />
    </div>
  </div>
);

export default AboutPage;
