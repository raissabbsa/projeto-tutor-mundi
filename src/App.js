import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./styles/ResetStyle";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
