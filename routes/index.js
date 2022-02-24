// Default Template Code >>

var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   res.send('olleH dlroW')
// });

// router.listen(3000,()=>{
//   console.log('Serve is up and running at the port 8000')
// })


// new code to set-up Passport >>

const isLoggedIn = require('../Middleware/auth')


router.get('/', isLoggedIn, (req, res) => {
  console.log(req.user)
  res.send(`Hello world ${req.user.displayName}`)
})
router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})


module.exports = router;