import { useAuth } from "@/context/AuthContext";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuth();
  return <div>Hello {user?.username}</div>;
}
