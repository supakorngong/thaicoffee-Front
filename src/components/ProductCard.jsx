import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { src, Pname, price, description } = props;

  return (
    <Link to={`/product/${Pname}`}>
      <div className="w-[200px] h-[500px] p-4 rounded-md bg-white flex-col  overflow-clip hover:border-none hover:shadow-2xl hover:scale-110 hover:bg-[#5d4133]">
        <div className="h-[250px]">
          <img src={src} className="h-full w-full object-cover rounded-b-lg"></img>
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
