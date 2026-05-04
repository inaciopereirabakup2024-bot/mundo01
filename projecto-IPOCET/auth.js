// IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// CONFIG (cola aqui o teu)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID",
  appId: "SEU_APP_ID"
};

// INIT
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// CADASTRO
window.register = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("msg").innerText = "Conta criada!";
    })
    .catch(error => {
      document.getElementById("msg").innerText = error.message;
    });
};

// LOGIN
window.login = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("msg").innerText = "Login feito!";
    })
    .catch(error => {
      document.getElementById("msg").innerText = error.message;
    });
};

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    document.getElementById("msg").innerText = "Saiu da conta!";
  });
};