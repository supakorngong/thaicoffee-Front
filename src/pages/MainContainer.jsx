import { Outlet } from "react-router-dom";
import Section from "./section";
import Header from "./Header";

export default function MainContainer() {
  return (
    <>
      <Header />
      <Section />
      <Outlet />
    </>
  );
}
