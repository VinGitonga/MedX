/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
function getUser(id, users) {
    return users.filter(function (obj) {
        if (obj.id == id) {
            return obj;
        }
    })[0];
}

function getMessages(messages, authUserId, profileId) {
    let newMsgs = messages.filter(function (el) {
        return (
            (el.senderId == authUserId && el.receiverId == profileId) ||
            (el.senderId == profileId && el.receiverId == authUserId)
        );
    });
    return newMsgs;
}

function getAge(dob) {
    let from = dob.split("-");
    let birthdateTimestamp = new Date(from.join("/"));
    var curr = new Date();
    var diff = curr - birthdateTimestamp;
    var currAge = Math.floor(diff / 31557600000);
    return currAge;
}

export { getAge, getUser, getMessages };
