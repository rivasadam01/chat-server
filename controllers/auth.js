module.exports.login=(req,res)=>{
    const {email,password}=req.body;

    //find user in db
    //check if user is found
    //check if password matches
    //generate auth token

    return res.send([email,password])
};

module.exports.register=(req,res)=>{
    const {email,password}=req.body;

    return res.send([email,password]);
};