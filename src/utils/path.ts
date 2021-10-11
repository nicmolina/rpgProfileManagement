import Home from "../pages/home/home";

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Routes: RouteProps[] = [
  {
    path: "/home",
    component: Home,
  },
];

export default Routes;