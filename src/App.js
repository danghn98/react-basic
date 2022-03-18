import Item from './item';
import data from './data';
import './App.css';

// const data = [
// 	{
// 		"albumId": 1,
// 		"id": 21,
// 		"title": "ad et natus qui",
// 		"url": "https://via.placeholder.com/600/5e12c6",
// 		"thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 22,
// 		"title": "et ea illo et sit voluptas animi blanditiis porro",
// 		"url": "https://via.placeholder.com/600/45601a",
// 		"thumbnailUrl": "https://via.placeholder.com/150/45601a"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 23,
// 		"title": "harum velit vero totam",
// 		"url": "https://via.placeholder.com/600/e924e6",
// 		"thumbnailUrl": "https://via.placeholder.com/150/e924e6"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 24,
// 		"title": "beatae officiis ut aut",
// 		"url": "https://via.placeholder.com/600/8f209a",
// 		"thumbnailUrl": "https://via.placeholder.com/150/8f209a"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 25,
// 		"title": "facere non quis fuga fugit vitae",
// 		"url": "https://via.placeholder.com/600/5e3a73",
// 		"thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 26,
// 		"title": "asperiores nobis voluptate qui",
// 		"url": "https://via.placeholder.com/600/474645",
// 		"thumbnailUrl": "https://via.placeholder.com/150/474645"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 27,
// 		"title": "sit asperiores est quos quis nisi veniam error",
// 		"url": "https://via.placeholder.com/600/c984bf",
// 		"thumbnailUrl": "https://via.placeholder.com/150/c984bf"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 28,
// 		"title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
// 		"url": "https://via.placeholder.com/600/392537",
// 		"thumbnailUrl": "https://via.placeholder.com/150/392537"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 29,
// 		"title": "aut ipsam quos ab placeat omnis",
// 		"url": "https://via.placeholder.com/600/602b9e",
// 		"thumbnailUrl": "https://via.placeholder.com/150/602b9e"
// 	},
// 	{
// 		"albumId": 1,
// 		"id": 30,
// 		"title": "odio enim voluptatem quidem aut nihil illum",
// 		"url": "https://via.placeholder.com/600/372c93",
// 		"thumbnailUrl": "https://via.placeholder.com/150/372c93"
// 	}
// ];

const date = new Date().toString();

function App() {
	return (
		<div className="contaner">
			<div className="list-item">
				{data.map((item, index) => (
					<Item key={index} title={item.title} img={item.thumbnailUrl} date={date} />
				))}
			</div>
		</div>
	);
}

export default App;
