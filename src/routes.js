import { Navigate, useRoutes } from "react-router-dom";
// layouts
import Landing from "./pages/Landing";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    // {
    //   path:'performancetracking',
    //   element:<PerformanceTracking/>
    // },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
