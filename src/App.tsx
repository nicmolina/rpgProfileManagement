import React from "react";
import AuthProvider, { AuthContext } from "./contexts/auth";
import ThemeProvider, { ThemeContext } from "./contexts/theme";
import { useRouter } from "./hooks/useRouter";
import { Helmet } from "react-helmet";
import Routes from "./routes";

function App({}) {
  const protectedRoutes = React.useMemo(() => ["/home"], []);
  const router = useRouter();

  return (
    <ThemeProvider>
      <AuthProvider>
        <ThemeContext.Consumer
          children={(themeContext) => (
            <AuthContext.Consumer
              children={(authContext) => {
                const isAuthenticated = authContext.isAuthenticated();

                if (
                  !isAuthenticated &&
                  protectedRoutes.includes(router.pathname)
                ) {
                  console.warn(
                    "User not authenticated. Redirecting to login page..."
                  );
                  router.push("/login");
                } else if (
                  isAuthenticated &&
                  !["/login", ...protectedRoutes].find(
                    (route) => router.pathname === route
                  )
                ) {
                  router.push("/home");
                }

                return (
                  <>
                    <Helmet>
                      <link rel="preconnect" href="https://fonts.gstatic.com" />
                      <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
                        rel="stylesheet"
                      />
                    </Helmet>
                    <Routes />
                  </>
                );
              }}
            />
          )}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
