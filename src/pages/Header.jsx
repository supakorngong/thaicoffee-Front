import { Link } from "react-router-dom";
import { CartIcon, HistoryIcon, ProfileIcon } from "../icons";
import useAuth from "../hook/useAuth";

export default function Header() {
  const { authUser, logout } = useAuth();
  return (
    <div className="navbar bg-[#5d4133] px-40">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          {authUser && (
            <Link to="/profile">
              <div className="btn btn-ghost btn-circle avatar flex w-60">
                <ProfileIcon role="button" />
                <h1 className="text-white">
                  welcome back {authUser?.user.firstName} {authUser.user.lastName} !!!
                </h1>
              </div>
            </Link>
          )}

          <div>
            <button className="text-white">
              {authUser ? (
                <Link to="/" onClick={logout} className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                  logout
                </Link>
              ) : (
                <Link to="/login" className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
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
      <div className="flex-none">
        <div className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Link to="/cart">
              <CartIcon />
            </Link>
          </div>
        </div>
        <div className="btn btn-ghost btn-circle avatar">
          <div>
            <Link to="/orderhistory">
              <HistoryIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
