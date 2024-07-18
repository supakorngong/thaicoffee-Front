import Spinner from "../../../components/Spinner";
import useProduct from "../../../hook/useProduct";

export default function ProtectedRoute({ children }) {
  const { isLoading } = useProduct();
  console.log("this is loading", isLoading);

  return (
    <>
      {isLoading && <Spinner />}
      {children}
    </>
  );
}
