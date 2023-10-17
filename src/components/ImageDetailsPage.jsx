export function ImageDetails({ art, onClose }) {
	if (!art) {
		return null;
	}

	const { title, artist_title, thumbnail, image_id } = art;

	return (
		<div>
			<h1>{title}</h1>
			<img
				alt={thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
			/>
			<p>Artist: {artist_title || 'Unknown Artist'}</p>
			<button onClick={onClose}>Back</button>
		</div>
	);
}
