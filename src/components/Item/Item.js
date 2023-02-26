import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="item">
      <div className="item-img">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="item-content">
        <h1>{data.name}</h1>
        <p>{data.status}</p>
      </div>
      <div className="item-atributes">
        <div className="item-atribute">
          <p>{`Gender: ${data.gender}`}</p>
        </div>
        <div className="item-atribute">
          <p>{`Specie: ${data.species}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
