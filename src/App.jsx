import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, AuthForm, Footer } from "./components";
import { Home, Menu, About } from "./pages";

function App() {
  return (
    <AnimatePresence>
      <div className="flex h-screen w-screen flex-col overflow-y-auto bg-gray text-textColor">
        <Header />
        <main className="mt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
