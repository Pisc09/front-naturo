import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function PageLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profil");

  return (
    <div className="flex min-h-screen flex-col">
      {!hideLayout && (
        <header className="fixed inset-x-0 z-50">
          <Header />
        </header>
      )}

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {!hideLayout && (
        <footer className="">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default PageLayout;
