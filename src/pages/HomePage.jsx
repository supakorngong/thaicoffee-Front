import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function HomePage() {
  const { authUser, isLoading } = useAuth();
  const navigate = useNavigate();

  const suggestUser = () => {
    if (!authUser) {
      Swal.fire({
        title: "Do You Want To Explore Our Shop Without Account?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, I Do",
        denyButtonText: `No, I Do Not`,
        confirmButtonColor: "#41DC41",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/product");
        } else if (result.isDenied) {
          Swal.fire({
            title: "Do You Have Any Account?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`,
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
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://www.aromathailand.com/wp-content/uploads/2023/10/shutterstock_326070713.jpeg" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-lg">
          <h1 className="mb-5 text-5xl font-bold lg:text-[50px] lg:mb-6">Welcome</h1>
          <p className="mb-5 max-w-[300px] md:max-w-[450px] lg:max-w-[1200px] lg:text-[20px] lg:mb-8">
            We prioritize the quality of coffee beans from the best sources to ensure you experience the freshest and most intense flavors. The coffee beans we select are of the highest quality,
            carefully chosen from renowned coffee farms in Thailand, so every cup of coffee you enjoy is filled with happiness and a unique experience.
          </p>

          <button className="btn btn-primary" onClick={suggestUser}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
