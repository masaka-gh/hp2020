function search() {
    for (var i = 0; i < 5; i ++) {
        alert('無限アラート！');
    }
    alert('嘘だよ！');
}           

function rpsfuncRock(){
    var hand = "";
    var reply = new Array ("Rock", "Paper", "Scissors");
    var replyLength = reply.length;
    var random = Math.floor(Math.random() * replyLength);

    if (random == 0) {
        hand = "Rock";
        alert(hand);
        alert("Draw!");
    } else if (random == 1) {
        hand = "Paper";
        alert(hand);
        alert("You Lose...");
    } else {
        hand = "Scissors";
        alert(hand);
        alert("You Win!");
    }
};

function rpsfuncPaper(){
    var hand = "";
    var reply = new Array ("Rock", "Paper", "Scissors");
    var replyLength = reply.length;
    var random = Math.floor(Math.random() * replyLength);

    if (random == 0) {
        hand = "Rock";
        alert(hand);
        alert("You Win!")
    } else if (random == 1) {
        hand = "Paper";
        alert(hand);
        alert("Draw!");
    } else {
        hand = "Scissors";
        alert(hand);
        alert("You Lose...");
    }
};

function rpsfuncScissors(){
    var hand = "";
    var reply = new Array ("Rock", "Paper", "Scissors");
    var replyLength = reply.length;
    var random = Math.floor(Math.random() * replyLength);

    if (random == 0) {
        hand = "Rock";
        alert(hand);
        alert("You Lose...");
    } else if (random == 1) {
        hand = "Paper";
        alert(hand);
        alert("You Win!");
    } else {
        hand = "Scissors";
        alert(hand);
        alert("Draw!");
    }
};

