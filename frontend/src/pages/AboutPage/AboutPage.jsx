import { useState } from 'react';
import Collapse from "../../components/collapse/Collapse"; 
import Banner from "../../components/banner/Banner";
import aboutBanner from "../../assets/image-banner-about.png";
import './aboutpage.css';  

function AboutPage() {
  const collapses = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "La qualité du service est au cœur de notre egagement chez Kasa. Nous veillons à ce que chaque interation, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance" },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ];

  return (
    <main>
      <Banner imageSrc={aboutBanner} />
      <section className="about-collapses">
        {collapses.map((collapse, index) => (
          <Collapse key={index} title={collapse.title} content={collapse.content} />
        ))}
      </section>
    </main>
  );
}

export default AboutPage;
