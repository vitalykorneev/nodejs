var User = require('./schema/user').User;
var admin = new User({
    name : 'root',
    password : 'pass@word1'
});

admin.save(function (err) {
    if (err) console.log('Error');
})


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// var schemaCat = mongoose.Schema({
//     name : String,
//     age : Number
// });

// schemaCat.methods.say = function () {
//     console.log('Hello from - ' + this.get('name'));
// };

// var Cat = mongoose.model('Cat', schemaCat);

// var kitty = new Cat({ name: 'Tom' });
// kitty.save(function (err) {
//   if (err) {
//     console.log('meow');
//   }
//   else {
//     kitty.say();
//   }
// });