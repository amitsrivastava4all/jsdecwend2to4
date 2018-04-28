var cron = require('node-cron');

cron.schedule('*/2 * * * *', function(){
  //sendMail()
  //console.log('running a task every minute');
});
