var btnLogin = document.getElementById("btnLogin");

firebase.auth().onAuthStateChanged(function(user){
    // console.log(user);
    // if (user) {      
    //     console.log("tenemos usuario");
    // }else {
    //     console.log("no tenemos usuario");
    // }
});

btnLogin.addEventListener("click", function(){
    event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');    
    firebase.auth().signInWithPopup(provider).then(function(datosUsuario){
        console.log(datosUsuario)
    }).catch(function(err){
        console.log(err)
    })
    console.log("el botón funciona!")    
})