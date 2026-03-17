import './banner.css';
function Banner({ imageSrc, title }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt="" className="banner-image" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
