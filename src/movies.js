const movies = [
	{
		id: 1,
		releasedYear: "2/11/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",
		title: "Jawan: Extended Cut",
		description:
			"A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice — and that lead him to an unexpected reunion.",
		posterUrl:
			"https://occ-0-7334-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABelwaOe_exRUCjSVM50b_cwf1BKLjk0k7ABeAkK-G2GWZ8D_omr0RPU1qQQRNMNCUasnAa38StrYp2zwC2xjiBil7_6bzftMsAnEfhvacyt1J22b2izjpdK09zLqIU8tRI-7DvlGW8HqdoQPcDSxHBUb8XqyGbAW3kqQIQ9V66_B9mqKlqwIlynF1fYc3z02rxv69qiKndju11xzUwRF7LL4pm6nSFKjlSB5uoDE88U-n_NVFnTxLKLYRl2L1Efs1opfG1H5RsfE8m7j5n4glyAtoBvI7g.jpg?r=403",
		rating: 5,
		trailer: "https://www.youtube.com/embed/fPX0C-g5xpU",
	},
	{
		id: 2,
		releasedYear: "1/8/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",
		title: "The Black Book",
		description:
			"After his son is framed for a kidnapping, a bereaved deacon takes justice into his own hands and fights a corrupt police gang to absolve him.",
		posterUrl:
			"https://m.media-amazon.com/images/M/MV5BZjFlZWMyYmUtMTI0Ni00YzUxLTgzZGMtZDM2MzU1ZTQxMzdjXkEyXkFqcGdeQXVyOTcwNDEwNTc@._V1_QL75_UX380_CR0,57,380,562_.jpg",
		rating: 4,
		trailer: "https://www.youtube.com/embed/6PPH4SOm9gk",
	},
	{
		id: 3,
		releasedYear: "12/12/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",
		title: "Overhaul",
		description:
			"When truck racer Roger loses everything, he receives a tempting but dangerous offer: to work as the getaway driver for a gang of thieves.",
		posterUrl:
			"https://m.media-amazon.com/images/M/MV5BZTA1MzcyMjctMGE2OS00YmEzLThlNzYtYWM2NmVmOTYyZjNjXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1080_.jpg",
		rating: 3,
		trailer: "https://www.youtube.com/embed/9oo9Qy5l16Q",
	},
	{
		id: 4,
		releasedYear: "12/12/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",
		title: "Agente Stone",
		description:
			"Tired of the risks involved in a life of crime, two expert thieves and best friends recruit feisty Sam to assist them with one last job before they move to a new, and less stressful, line of work.",
		posterUrl:
			"https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWnjrkcremoiYadWz8THznIKsZd0p2Xtez7H5DOMxsykqRfEYxCed1tbP239aHxoycJH9N9GCcCzsQ30plvVoeqTejZBQgJptb0IbVykjwy2WSTLIm8QAuqTUwag_sA3GKO6Ag.jpg?r=f52",
		rating: 2,
		trailer: "https://www.youtube.com/embed/XuDwndGaCFo",
	},
	{
		id: 5,
		releasedYear: "12/12/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",
		title: "Isabella Ocaso Nardoni",
		description:
			"When a 5-year-old girl falls from her father's apartment, her mother embarks on a quest for justice — and is put under the national spotlight.",
		posterUrl:
			"https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSCEjM_lt9HSyz13Ht8AwUo3ZISmd67KpNLqsZ_s6OV0kniOruqHW9D_bxpC2QwTnypUqELyx_jwgQlZXNCl5qHEZayTIH4MfCtX5P5yV3LV-lHw6wr1CfuCYEJa6vawY1AzjQ.jpg?r=d60",
		rating: 1,
		trailer: "https://www.youtube.com/embed/zvDnxmhlc9Y",
	},
	{
		title: "Paradise",
		description:
			'Paradise is a place of contentment, a land of luxury and fulfillment containing ever-lasting bliss. Paradise is often described as a "higher place"',
		posterUrl:
			"https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW6q-q5B5XEE2odh_A5cug_QeuNgMWwvi4viCna_-OnTBFMDzgOTMvKtEAbYNFdGlmOClj_wGvpbdymUB5YV6AnOxIk-_zVUfsZdjxwpxTpnYjwJiyzDS8b7nuox_hjqNykuNQ.jpg?r=505",
		rating: 3,
		id: 6,
		releasedYear: "12/12/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",

		trailer: "https://www.youtube.com/embed/fPX0C-g5xpU",
	},
	{
		title: "The Great Wall",
		description:
			"During the reign of Renzong Emperor, a group of European mercenaries travels to China, searching for gunpowder. A few miles north of the Great Wall, they are attacked by a monster. Only Irishman William Garin and Spaniard Pero Tovar survive. They sever the monster's arm and bring it with them. Upon reaching the Wall, they are taken prisoner by the Nameless Order, led by General Shao and Strategist Wang.",
		posterUrl:
			"https://upload.wikimedia.org/wikipedia/en/c/cd/The_Great_Wall_%28film%29.png",
		rating: 4,
		id: 7,
		releasedYear: "12/12/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",

		trailer: "https://www.youtube.com/embed/fPX0C-g5xpU",
	},
	{
		title: "King of Boys: The return of the King",
		description:
			"When a powerful businesswoman's political ambitions are threatened by her underworld connections, the ensuing power struggle could cost her everything.",
		posterUrl:
			"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/King_of_Boys_poster.jpeg/220px-King_of_Boys_poster.jpeg",
		rating: 3,
		id: 8,
		releasedYear: "12/12/2023",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",

		trailer: "https://www.youtube.com/embed/fPX0C-g5xpU",
	},
	{
		title: "The Sacred Book",
		description:
			"Patricia Wilson-Kastner's wonderfully crafted work views the liturgy as a cosmic drama, enacting a sacred meal that grounds us in the universe, ...",
		posterUrl:
			"https://m.media-amazon.com/images/I/71oA76USTqL._SY466_.jpg",
		rating: 2,
		id: 9,
		releasedYear: "12/12/2023",
		trailer: "https://www.youtube.com/embed/fPX0C-g5xpU",
		producer: "John Clarke",
		productionLabel: "BBC Corporation",
	},
];

export default movies;
