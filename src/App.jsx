import { Route, Routes } from "react-router-dom";
import { Header, AuthForm, Footer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import { Home, Menu } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  return (
    <AnimatePresence>
      <div className="flex h-screen w-screen flex-col overflow-y-auto bg-gray text-textColor">
        <Header />
        <main className="mt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
