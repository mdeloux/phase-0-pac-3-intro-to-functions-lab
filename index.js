function shout(string) {
    return string.toUpperCase();
};
function whisper(string) {
    return string.toLowerCase();
}
function logShout(spy) {
    return console.log(spy.toUpperCase());
}
function logWhisper(spy) {
    return console.log(spy.toLowerCase());
}
/*function sayHiToGrandma(string) {
    if (string.toLowerCase()) {
        return ("I can\'t hear you!");
    } else if (string.toUpperCase()) {
        return ("YES INDEED");
    }
} */

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return ("I can\'t hear you!");
    } else if (string === string.toUpperCase()) {
        return ("YES INDEED!");
    } else {
        return ("I love you, too.");
    }
}
