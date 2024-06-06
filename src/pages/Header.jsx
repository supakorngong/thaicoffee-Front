import { CartIcon, HistoryIcon, ProfileIcon } from "../icons";

export default function Header() {
  return (
    // <div className="navbar bg-yellow-500">
    //   <div className="flex-1">
    //     <ProfileIcon role="button" />
    //   </div>
    //   <div className="flex-none">
    //     <div className="dropdown dropdown-end">
    //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    //         <div className="indicator">
    //           <CartIcon />
    //           <span className="badge badge-sm indicator-item">8</span>
    //         </div>
    //       </div>
    //       <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
    //         <div className="card-body">
    //           <span className="font-bold text-lg">8 Items</span>
    //           <span className="text-info">Subtotal: $999</span>
    //           <div className="card-actions">
    //             <button className="btn btn-primary btn-block">View cart</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="dropdown dropdown-end">
    //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    //         <div className="w-10 rounded-full">
    //           <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //         </div>
    //       </div>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //         <li>
    //           <a className="justify-between">
    //             Profile
    //             <span className="badge">New</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a>Settings</a>
    //         </li>
    //         <li>
    //           <a>Logout</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="navbar bg-yellow-500">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="btn btn-ghost btn-circle avatar">
            <ProfileIcon role="button" />
          </div>
          <div>
            <button className="text-black">login</button>
          </div>
          <div>
            <button className="text-black">register</button>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="btn btn-ghost btn-circle">
          <div className="indicator">
            <CartIcon />
            {/* <span className="badge badge-sm indicator-item">8</span> */}
          </div>
        </div>
        <div className="btn btn-ghost btn-circle avatar">
          <div>
            <HistoryIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
