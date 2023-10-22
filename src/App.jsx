import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, AuthForm, Footer, ScrollToTop } from "./components";
import { Home, Menu, About, Blog } from "./pages";

function App() {
  return (
    <AnimatePresence>
      <div className="flex flex-col bg-gray text-textColor">
        <ScrollToTop />
        <Header />
        <main className="mt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
