var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate *=.95
	console.log("New video speed is " + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video" + video.muted);
	if (video.muted === false) {
		console.log("Mute Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";}
	else {
		console.log("Unmute Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";}
});
	

		document.querySelector("#vintage").addEventListener("click", function() {
			console.log("Change to old school version");
			video.classList.add("oldSchool");
		});

		document.querySelector("#orig").addEventListener("click", function() {
			console.log("Change to original version");
			video.classList.remove("oldSchool");
		});
		document.querySelector("#skip").addEventListener("click", function() {
			console.log("Current location is " + video.currentTime);
			if (video.currentTime + 15 > video.duration){
				video.currentTime = 0;
				console.log("Start at beginning");
				console.log("Updated location: ", video.currentTime);
				video.play();}
			else{
				video.currentTime +=15
				console.log("Updated location: ", video.currentTime);
				video.play();
			}
		
		});

var slider = document.querySelector("#slider")
slider.addEventListener("click", function(){
	console.log("Before:" + video.volume);
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = slider.value + "%"
	console.log("After:" + video.volume);
});
	// let volume = document.querySelector("#slider");
// volume.addEventListener("change", function(e) {
// audio.volume = e.currentTarget.value / 100;
// onchnage=(this.value)--change vid volume and the volume; change where is says 'volume is'})

// document.querySelector("#slider").addEventListener("change", function(){
// 	(this.value)
// }

// // document.querySelector("#volume").addEventListener("change", function(){
// // 	oninput="range.value = range.value"
// // });
// document.getElementById("#volume");
// '
// var rangeslider = document.getElementById("range");
// var output = document.getElementById("demo");
// output.innerHTML = rangeslider.value;

// rangeslider.oninput = function() {
//   output.innerHTML = this.value;
// }

document.querySelector("#slider").addEventListener("change", volumeSlide)
		window.volumeSlide = function(val){

		console.log('Before: ' + player.volume);
		player.volume = val / 100;
		console.log('After: ' + player.volume);
		};