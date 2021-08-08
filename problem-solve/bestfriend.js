//4. find the largest string of an array


function findBestFriend (friends) {
    let bestFriend = ' ';
    for (let i = 0; i < friends.length; i++) {
        if( bestFriend.length < friends[i].length) {
            bestFriend = friends[i];
        }
    }
    return bestFriend;
}

var myFriends = ['maria','dilraba','ela','zhao','mariamim','lushi','jackson'];
var bestFriend = findBestFriend (myFriends);
console.log(bestFriend);
