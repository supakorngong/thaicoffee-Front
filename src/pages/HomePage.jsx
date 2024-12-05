import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const suggestUser = () => {
    if (!authUser) {
      Swal.fire({
        title: "do you want to explore our shop without account?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "yes",
        denyButtonText: `no`,
        confirmButtonColor: "#41DC41",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/product");
        } else if (result.isDenied) {
          Swal.fire({
            title: "do you have any account?",
            showDenyButton: true,
            confirmButtonText: "yes",
            denyButtonText: `no`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              navigate("/login");
            } else if (result.isDenied) {
              navigate("/register");
            }
          });
        }
      });
    } else {
      navigate("/product");
    }
  };
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://www.aromathailand.com/wp-content/uploads/2023/10/shutterstock_326070713.jpeg" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

          <button className="btn btn-primary" onClick={suggestUser}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
