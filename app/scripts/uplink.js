/**
 * Created by codfractal on 19/03/14.
 * Gestion des datas via Firebase.
 */

var leaderboard;

function setScore(iName, iScore) {
    var uplink = new Firebase("https://burning-fire-8131.firebaseio.com");
    var highscore = uplink.child('highscore/');
    highscore.on('value', function(snap) {
        leaderboard = snap;
    });
    highscore.push({name : iName, score : iScore});
}