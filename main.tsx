import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./components/react/home-page";
import ClientsPage from "./components/react/clients-page";
import ContactPage from "./components/react/contact-page";
import TeamPage from "./components/react/team-page";
import RecruitmentPage from "./components/react/recruitment-page";
import { SiteFooter } from "./components/react/site-footer";
import { SiteNav } from "./components/react/site-nav";

const routes: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/index.html": HomePage,
  "/clients": ClientsPage,
  "/contact-us": ContactPage,
  "/our-team": TeamPage,
  "/recruitment": RecruitmentPage,
};

function App() {
  const Page = routes[window.location.pathname] ?? HomePage;

  return (
    <>
      <SiteNav />
      <Page />
      <SiteFooter />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
