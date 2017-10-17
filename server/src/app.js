/**
 * Created by Yalovich on 19/08/2017.
 */


module.exports = (function App()
{
	function getBands()
	{
		return new Promise(function(resolve, reject) {

			resolve([{
				name: "Snatam Kaur",
				image: "../assets/snatam.jpeg",
				// image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsHstacXuzzyvUeqBXZCLdYf4QQU-yTr2o8aA9NirUqQ0Hy0_R6A",
				// birthday: "1986-02-08",
				videoUrl: "https://www.youtube.com/embed/LYDPdd1MOcA",
                active: true
			}, {
				name: "Uma Mohan",
				image: "../assets/mohan.jpeg",
				// birthday: "1941-07-22",
				videoUrl: "https://www.youtube.com/embed/1I23gABHrnM",
                active: true
			}, {
				name: "Deva Premal",
				image: "../assets/premal.jpeg",
				// birthday: "1987-06-17",
				videoUrl: "https://www.youtube.com/embed/BSmToj9VZ4s",
                active: true
			}]);

		});
	}

	return {
		getBands:getBands
	}
})();
