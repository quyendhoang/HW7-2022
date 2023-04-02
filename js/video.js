var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	console.log("Autoplay is set to" + video.autoplay)
	video.loop = false
	console.log("Loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
 	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
 	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .90
 	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .90
 	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10
 	console.log("Current time is" + video.currentTime);
	if (video.currentTime >= video.duration)
		video.currentTime = 0
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false
		console.log("Video unmuted")
		this.innerHTML = "Mute"
	}
	else{
		video.muted = true
		console.log("Video muted")
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
    console.log(this)
    console.log(this.volume)
    // volume1 = document.querySelector("#slider")
	//volume1.volume = this.value/100;
	video.volume = (this.value/100)
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
	console.log("Volume is changing to " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("I am in old school")
    vd = document.querySelector("video")
	vd.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("I am in original")
    vd = document.querySelector("video")
	vd.classList.remove("oldSchool")

});






