const BASE_URL = 'https://cataas.com/cat?json=true/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();

		return json.url;

	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	catImg.src = 'https://cataas.com/' + await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();