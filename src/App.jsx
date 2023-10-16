import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <AnimatePresence>
      <div className="flex h-screen  w-screen  flex-col bg-gray text-textColor">
        <Header />
        <main className="mt-[60px] bg-red-400">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
