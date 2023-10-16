import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";

function App() {
  return (
    <div className="bg-gray flex  h-screen  w-screen flex-col text-textColor">
      <Header />
      <main className="mt-[60px] bg-red-400">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
