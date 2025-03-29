# Simple Music Player

This is a simple web-based music player that loads and plays songs from a `db.json` file. It allows users to play, pause, skip tracks, seek through a song, and adjust the volume.

## Features
- Play and pause music
- Skip to the next or previous track
- Seek through a track using a slider
- Adjust volume
- Display track information (name and artist)

## Technologies Used
- HTML
- CSS
- JavaScript
- db.json

## How to Use
1. Clone this repository or download the files.
2. Ensure you have a `db.json` file with a `tracks` array containing track details (file path, name, and artist).
3. Open `index.html` in a browser.
4. Use the controls to play, pause, and navigate between tracks.

## Sample `db.json` Format
```json
{
  "tracks": [
    {
    "tracks": [
        {
            "file": "Lucky-Dube-One-Love.mp3",
            "image": "lucky.jpg",
            "name": "One-Love",
            "artist": "Lucky Dube"
          }
  ]
}
```

## Setup
1. Place your audio files.
2. Update `db.json` with the correct file paths.
3. Open `index.html` in a browser to start using the player.


