// Array to store the list of tracks
let track_list = [];
// Index of the currently playing track
let track_index = 0;
// Boolean to track whether music is playing or not
let isPlaying = false;
// Create an audio element to play music
let curr_track = new Audio();

// Select necessary elements from the HTML
const playpause_btn = document.querySelector(".controls button:nth-child(2) i");
const seek_slider = document.querySelector(".seek_slider");
const volume_slider = document.querySelector(".volume_slider");

// Function to fetch track list from db.json
async function fetchTracks() {
    try {
        const response = await fetch('db.json'); // Fetch track data
        const data = await response.json(); // Convert response to JSON
        track_list = data.tracks; // Store track list
        loadTrack(track_index); // Load the first track
    } catch (error) {
        console.error("Error loading tracks:", error); // Log an error if fetching fails
    }
}

// Function to load a track by index
function loadTrack(index) {
    curr_track.src = track_list[index].file; // Set track source
    curr_track.load(); // Load track
    document.querySelector(".track-info p").textContent = `Now Playing: ${track_list[index].name} - ${track_list[index].artist}`; // Update UI with track details
}

// Function to play or pause the track
function playpauseTrack() {
    if (isPlaying) {
        curr_track.pause(); // Pause track if currently playing
        playpause_btn.className = "fa fa-play"; // Change button to play icon
    } else {
        curr_track.play(); // Play track if currently paused
        playpause_btn.className = "fa fa-pause"; // Change button to pause icon
    }
    isPlaying = !isPlaying; // Toggle play state
}

// Function to play the next track
function nextTrack() {
    track_index = (track_index + 1) % track_list.length; // Increment index, loop if necessary
    loadTrack(track_index); // Load new track
    playpauseTrack(); // Play new track
}

// Function to play the previous track
function prevTrack() {
    track_index = (track_index - 1 + track_list.length) % track_list.length; // Decrement index, loop if necessary
    loadTrack(track_index); // Load new track
    playpauseTrack(); // Play new track
}

// Function to seek through the track based on slider position
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100); // Calculate seek position
    curr_track.currentTime = seekto; // Set track time
}

// Function to adjust the volume based on slider position
function setVolume() {
    curr_track.volume = volume_slider.value / 100; // Set volume
}

// Fetch the track list when the page loads
fetchTracks();
