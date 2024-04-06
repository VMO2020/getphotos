/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';

// Services
import { searchImages } from '../../services/Unsplash.js';
import { fetchData } from '../../services/Pexels.js';
import { PixabayImages } from '../../services/Pixabay.js';

// Icons
import { BsFillTrashFill } from 'react-icons/bs';
import { FaUnsplash } from 'react-icons/fa';
import { CgPexels } from 'react-icons/cg';
import { SiPixabay } from 'react-icons/si';

// Styles
import './Images.scss';

// Initialize Variables
let page = null;
let page2 = null;
let page3 = null;

export const Images = ({ auth, setAuth }) => {
	const [search, setSearch] = useState('');
	const [searchFilter, setSearchFilter] = useState('');

	const [images, setImages] = useState([]);
	const [images2, setImages2] = useState([]);
	const [images3, setImages3] = useState([]);

	const [perPage, setPerPage] = useState(12);
	const [color, setColor] = useState('all');
	const [orientation, setOrientation] = useState('all');

	// useRef
	const search1Ref = useRef(null);
	const search2Ref = useRef(null);
	const search3Ref = useRef(null);

	// SEARCH FILTERS
	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	const handleFilterChange = (event) => {
		setSearchFilter(event.target.value);
		// console.log(event.target.value);
	};

	// WORD FILTERS
	let results = !searchFilter
		? images
		: images.filter(
				(result) =>
					result.alt_description
						.toLowerCase()
						.includes(searchFilter.toLowerCase())
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  );

	let results2 = !searchFilter
		? images2
		: images2.filter(
				(result) =>
					result.alt.toLowerCase().includes(searchFilter.toLowerCase())
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  );

	let results3 = !searchFilter
		? images3
		: images3.filter(
				(result) =>
					result.tags.toLowerCase().includes(searchFilter.toLowerCase())
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  );

	// PARAMETERS-FILTERS
	const handleColorChange = (event) => {
		setColor(event.target.value);
	};

	const handleOrientationChange = (event) => {
		setOrientation(event.target.value);
	};

	const handlePerPage = (event) => {
		const pages = parseInt(event.target.value);
		setPerPage(pages);
	};

	// SEARCH: Unsplash
	const handleSearchUnsplash = (e) => {
		e.preventDefault();
		setImages([]);
		page = 1;
		searchImages({
			page,
			color,
			search,
			perPage,
			orientation,
			images,
			setImages,
		});
		if (search1Ref.current) {
			search1Ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleShowMore = () => {
		page++;
		searchImages({
			page,
			color,
			search,
			perPage,
			orientation,
			images,
			setImages,
		});
	};

	// SEARCH: Pexels
	const handleSearchPexels = (e) => {
		e.preventDefault();
		page2 = 1;
		fetchData({
			search,
			page2,
			perPage,
			orientation,
			color,
			images2,
			setImages2,
		});
		if (search2Ref.current) {
			search2Ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleShowMore2 = () => {
		page2++;
		fetchData({
			search,
			page2,
			perPage,
			orientation,
			color,
			images2,
			setImages2,
		});
	};

	// SEARCH: Pixabay
	const handleSearchPixabay = (e) => {
		e.preventDefault();
		page3 = 1;
		PixabayImages({
			search,
			page3,
			perPage,
			orientation,
			color,
			images3,
			setImages3,
		});
		if (search3Ref.current) {
			search3Ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleShowMore3 = () => {
		page3++;
		PixabayImages({
			search,
			page3,
			perPage,
			orientation,
			color,
			images3,
			setImages3,
		});
	};

	// RESETS
	const handleWordReset = () => {
		setSearchFilter('');
	};

	const handleSearchReset = () => {
		setSearch('');
		setImages([]);
		setImages2([]);
		setImages3([]);
	};

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<div className="images-search-container">
			<header>
				<div className="images-search-title">
					<h1>Image Search Engine</h1>
					<h3>(Unsplash, Pexels & Pixabay)</h3>
				</div>
			</header>
			<main>
				<div id="search-form-line-2">
					<span>
						Filters
						<b style={{ marginLeft: '0.5rem' }}>
							<FaUnsplash color="red" />
							<CgPexels color="greenyellow" />
							<SiPixabay color="violet" />
						</b>
						:
					</span>

					<div className="line-2-element">
						<label>
							Color:
							<select
								id="color"
								name="color"
								onChange={handleColorChange}
								value={color}
							>
								<option value="all">all</option>
								{/* <option value="black_and_white">black_and_white</option> */}
								<option value="black">black</option>
								<option value="white">white</option>
								<option value="yellow">yellow</option>
								<option value="orange">orange</option>
								<option value="red">red</option>
								{/* <option value="purple">purple</option> */}
								{/* <option value="magenta">magenta</option> */}
								<option value="green">green</option>
								{/* <option value="teal">teal</option> */}
								<option value="blue">blue</option>
							</select>
						</label>
					</div>

					<div className="line-2-element">
						<label>
							Orientation:
							<select
								id="orientation"
								name="orientation"
								onChange={handleOrientationChange}
								value={orientation}
							>
								<option value="all">all</option>
								<option value="landscape">landscape</option>
								<option value="portrait">portrait</option>
								<option value="square">square</option>
							</select>
						</label>
					</div>

					<div className="line-2-element">
						<label>
							Per Page:
							<select
								id="perPage"
								name="perPage"
								onChange={handlePerPage}
								value={perPage}
							>
								<option value="12">12</option>
								<option value="24">24</option>
								<option value="30">30</option>
								<option value="80">80</option>
							</select>
						</label>
					</div>
				</div>
				<form id="search-form">
					<input
						type="text"
						name="search"
						id="search-box"
						placeholder="Search anything here..."
						value={search}
						onChange={handleInputChange}
					/>

					<button className="btn-image-search" onClick={handleSearchUnsplash}>
						<FaUnsplash /> Search
					</button>

					<button
						className="btn-image-search-pexels"
						onClick={handleSearchPexels}
					>
						<CgPexels /> Search
					</button>

					<button
						className="btn-image-search-pixabay"
						onClick={handleSearchPixabay}
					>
						<SiPixabay /> Search
					</button>

					{search && (
						<span className="btn-search-delete" onClick={handleSearchReset}>
							<BsFillTrashFill size={24} />
						</span>
					)}
				</form>

				<div className="line-3-element">
					<label>WORD Filter: </label>
					<input
						type="text"
						name="searchFilter"
						id="search-filter-box"
						placeholder="Add a word to filter..."
						value={searchFilter}
						onChange={handleFilterChange}
					/>
					{searchFilter && (
						<span onClick={handleWordReset}>
							<BsFillTrashFill color="red" />
						</span>
					)}
				</div>

				<section id="search1" ref={search1Ref}>
					<div className="search-result">
						{results?.map((result, i) => (
							<div key={`${result.created_at}-${i}`} className="image-card">
								<a href={result.links.html} target="_blank" rel="noreferrer">
									<img src={result.urls.regular} />
								</a>
								<p>{result.alt_description}</p>
							</div>
						))}
					</div>
					<div className="show-more-container">
						{results?.length > 0 && (
							<button className="btn-show-more" onClick={handleShowMore}>
								Show more Unsplash
							</button>
						)}
					</div>
				</section>

				<section id="search2" ref={search2Ref}>
					<div className="search-result">
						{results2?.map((result) => (
							<div key={result.id} className="image-card">
								<a href={result.url} target="_blank" rel="noreferrer">
									<img src={result.src.medium} />
								</a>
								<p>{result.alt}</p>
							</div>
						))}
					</div>
					<div className="show-more-container">
						{results2?.length > 0 && (
							<button
								className="btn-show-more-pexels"
								onClick={handleShowMore2}
							>
								Show more Pexels
							</button>
						)}
					</div>
				</section>

				<section id="search3" ref={search3Ref}>
					<div className="search-result">
						{results3?.map((result) => (
							<div key={result.id} className="image-card">
								<a href={result.webformatURL} target="_blank" rel="noreferrer">
									<img src={result.largeImageURL} />
								</a>
								<p>{result.tags}</p>
							</div>
						))}
					</div>
					<div className="show-more-container">
						{results3?.length > 0 && (
							<button
								className="btn-show-more-pixabay"
								onClick={handleShowMore3}
							>
								Show more Pixabay
							</button>
						)}
					</div>
				</section>
				<div className="show-more-container">
					{(results2?.length > 0 ||
						results?.length > 0 ||
						results3?.length > 0) && (
						<button className="btn-back-to-top" onClick={handleBackToTop}>
							GoBackToTheTOP
						</button>
					)}
				</div>
			</main>
		</div>
	);
};
