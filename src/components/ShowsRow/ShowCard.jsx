function ShowCard(props) {
  const handleClick = () => {
    props.setSelectedCard(props.contentData);
    console.log(props.contentData);
    props.setShowModal(true);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          onClick={handleClick}
          className="card-img"
          loading="lazy"
          src={props.contentData.img_url}
          alt={props.contentData.title}
        />
      </div>
    </div>
  );
}

export default ShowCard;
