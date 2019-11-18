class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = { rate: 0, votes: 0, songs: [] }
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if (songs.length > 0) {
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if (arr.length > 0) {

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

const { expect } = require("chai");

describe("SoftUniFy …", function () {
    describe("downloadSong …", function () {
        it("test from the word.docx …", function () {
            let test = new SoftUniFy();
            test.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            test.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            test.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            let result = {
                Eminem:
                {
                    rate: 0,
                    votes: 0,
                    songs:
                        ['Venom - Knock, Knock let the devil in...',
                            'Phenomenal - IM PHENOMENAL...']
                },
                'Dub Fx':
                {
                    rate: 0,
                    votes: 0,
                    songs: ['Light Me On Fire - You can call me a liar.. ']
                }
            };

            expect(test.allSongs).to.be.eql(result);
        });

    });

    describe("playSong …", function () {
        it("correct", function () {
            let test = new SoftUniFy();
            test.downloadSong("aaa", "bbb", "ccc");
            let result = 'aaa:\nbbb - ccc\n'
            expect(test.playSong("bbb")).to.be.equal(result);
        });

        it("incorrect", function () {
            let test = new SoftUniFy();
            test.downloadSong("aaa", "bbb", "ccc");
            let result = "You have not downloaded a ccc song yet. Use SoftUniFy's function downloadSong() to change that!"
            expect(test.playSong("ccc")).to.be.equal(result);
        });

    });
    describe("songsList …", function () {
        //todo
        it("empty song list", function () {
            let test = new SoftUniFy();
            let result = 'Your song list is empty';
            expect(test.allSongs).to.be.equal(result);
        });

    });

    describe("rateArtist …", function () {
        it("doesn't have artist to rate, none rate number", function () {
            let test = new SoftUniFy();
            let result = `The Eminem is not on your artist list.`;
            expect(test.rateArtist('Eminem')).to.be.equal(result);
        });

        it("doesn't have artist to rate", function () {
            let test = new SoftUniFy();
            let result = `The Eminem is not on your artist list.`;
            expect(test.rateArtist('Eminem', 50)).to.be.equal(result);
        });

        it("correct rate", function () {
            let test = new SoftUniFy()
            test.downloadSong("aaa", "bbb", "ccc");
            test.rateArtist("aaa", 50);
            expect(test.allSongs["aaa"].rate).to.be.equal(50);
        });
    });

});