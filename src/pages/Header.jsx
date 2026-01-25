import { Link } from "react-router-dom";
import { CartIcon, HistoryIcon, ProfileIcon } from "../icons";
import useAuth from "../hook/useAuth";

export default function Header() {
  const { authUser, logout } = useAuth();
  return (
    <div className="navbar bg-[#5d4133] w-screen text-[14px] px-5 flex gap-7 md:px-20 md:text-[16px] lg:text-[20px] lg:px-40">
      <div className="flex-1">
        <div className="flex items-center gap-1 md:gap-3">
          {authUser && (
            <Link to="/profile">
              <div className="btn btn-ghost btn-circle avatar flex w-[220px] md:w-[300px]">
                <ProfileIcon role="button" />
                <h1 className="text-white text-[14px] md:text-[18px]">
                  welcome back {authUser?.user.firstName} {authUser.user.lastName} !!!
                </h1>
              </div>
            </Link>
          )}

          <div>
            <button className="text-white text-[14px] md:text-[20px]">
              {authUser ? (
                <Link to="/" onClick={logout} className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                  logout
                </Link>
              ) : (
                <Link to="/login" className="hover:bg-custom-yellow hover:rounded-md hover:p-2  ">
                  login
                </Link>
              )}
            </button>
          </div>
          <div>
            {!authUser && (
              <button className="text-white">
                <Link to="/register" className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                  register
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex-none gap-1 md:gap-4
    ${authUser ? "cursor-pointer" : "cursor-not-allowed opacity-50 pointer-events-none"}
  `}
      >
        <div className="btn btn-ghost btn-circle w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]">
          <div className="indicator">
            {authUser ? (
              <Link to="/cart">
                <CartIcon />
              </Link>
            ) : (
              <CartIcon />
            )}
          </div>
        </div>

        <div className="btn btn-ghost btn-circle avatar">
          <div>
            {authUser ? (
              <Link to="/orderhistory">
                <HistoryIcon />
              </Link>
            ) : (
              <HistoryIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
