const collabModel = require('../app/model/collaborator')



exports.saveCollab = (collabData, callback) => {
    console.log("in services",collabData);
    
    collabModel.saveCollab(collabData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.getCollabNotesUserId = (userId, callback) => {
    collabModel.getCollabNotesUserId(userId, (err, result) => {
        if(err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}
