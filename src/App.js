import MainPage from "./pages/MainPage";
import Send from "./pages/Send";
import Finished from "./pages/Finished"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/ResetStyle";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/enviada" element={<Send />}></Route>
        <Route path="/finalizada" element={<Finished />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
