export const PixabayImages = async ({
	search,
	page3,
	perPage,
	orientation,
	color,
	images3,
	setImages3,
}) => {
	const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
	let orient = 'all';
	if (orientation === 'square') {
		orient = 'all';
	}
	if (orientation === 'landscape') {
		orient = 'horizontal';
	}
	if (orientation === 'portrait') {
		orient = 'vertical';
	}

	const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&page=${page3}&per_page=${perPage}&colors=${color}&orientation=${orient}`;
	// https://pixabay.com/api/?key=20109985-959f1c7b6c32509e03f3fd164&q=yellow+flowers&image_type=photo&pretty=true

	try {
		const response = await fetch(url);

		if (response.ok) {
			const data = await response.json();
			const results = data.hits; // Process the fetched data
			// console.log(results);
			if (page3 === 1) {
				setImages3(results);
			} else {
				setImages3([...images3, ...results]);
			}
		} else {
			console.log('Error:', response.status);
		}
	} catch (error) {
		console.log('Error:', error);
	}
};

// orientations: "all", "horizontal", "vertical"
// Default: "all"
