import { Link } from "react-router-dom";
import Dropdown from "../layout/Dropdown";

export default function Section() {
  return (
    <div>
      <div className="text-5xl">Thai Seed Coffee</div>
      <div className="flex w-full justify-center pb-10">
        <Link to="/">home</Link>
        <Dropdown />
        {/* <Link to="/product">product</Link> */}
      </div>
    </div>
  );
}
