const express = require ('express');
const router = express.Router();
const videos = require ('./videos.json');
const nextVideo = require ('./videosListArray.json');
const uniqid = require('uniqid');
const fs = require('fs');
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
	response.status(200).statusjson(NextVideo);
});

router.post('/', (request, response) => {
	const uniqueVideo = {
		id: uniqid(),
		title: request.body.title,
		image: request.body.image,
		channel: request.body.channel
	};
	
	currentInformation = {
		id: uniqueVideo.id,
		title: uniqueVideo.title,
		image: uniqueVideo.image,
		channel: uniqueVideo.channel,
		description: request.body.description,
		views: request.body.views,
		likes: request.body.likes,
		duration: request.body.duration,
		video: request.body.video,
		timestamp: request.body.timestamp,
		comments: []
	};
	videos.push(uniqueVideo);
	nextVideo.push(currentInformation);
	fs.writeFileSync('./videos.json', JSON.stringify(videos));
	fs.writeFileSync('./videosListArray.json', JSON.stringify(nextVideo));
	response.send(uniqueVideo);
	response.send(nextVideo);
})



module.exports = router;