import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer, AuthForm } from "./components";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";

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
      <div className="flex h-screen w-screen  flex-col overflow-y-auto bg-gray text-textColor">
        <Header />
        <main className="mt-[60px]">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/login" element={<AuthForm />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
