function sing(song) {
    console.log("sining ".concat(song));
}
// Required Parameters
function singTwo(firstSong, secondSong) {
    console.log("sining ".concat(firstSong, " and ").concat(secondSong));
}
singTwo("a", "b"); // singTwo("a"), singTwo("a", "b", "c") causes errors
//Optional Parameters
function announceSong(song, singer) {
    console.log("Song ".concat(song, " announce"));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
announceSong("Unknown Song");
announceSong("My Song", "Me");
announceSong("Undefined Song", undefined);
// Default Parameters
function rateSong(song, rating) {
    if (rating === void 0) { rating = 0; }
    console.log("".concat(song, " gets ").concat(rating, "/5 stars"));
}
rateSong("Photograph");
rateSong("Set Fire to the Rain", 5);
rateSong("Set Fire to the Rain", undefined);
// Rest Parameters 
function singAllTheSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("".concat(song, " by ").concat(singer));
    }
}
singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", 0, 9);
