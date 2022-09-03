/*********************************
 *
 * PROTOTYPES (OLD METHOD)
 *
 ************************************/

function User(email, name) {
   this.email = email;
   this.name = name;
   this.online = false;

   // login function or method is not needed inside here
   // this.login = function() {
   //    console.log(this.email,  'has logged in');
   // }
}

// defining prototypes / method for the class/prototype User
User.prototype.login = function() {
   // 'this' refers to the object, that is created with a new instance, eg 'userOne'
   this.online = true;
   console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
   this.online = false;
   console.log(this.email, 'has logged out');
}

function Admin(...args) {
   User.apply(this, args);
   this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
   users = users.filter(user => {
      return user.email !== u.email;
   })
}

const userOne = new User('john@gmail.com', 'john');
const userTwo = new User('jane@yahoo.com', 'jane');
const admin = new Admin('sumit@gmail.com', 'sumit');
let users = [userOne, userTwo, admin]