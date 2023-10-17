export function ImageDetails({ art }) {
	const { title, artist_title } = art;
	return (
		<div>
			<h1>{title}</h1>
			<p>Artist: {artist_title || 'Unknown Artist'}</p>
		</div>
	);
}
