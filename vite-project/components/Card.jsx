export default function Card(props) {
  console.log(props);
  return (
    <div className="kortti">
      <img
        src={`../images/${props.img}`}
        alt="Katie Zaferes"
        className="kortti--kuva"
      />
      <div className="kortti--statistiikka">
        <img src="../images/star.png" alt="star" className="kortti--tahti" />
        <span>{props.rating}</span>
        <span className="harmaa">({props.reviewCount}) *</span>
        <span className="harmaa">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="lihava">Alkaen {props.price}€</span> / henkilö
      </p>
    </div>
  );
}
