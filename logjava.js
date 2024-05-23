
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHrOx-EqNkQb2Our5iCohUxpupm0P1bDc",
    authDomain: "last-try-e39bd.firebaseapp.com",
    projectId: "last-try-e39bd",
    storageBucket: "last-try-e39bd.appspot.com",
    messagingSenderId: "1075203210999",
    appId: "1:1075203210999:web:0d3ce45513d89eba935df2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const database = firebase.database()
const auth = firebase.auth()

//set up singup function
function signup() {
    //Get all your input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value

    var user_data = {
        email: email,
        username: username,
        last_login : Date.now(),

    }
    console.log(user_data)

    // Move on with Auth
    // auth.createUserWithEmailAndPassword(email, password)
    // .then(function() {

    //     var user = auth.currentUser

    //     // Add this to the datbase
    //     var databse_ref = database.ref()

    //     //create User data
    //     var user_data = {
    //         email: email,
    //         username: username,
    //         last_login : Date.now()
    //     }
    //     console.log(user_data)

    //     databse_ref.child('users/' + user.uid).set(user_data)


        // alert('User Created!!')
    // })
}

// // reference your own database
// var contactFormDB = firebase.database().ref('my-form')
// document.getElementById("---").addEventListener("","",)

// function submitForm(e){
//     e.preventDefault();

//     var user = getElementById("")
//     var pass = getElementVal("")
//     var email = getElementVal("msgContent")
//     var check = getElementVal("msgContent")

//     saveMessages(user, pass, email, check)
// }

// const saveMessages = (user, pass, email, check)=>{
//     var newMyForm = contanctFormDB.push();


//     newContactForm.set({
//         user : user,
//         pass : pass,
//         email : email,
//         check : check,


//     })



