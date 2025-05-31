// src/routes/_authenticated.tsx
import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

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
  return (
    <div>
      <Outlet />
    </div>
  );
}
