const videoUrlInput = document.getElementById("videoUrl");
const playButton = document.getElementById("playButton");
const videoContainer = document.getElementById("videoContainer");

playButton.addEventListener("click", () => {
    const m3u8Url = videoUrlInput.value;
    
    // Use the HLS.js library to play the M3U8 video
    const video = document.createElement("video");
    video.controls = true;
    video.style.width = "100%";
    video.style.maxWidth = "800px";
    
    const hls = new Hls();
    hls.loadSource(m3u8Url);
    hls.attachMedia(video);
    
    videoContainer.innerHTML = "";
    videoContainer.appendChild(video);
});
