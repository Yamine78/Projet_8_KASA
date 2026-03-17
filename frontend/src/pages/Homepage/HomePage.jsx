import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import Banner from "../../components/banner/Banner";
import homeBanner from "../../assets/image-banner-home.png";

function HomePage() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((res) => res.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <div>
     
      <div>
        <Banner imageSrc={homeBanner} title="Chez vous, partout et ailleurs" />
      </div>

      <section className="home-gallery">
        {logements.map((logement) => (
          <Link
            key={logement.id}
            to={`/accommodation/${logement.id}`}
            className="logement-link"
          >
            <article className="logement-card">
              <img src={logement.cover} alt={logement.title} />
              <h3>{logement.title}</h3>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
