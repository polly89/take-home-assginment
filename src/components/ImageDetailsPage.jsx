export function ImageDetails({ art, onClose }) {
	if (!art) {
		return null;
	}

	const { title, artist_title } = art;

	return (
		<div>
			<h1>{title}</h1>
			<p>Artist: {artist_title || 'Unknown Artist'}</p>
			<button onClick={onClose}>Back</button>
		</div>
	);
}
