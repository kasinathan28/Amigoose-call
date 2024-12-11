import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Intro } from "./Pages/Intro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/call/:userName/:meetingId" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
