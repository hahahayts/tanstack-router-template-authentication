// app.tsx

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./context/AuthContext";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const authentication = useAuth();

  return (
    <RouterProvider
      router={router}
      context={{ authentication: authentication }}
    />
  );
};

export default App;
