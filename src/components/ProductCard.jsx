import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { src, Pname, price, description } = props;

  return (
    <Link to={`/product/${Pname}`}>
      <div className="w-[500px] h-[500px] p-4 rounded-md bg-white flex flex-col overflow-clip hover:border-none hover:shadow-2xl hover:scale-110 hover:bg-[#5d4133]">
        <div className="h-[250px]">
          <img src={src} className="h-[250px] w-full object-cover rounded-b-lg"></img>
        </div>
        <div className="h-[250px] mt-10">
          <div className="text-center">{Pname}</div>
          <div>ราคา : {price} บาท</div>
          <div>
            <p>เกี่ยวกับสินค้า :</p>
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
}
