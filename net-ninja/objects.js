const demoUser = {
   email: 'sumit@gmail.com',
   name: 'sumit',
   login () {
      console.log(this.email, 'has logged in.')
   },
   logout() {
      console.log(this.email, 'has logged out.')
   }
}

/*
   the 'new' keyword
   -> creates a new empty object {}
   -> sets the value of 'this' to be the new empty object
   -> calls the contructor method
*/ 

// CLASSES
// Defining a class
class User {
   // constructor is the function that creates or constructs the object class
   constructor(email, name) {
      // assigning properties to incoming parameters
      this.email = email;
      this.name = name;
      this.score = 0;
   }

   login() {
      console.log(this.name, 'has logged in with', this.email);
      return this;
   }

   logout() {
      console.log(this.email, 'has just logged out.');
      return this;
   }
   updateScore() {
      this.score++;
      console.log(this.email, 'score is now', this.score);
      return this;
   }

}


// Inheritance
class Admin extends User {
   deleteUser(user) {
      users = users.filter(u => {
         return u.email !== user.email
      })
   }
}

const admin = new Admin('admin@gmail.com', 'admin');

const userOne = new User('ponnu@gmail.com', 'ponnu');
const userTwo = new User('sumit@gmail.com', 'sumit');
let users = [userOne, userTwo, admin];

