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
        {
            return `
        <div class="col" >
                <p>Title: ${this.title}</p>
                <div>${this.albumArt}</div>
                <p>Artist: ${this.artist} </p>
                <p>Time: ${this.collection}</p>
                <p>Price: ${this.price}</p>
                <p>Preview: ${this.preview}</p>
            </div>
        `
        }
        return `
        <div class="col" >
                <p>Title: ${this.title}</p>
                <div>${this.albumArt}</div>
                <p>Artist: ${this.artist} </p>
                <p>Time: ${this.collection}</p>
                <p>Price: ${this.price}</p>
                <p>Preview: ${this.preview}</p>
            </div>
        `

    }
}