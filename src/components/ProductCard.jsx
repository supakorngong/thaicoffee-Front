import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { src, Pname, price, description } = props;

  return (
    <Link to={`/product/${Pname}`}>
      <div className="w-[200px] h-[500px] border-2 border-black flex-col overflow-clip">
        <div className="h-[250px]">
          <img src={src} className="h-full w-full object-cover"></img>
        </div>
        <div>
          <div>{Pname}</div>
          <div>{price} บาท</div>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
}
