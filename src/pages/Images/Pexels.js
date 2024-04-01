export const fetchData = async ({
	search,
	page2,
	perPage,
	orientation,
	color,
	images2,
	setImages2,
}) => {
	const API_KEY = import.meta.env.VITE_PEXELS_KEY;
	const url = `https://api.pexels.com/v1/search?query=${search}&page=${page2}&per_page=${perPage}&orientation=${orientation}&color=${color}`;
	// const url = `https://api.pexels.com/videos/search?query=${search}&page=${page2}&per_page=${perPage}&orientation=${orientation}&color=${color}`;

	try {
		const response = await fetch(url, {
			headers: {
				Authorization: API_KEY,
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = await response.json();
			const results = data.photos; // Process the fetched data
			// console.log(data.photos);
			// console.log(data.videos);
			if (page2 === 1) {
				setImages2(results);
			} else {
				setImages2([...images2, ...results]);
			}
		} else {
			console.log('Error:', response.status);
		}
	} catch (error) {
		console.log('Error:', error);
	}
};

// orientations: landscape, portrait or square.
