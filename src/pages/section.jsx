import { Link } from "react-router-dom";
import Dropdown from "../layout/Dropdown";

export default function Section() {
  return (
    <div>
      <Link to="/">
        <div className="flex flex-col text-5xl py-6 items-center justify-center text-[#1a120f]">
          <div>Thai</div>
          <div>SeedCoffee</div>
        </div>
      </Link>
      <div className="flex w-full justify-center pb-10 text-black md:text-[20px] lg:text-[22px]">
        <Link to="/" className="px-3 hover:border-2 border-b-black ">
          home
        </Link>

        <Dropdown />
      </div>
    </div>
  );
}
