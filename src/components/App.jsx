import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetails } from './ImageDetailsPage';

import './App.css';

export function App({ query }) {
	const [restults, setResults] = useState([]);

	async function onSearchSubmit(query) {
		try {
			const res = await searchArtworks(query);
			setResults(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSelection(e) {
		e.preventDefault();
	}

	function DisplayList() {
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
			<Footer />
		</div>
	);
}
