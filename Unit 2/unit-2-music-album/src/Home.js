import { Link } from "react-router-dom";

function Home() {
return (
<div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
<div style={{
display: "flex",
alignItems: "center",
justifyContent: "space-between",
gap: "40px",
flexWrap: "wrap"
}}>
<div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
<span style={badgeStyle}>🎶Welcome to the Showcase</span>
<h1 style={{ fontSize: "38px", margin: "20px 0", lineHeight: "1.3" }}>
Celebrating Tamil Music, One <span style={{ color: "#007bff" }}>Album</span> at a Time
</h1>
<p style={{ fontSize: "18px", color: "#444", margin: "20px 0 30px" }}>
Explore timeless classics and today's chart-toppers — a curated
journey through the melodies that shaped Tamil cinema.
</p>
<div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
<Link to="/albums" style={btnPrimary}>Browse Albums &rarr;</Link>
<Link to="/artists" style={btnSecondary}>Meet the Artists</Link>
</div>
</div>
</div>
<div style={{
display: "flex",
justifyContent: "center",
gap: "20px",
flexWrap: "wrap",
marginTop: "60px"
}}>
<div style={boxStyle}>
<h2>📀Albums</h2>
<p>Explore iconic Tamil music albums across decades.</p>
<Link to="/albums" style={btnStyle}>Browse Albums</Link>
</div>
<div style={boxStyle}>
<h2>🎤Artists</h2>
<p>Meet the composers and musicians behind the magic.</p>
<Link to="/artists" style={btnStyle}>Meet Artists</Link>
</div>
<div style={boxStyle}>
<h2>ℹ️About</h2>
<p>Learn more about this project and how it was built.</p>
<Link to="/about" style={btnStyle}>Read More</Link>
</div>
</div>
</div>
);
}

const badgeStyle = {
display: "inline-block",
padding: "6px 14px",
backgroundColor: "#e6f4ff",
color: "#007bff",
borderRadius: "20px",
fontSize: "14px",
fontWeight: "600"
};

const btnPrimary = {
padding: "12px 22px",
backgroundColor: "#007bff",
color: "white",
borderRadius: "8px",
textDecoration: "none",
fontWeight: "600"
};

const btnSecondary = {
padding: "12px 22px",
backgroundColor: "transparent",
color: "#007bff",
border: "2px solid #007bff",
borderRadius: "8px",
textDecoration: "none",
fontWeight: "600"
};

const boxStyle = {
width: "250px",
padding: "20px",
border: "2px solid lightseagreen",
borderRadius: "15px",
backgroundColor: "#f0fdfd"
};

const btnStyle = {
display: "inline-block",
marginTop: "10px",
padding: "8px 16px",
backgroundColor: "#007bff",
color: "white",
borderRadius: "5px",
textDecoration: "none"
};

export default Home;