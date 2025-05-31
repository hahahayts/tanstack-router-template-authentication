// src/routes/_authenticated.tsx
import { logoutUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  createFileRoute,
  redirect,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.authentication;

    if (!isAuthenticated) {
      throw redirect({
        to: "/auth/login",
      });
    }
  },
});

function AuthenticatedLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logoutUser();
    logout();
    navigate({
      to: "/auth/login",
      replace: true,
    });
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <Outlet />
    </div>
  );
}
