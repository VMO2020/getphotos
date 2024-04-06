export const searchImages = async ({
	page,
	color,
	search,
	perPage,
	orientation,
	images,
	setImages,
}) => {
	const api_key = import.meta.env.VITE_UNSPLASH_KEY;

	let url = '';
	let orient = '';
	if (orientation === 'square') {
		orient = 'squarish';
	} else {
		orient = orientation;
	}

	if ((color !== 'all') & (orient !== 'all')) {
		url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${api_key}&per_page=${perPage}&color=${color}&orientation=${orient}`;
	} else if (color !== 'all') {
		url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${api_key}&per_page=${perPage}&color=${color}`;
	} else if (orient !== 'all') {
		url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${api_key}&per_page=${perPage}&orientation=${orient}`;
	} else {
		url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${api_key}&per_page=${perPage}`;
	}

	try {
		const response = await fetch(url);
		const data = await response.json();
		const results = data.results;
		// console.log(results);

		if (page === 1) {
			setImages(results);
		} else {
			setImages([...images, ...results]);
		}
	} catch (error) {
		console.log('Error:', error);
	}
};

// How to sort the photos. (Optional; default: relevant). Valid values are latest and relevant.
// &order_by={order_by}
