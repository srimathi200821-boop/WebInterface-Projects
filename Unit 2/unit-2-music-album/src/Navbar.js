import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
return (
<nav className="navbar">
<ul>
<li>
<Link to="/" className="active">Home</Link>
</li>
<li>
<Link to="/albums">Albums</Link>
</li>
<li>
<Link to="/artists">Artists</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
</ul>
</nav>
);
}

export default Navbar;