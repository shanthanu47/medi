const AasanaCard = ({
  title,
  subtitle,
  description,
  youtubeEmmbedId,
  imgUrl,
}) => {
  return (
    <div className="aasanaMainContainer">
      <div className="aasanaContainer">
        <div className="aasanaImgContainer">
          <img src={imgUrl} alt="" />
        </div>
        <div className="aasanaTextContainer">
          <h1>{title}</h1>
          <hr />
          <p>{subtitle}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="video-responsive">
        <iframe
          width="853"
          height="400"
          src={`https://www.youtube.com/embed/${youtubeEmmbedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default AasanaCard;
