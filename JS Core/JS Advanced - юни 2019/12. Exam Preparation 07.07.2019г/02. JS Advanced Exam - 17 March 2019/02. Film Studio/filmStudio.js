const { expect } = require("chai");

class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

describe("Tests …", function () {
    it("creating new movie CORRECT => makeMovie …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = {
            filmName: 'The Avengers',
            filmRoles:
                [{ role: 'Iron-Man', actor: false },
                { role: 'Thor', actor: false },
                { role: 'Hulk', actor: false }]
        };
        expect(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk'])).to.be.eql(result);
    });

    it("creating new movie THROW ARG. DIFF. => makeMovie …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "Invalid arguments";
        expect(() => filmStudio.makeMovie(undefined, ['Iron-Man', 'Thor', 'Hulk'])).to.throw(result);
    });

    it("creating new movie THROW ARG. COUNT => makeMovie …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "Invalid arguments count";
        expect(() => filmStudio.makeMovie("Pesho")).to.throw(result);
    });

    it("casting actor CORRECT => casting …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "You got the job! Mr. Pecho you are next Hulk in the The Avengers. Congratz!";
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk'])
        expect(filmStudio.casting("Pecho", "Hulk")).to.to.equal(result);
    });

    it("casting actor NONE FILMS => casting …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "There are no films yet in MARVEL.";
        expect(filmStudio.casting("Pecho", "Hulk")).to.to.equal(result);
    });

    it("casting actor NONE ROLE => casting …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "Pesho, we cannot find a Pesho role...";
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk'])
        expect(filmStudio.casting("Pesho", "Pesho")).to.to.equal(result);
    });

    it("creating new movie CORRECT => lookForProducer …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "Film name: The Avengers\nCast:\nAsen as Iron-Man\nTodor as Thor\nPecho as Hulk\n";
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk']);
        filmStudio.casting("Pecho", "Hulk");
        filmStudio.casting("Todor", "Thor")
        filmStudio.casting("Asen", "Iron-Man")
        expect(filmStudio.lookForProducer('The Avengers')).to.be.equal(result);
    });

    it("creating new movie CORRECT but NONE FILM => lookForProducer …", function () {
        let filmStudio = new FilmStudio('MARVEL');
        let result = "The Avengers 2 do not exist yet, but we need the money...";
        expect(() => filmStudio.lookForProducer('The Avengers 2')).to.throw(Error, result);
    });
});