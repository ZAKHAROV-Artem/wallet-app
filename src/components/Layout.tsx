import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen p-3">
      <Outlet />
    </div>
  );
}
