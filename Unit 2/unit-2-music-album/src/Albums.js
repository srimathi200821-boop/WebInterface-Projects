import MusicAlbum from "./MusicAlbum.js";

function Albums() {
return (
<div style={{ textAlign: "center", marginTop: "40px" }}>
<h1>Tamil Music Albums</h1>
<div style={{ 
display: "flex", 
justifyContent: "center",
flexWrap: "wrap" 
}}>
<MusicAlbum
albumname="Roja"
artistname="A. R. Rahman"
genre="Romantic"
year="1992"
rating="5.0"
/>
<MusicAlbum
albumname="Master"
artistname="Anirudh Ravichander"
genre="Action"
year="2021"
rating="5.0"
/>
<MusicAlbum
albumname="Mayakkam Enna"
artistname="G. V. Prakash Kumar"
genre="Romance / Drama"
year="2011"
rating="4.8"
/>
<MusicAlbum
albumname="Paiyaa"
artistname="Yuvan Shankar Raja"
genre="Romance / Melody"
year="2010"
rating="4.7"
/>
<MusicAlbum
albumname="Ayan"
artistname="Harris Jayaraj"
genre="Action / Adventure"
year="2009"
rating="4.8"
/>
</div>
</div>
);
}

export default Albums;