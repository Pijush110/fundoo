const notes = require('../app/model/note');
const user=require('../app/model/user')
/**
 * @param {object} data
 * @param {callback function} callback
 */
exports.createNote = (data,callback) => {
    console.log("note Services",data.email);
    user.getID(data.email,(err,result)=>{
        if(err){
            callback(err)
        }else{
            const note={
                "userID":result,
                "title":data.title,
                "description":data.description,
                "color":data.color,
                "reminder":data.reminder,
                "isPinned":data.isPinned,
                "image":data.image,
                "archive":data.archive,
                "isTrashed":data.isTrashed
            }
            console.log("save notes");
            
            notes.save(note,(err,result) => {
                if(err){
                    
                    callback(err);
                }
                else
                {
                    user.updateNoteRef(result,(err,result)=>{
                        if(err){
                            callback(err);
                        }else{
                            return callback(null,result);
                        }
                    })
                }
            })
        }
    })

}