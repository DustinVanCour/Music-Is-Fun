import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').innerHTML = `<i class="fas fa-headphones"></i> Get Music`
  document.querySelector('#scroll-down').innerHTML = `<img src="assets/scroll.gif" height="300" width="400">`
  console.log(itunesService.Songs)
  let songs = itunesService.Songs
  let template = ''
  songs.forEach(element => {
    template += element.Template
  });
  document.getElementById('song-list').innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController