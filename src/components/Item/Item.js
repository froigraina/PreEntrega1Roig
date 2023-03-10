import "./Item.css";


const Item = ({ data }) => {

  
  return (
    <div className="item">
      <div className="item-img">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="item-content">
        <h1>{data.name}</h1>
      </div>
      <div className="item-atributes">
        <div className="item-atribute">
          <p>{`Size: ${data.size}`}</p>
        </div>
        <div className="item-atribute">
          <p>{`$${data.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
