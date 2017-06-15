var controller = require('./../controller/controller');
module.exports = app => {
  app.post('/api/login', controller.loginReg);
  app.get('/logout', controller.logout);
  app.post('/api/topics', controller.addTopic);
  app.get('/api/topics', controller.getAllTopics);
  app.get('/api/topics/:id', controller.getSingleTopic);
  app.post('/api/comments/:topic_id', controller.createComment);
  app.get('/api/current', controller.current);
}
