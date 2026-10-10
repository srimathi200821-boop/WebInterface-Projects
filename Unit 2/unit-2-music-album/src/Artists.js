import "./MusicAlbum.css";

function Artists() {
return (
<div style={{ textAlign: "center", marginTop: "40px" }}>
<h1>Tamil Music Artists</h1>
<div style={{
display: "flex",
justifyContent: "center",
flexWrap: "wrap"
}}>
<div className="card">
<h2>A. R. Rahman</h2>
<p><strong>Era:</strong> 1990s - Present</p>
<p><strong>Genre:</strong> Melody / Classical / Fusion</p>
<p><strong>Famous Album:</strong> Roja</p>
</div>
<div className="card">
<h2>Ilaiyaraaja</h2>
<p><strong>Era:</strong> 1970s - Present</p>
<p><strong>Genre:</strong> Folk / Melody / Classical</p>
<p><strong>Famous Album:</strong> Karagaattakaran</p>
</div>
<div className="card">
<h2>Yuvan Shankar Raja</h2>
<p><strong>Era:</strong> 2000s - Present</p>
<p><strong>Genre:</strong> Melody / Youth</p>
<p><strong>Famous Album:</strong> Paiyaa</p>
</div>
<div className="card">
<h2>Anirudh Ravichander</h2>
<p><strong>Era:</strong> 2010s - Present</p>
<p><strong>Genre:</strong> Mass / Pop</p>
<p><strong>Famous Album:</strong> Master</p>
</div>
<div className="card">
<h2>G. V. Prakash Kumar</h2>
<p><strong>Era:</strong> 2000s - Present</p>
<p><strong>Genre:</strong> Romance / Melody</p>
<p><strong>Famous Album:</strong> Mayakkam Enna</p>
</div>
</div>
</div>
);
}

export default Artists;