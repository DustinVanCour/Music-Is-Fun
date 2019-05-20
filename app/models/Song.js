export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `
<div class="col-4">
<div class="card-deck">
    <div class="card">
        <img src="${this.albumArt}" class="card-img-top">
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Title:</strong> ${this.title}</li>
        <li class="list-group-item"><strong>Artist:</strong> ${this.artist} </li>
        <li class="list-group-item"><strong>Album:</strong> ${this.collection}</li>
        <li class="list-group-item"><strong>Price:</strong> ${this.price}</li>
    </ul>
        <div class="card-body">
        <p><strong>Preview:</strong></p><audio controls><source src="${this.preview}" type="audio/mpeg"></audio></div>
            </div>
        </div>
    </div>
    </div>
    </div>
                `
    }
}