class ScoreBoard {
    constructor() {
        this.playerScore = []
    }

    getNewScore() {
        return { points: 0 };
    }

    submitScore(score) {
        this.playerScore.push(score);
    }
}