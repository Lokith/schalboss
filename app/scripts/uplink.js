/**
 * Created by codfractal on 19/03/14.
 * Gestion des datas via Firebase.
 */

var leaderboard = new Array();

function setScore(iName, iScore) {
    var uplink = new Firebase("https://burning-fire-8131.firebaseio.com");
    var highscore = uplink.child('highscore/');
    highscore.push({name : iName, score : iScore});
    var i = 0;
    highscore.on('value', function(snap) {
        leaderboard[i] = snap;
        i++;
    });
}

function testUpLink() {
//    setScore('Aurelien', 250);
//    setScore('Pierre', 250);
//    setScore('Remy', 250);
}