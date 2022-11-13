import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-8">
        <Outlet />
      </div>
    </>
  );
}
