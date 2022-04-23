const firebaseConfig = {
    apiKey: "AIzaSyBPPjyuDV-fqWiPaU-CtTdjb-2KY10t5yI",
    authDomain: "contactform-67dba.firebaseapp.com",
    databaseURL: "https://contactform-67dba-default-rtdb.firebaseio.com",
    projectId: "contactform-67dba",
    storageBucket: "contactform-67dba.appspot.com",
    messagingSenderId: "611185699667",
    appId: "1:611185699667:web:a531dc92284c936e678fa6"
};

// ------- firebase initialize 
firebase.initializeApp(firebaseConfig);

// ------- refercence your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var namee = getElementVal("namee");
    var phonee = getElementVal("phonee");
    var datee = getElementVal("datee");

    console.log(namee);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}