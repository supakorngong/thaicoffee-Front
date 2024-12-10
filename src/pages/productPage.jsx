import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import useProduct from "../hook/useProduct";

export default function ProductPage() {
  const { product, show, isLoading } = useProduct();

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex justify-center w-screen">
      <div className="flex md:w-4/5 p-5 flex-wrap gap-10  justify-center">
        {show?.length > 0
          ? show?.map((el) => <ProductCard key={el.id} Pname={el.name} price={el.cost} src={el.picture} description={el.description} />)
          : product?.map((el) => <ProductCard key={el.id} Pname={el.name} price={el.cost} src={el.picture} description={el.description} />)}
      </div>
    </div>
  );
}
