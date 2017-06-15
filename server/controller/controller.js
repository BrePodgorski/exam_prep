var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model("Topic");
var Comment = mongoose.model("Comment");
module.exports = {
  loginReg: (req, res)=>{
    //try to find user before creating one
    User.findOne({name: req.body.name}, (err, user)=>{
    //if user does not exist
    if(user == null){
      let user = new User(req.body);
      user.save((err, savedUser)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Error in saving user")
        }else{
          req.session.user = savedUser;
          console.log(savedUser)
          //this is how we use session
          return res.json(savedUser);
        }
      })

    }else{
      //if user does exist
      req.session.user = user;
      console.log("*******");
      console.log(user);
      return res.json(user);
    }
  })
  },
  logout: (req, res)=>{
    req.session.destroy();
    res.redirect('/');
  },
//this will always chec kto make sure thered is a user to exist

  addTopic: (req, res) => {
    if(!req.session.user){
      return res.sendStatus(401);
    }else{
      let topic = new Topic(req.body);
      topic._user = req.session.user._id;
      topic.save((err, newTopic)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Error in saving topic")
        }else{
          console.log(newTopic);
          return res.json(newTopic);
        }
      })
    }

  },
  getAllTopics: (req, res)=>{
    Topic.find({}).populate('_user').exec( (err, topics)=>{
  if(err){
    console.log(err);
    return res.status(500).send("Error getting topics")
  }else{
    // console.log(topics);
    return res.json(topics);
      }
    })
  },
  getSingleTopic: (req, res)=>{
    // console.log("in method");
    Topic.findOne({_id: req.params.id}).populate('_user').populate({path: 'comments', populate: {path: '_user'}}).exec((err, topic)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error finding question");

      }else{
        // console.log(topic);
        return res.json(topic);
      }
    })

  },
  createComment: (req, res) => {
    console.log("Create comment function baby")
    if(!req.session.user){
      return res.sendStatus(401);

    }
    Topic.findOne({_id: req.params.topic_id}, (err, topic)=>{
      if(err){
        console.log(err);
        return res.Sendstatus(500);

      }else{
        let comment = new Comment(req.body);
        // console.log(req.body);
        comment._user = req.session.user._id;
        comment.save( (err, savedComment)=>{
          if(err){
            console.log(err);
            return res.sendStatus(500);
          }else{
            topic.comments.push(savedComment._id);
            topic.save( (err, savedTopic)=>{
              console.log("0909090909090900090");
              console.log(savedComment);
              console.log("888888888888888888888")

              if(err){
                console.log(err);
                return res.sendStatus(500);
              }
              return res.json(savedTopic);
            })
          }
        })
      }
    })
  },
current: (req, res)=>{
  if(!req.session.user){
    res.status(401).send("nope")
  }else{
    console.log(req.session.user.name);
    console.log("###############");
    return res.json(req.session.user);
  }
}


}
