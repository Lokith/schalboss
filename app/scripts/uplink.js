/**
 * Created by codfractal on 19/03/14.
 * Gestion des datas via Firebase.
 */

function setScore(iName, iScore) {
    var uplink = new Firebase("https://burning-fire-8131.firebaseio.com");
    var fredNameRef = uplink.child('highscore/');
    fredNameRef.push({name : iName, score : iScore});
    fredNameRef.on('value', function(nameSnapshot) {
        var y = nameSnapshot.val();
    });
}

function testUpLink() {
//    setScore('Aurelien', 250);
//    setScore('Pierre', 250);
//    setScore('Remy', 250);
}