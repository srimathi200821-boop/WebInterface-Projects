import "./MusicAlbum.css";

function MusicAlbum(props){
return(
<div className="card">
<h2>Album Name</h2> {props.albumname}
<p>
<strong>Artist Name:</strong> {props.artistname}
</p>
<p>
<strong>Genre:</strong> {props.genre}
</p>
<p>
<strong>Release year:</strong> {props.year}
</p>
<p>
<strong>Rating:</strong> {props.rating}
</p>
</div>
);
}

export default MusicAlbum;