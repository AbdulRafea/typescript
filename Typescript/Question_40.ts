// Define the function make_album
function make_album(artist: string, title: string, tracks: number) {
    // Create the album object with artist and title
    let album = {
        artist: artist,
        title: title
    };

    // If the number of tracks is provided, add it to the album object
    if (tracks !== undefined) {
        // @ts-ignore
        album.tracks = tracks;
    }

    return album;
}

// Call the function to create three album objects
// @ts-ignore
let album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
// @ts-ignore
let album2 = make_album('Michael Jackson', 'Thriller');
// @ts-ignore
let album3 = make_album('Led Zeppelin', 'Led Zeppelin IV');

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);

// Call the function with the number of tracks
let albumWithTracks = make_album('The Beatles', 'Abbey Road', 17);

// Print the album object that includes the number of tracks
console.log(albumWithTracks);


Output:
 {artist: 'Pink Floyd', title: 'The Dark Side of the Moon'}
 {artist: 'Michael Jackson', title: 'Thriller'}
 {artist: 'Led Zeppelin', title: 'Led Zeppelin IV'}
 {artist: 'The Beatles', title: 'Abbey Road', tracks: 17}
