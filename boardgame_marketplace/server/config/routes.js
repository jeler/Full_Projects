var mongoose = require("mongoose");

var User = require('./../models/user.js');

var BoardGame = require('./../models/boardgame.js');

const path = require('path');

const user = require('../controllers/usersController')
// logic from user_controller

const boardgame  = require('../controllers/boardgameController')


module.exports = 
function(app)
{
    app.route('/createnewuser')
    .post(user.createnewuser);

    app.post('/loginuser', user.loginuser)

    app.post('/creategame', boardgame.creategame)

    app.post('/edit_game/:id', boardgame.edit_game)    

    app.get('/logout', user.logout)

    app.get('/check_session', user.checkSessionId)

    app.get('/findgames', boardgame.findgames)

    app.get('/delete/:id', boardgame.delete)

    app.get('/random', boardgame.random)

    app.get('/get_game/:id', boardgame.get_game)   

}
