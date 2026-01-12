import Spinner from "../../../components/Spinner";
import useProduct from "../../../hook/useProduct";

export default function ProtectedRoute({ children }) {
  const { isLoading } = useProduct();

  return (
    <>
      {isLoading && <Spinner />}
      {children}
    </>
  );
}
