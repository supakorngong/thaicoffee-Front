import ProductCard from "../components/ProductCard";
import useProduct from "../hook/useProduct";

export default function ProductPage() {
  const { product, show } = useProduct();

  return (
    <div className="flex justify-center">
      <div className="flex w-4/5 p-5 flex-wrap gap-4">
        {show?.length > 0
          ? show?.map((el) => <ProductCard key={el.id} Pname={el.name} price={el.cost} src={el.picture} description={el.description} />)
          : product?.map((el) => <ProductCard key={el.id} Pname={el.name} price={el.cost} src={el.picture} description={el.description} />)}
      </div>
    </div>
  );
}
