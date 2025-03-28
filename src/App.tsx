import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/my-components/header";
import { Toaster } from "@/components/ui/sonner";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="mt-4 px-6 shadow-md pt-4 pb-6 rounded-sm">
        <Outlet />
      </main>
      <Toaster duration={2000} position="top-right" />
    </div>
  );
}

export default App;
