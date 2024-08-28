import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ShortenUrlPage } from "./presentation/pages/ShortenUrlPage";
import { TopUrlsPage } from "./presentation/pages/TopUrlsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShortenUrlPage />} />
        <Route path="/most-visited" element={<TopUrlsPage />} />
      </Routes>
    </div>
  );
}

export default App;
