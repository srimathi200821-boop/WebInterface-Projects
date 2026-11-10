import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Albums from "./Albums.js";
import Artists from "./Artists.js";
import About from "./About.js";
function App() {
return (
<BrowserRouter>
<div style={{ textAlign: "center", marginTop: "40px" }}>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/albums" element={<Albums />} />
<Route path="/artists" element={<Artists />} />
<Route path="/about" element={<About />} />
</Routes>
</div>
</BrowserRouter>
);
}
export default App; 