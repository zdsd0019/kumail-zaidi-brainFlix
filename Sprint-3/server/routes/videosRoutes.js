const express = require ('express');
const router = express.Router();
const videos = require ('./videos.json');
const nextVideo = require ('./videosListArray.json');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(cors());
router.use(bodyParser.json());

router.get('/', (request, response) => {
	response.status(200).json(videos);
});

router.get('/:id', (request, response) => {
	const id = request.params.id;
	const NextVideo = nextVideo.find(video => {
		return video.id === id;
	});
	response.status(200).json(NextVideo);
});

router.post('/', (request, response) => {
	const uniqueVideo = {
		id: request.body.id,
		title: request.body.title,
		image: request.body.image,
		channel: 'Kumail Zaidi'
		
	};
	videos.push(uniqueVideo);
	response.send(uniqueVideo);
})
	
	router.post('/:id', (request, response) => {
		const newVideo = {
			id: request.body.id,
			title: request.body.title,
			image: request.body.image,
			channel: 'Kumail Zaidi',
				"description": request.body.description,
				"views": "1,001,023",
				"likes": "110,985",
				"duration": "4:01",
				"video": "https://project-2-api.herokuapp.com/stream",
				"timestamp": 1545162149000,
				"comments": [
					{
						"name": "Micheal Lyons",
						"comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
						"id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
						"likes": 0,
						"timestamp": 1545162149000
					},
					{
						"name": "Gary Wong",
						"comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
						"id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
						"likes": 0,
						"timestamp": 1544595784046
					},
					{
						"name": "Theodore Duncan",
						"comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
						"id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
						"likes": 0,
						"timestamp": 1542262984046
					}
				]
			
		};

	nextVideo.push(newVideo);
	response.send(newVideo);
})



module.exports = router;