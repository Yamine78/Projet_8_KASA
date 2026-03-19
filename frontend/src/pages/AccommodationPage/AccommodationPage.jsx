import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from "../../components/collapse/Collapse";
import starActive from "../../assets/star-active.png";
import starNoActive from "../../assets/star-no-active.png";
import arrowLeftCarrousel from "../../assets/arrow-left-carrousel.png";
import arrowRightCarrousel from "../../assets/arrow-right-carrousel.png";
import "./accommodationpage.css";

function AccommodationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === id);
        setLogement(found || null);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <main>Chargement...</main>;
  }

  if (!logement) {
    navigate('/errorpage');
    return null;
  }

  const nextImage = () => setCurrentImage((prev) =>
    prev === logement.pictures.length - 1 ? 0 : prev + 1
  );

  const prevImage = () => setCurrentImage((prev) =>
    prev === 0 ? logement.pictures.length - 1 : prev - 1
  );

  const rating = Number(logement.rating);

  return (
    <main className="accommodation-main">
      {/* CARROUSEL */}
    <section className="slider-section">
  <img
    src={logement.pictures[currentImage]}
    alt={logement.title}
    className="slider-image"
  />

  {logement.pictures.length > 1 && (
    <>
      <button className="slider-prev" onClick={prevImage}>
        <img
          src={arrowLeftCarrousel}
          alt="Précédent"
          className="carousel-arrow-img"
        />
      </button>
      <button className="slider-next" onClick={nextImage}>
        <img
          src={arrowRightCarrousel}
          alt="Suivant"
          className="carousel-arrow-img"
        />
      </button>
      <p className="slider-count">
        {currentImage + 1}/{logement.pictures.length}
      </p>
    </>
  )}
</section>

      {/* HEADER */}
      <section className="info-section">
        <div className="info-left">
          <h1 className="title">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="info-right">
          {/* HOST */}
          <div className="host">
            <div className="host-info">
              <p className="host-firstname">{logement.host.name.split(' ')[0]}</p>
              <p className="host-lastname">{logement.host.name.split(' ').slice(1).join(' ')}</p>
            </div>
            <div className="host-picture-wrapper">
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>
          </div>

          {/* ÉTOILES PNG */}
          <div className="rating-stars">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={i < rating ? starActive : starNoActive}
                alt={`${i + 1} étoile`}
                className="rating-star"
              />
            ))}
          </div>
        </div>
      </section>

      {/* les COLLAPSES */}
      <section className="collapses-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="equipments-list">
              {logement.equipments.map((equip, i) => (
                <li key={i}>{equip}</li>
              ))}
            </ul>
          }
        />
      </section>
    </main>
  );
}

export default AccommodationPage;
