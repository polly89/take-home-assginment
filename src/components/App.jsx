import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetails } from './ImageDetailsPage';

import './App.css';

export function App({ query }) {
	const [restults, setResults] = useState([]);
	const [selected, setSelected] = useState(null);
	const [showDetailsPage, setShowDetailsPage] = useState(false);

	async function onSearchSubmit(query) {
		try {
			const res = await searchArtworks(query);
			setResults(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSelection(e, art) {
		e.preventDefault();
		setSelected(art);
		setShowDetailsPage(true);
		console.log('Click to open');
	}

	function DisplayList() {
		if (showDetailsPage) {
			return null;
		}
		return (
			<ul>
				{restults.map((res) => (
					<li key={res.title}>
						<a href="/" onClick={(e) => handleSelection(e, res)}>
							<h2>{res.title}</h2>
							<p>Artist: {res.artist_title || 'Unknown'}</p>
						</a>
					</li>
				))}
			</ul>
		);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<DisplayList />
			{showDetailsPage && selected && (
				<ImageDetails
					art={selected}
					onClose={() => {
						setShowDetailsPage(false);
						setSelected(null);
						console.log('Closing details page');
					}}
				/>
			)}
			<Footer />
		</div>
	);
}
