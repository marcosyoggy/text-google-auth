  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"

  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
  
  import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyBV1np8YuEYE7qfwB8UmJicYvF1FgSXCr8",
    authDomain: "study-auth-d9beb.firebaseapp.com",
    projectId: "study-auth-d9beb",
    storageBucket: "study-auth-d9beb.appspot.com",
    messagingSenderId: "52499552339",
    appId: "1:52499552339:web:a403aa1deaffbad6b28ea6",
    measurementId: "G-3461DS5YYZ"
  }

  const app_Ref = initializeApp(firebaseConfig)
  const db_Ref = getFirestore(app_Ref)
  const auth_Ref = getAuth(app_Ref)
  const provider_Ref = new GoogleAuthProvider
  const coll_Ref = collection(db_Ref, 'mensagem-teste')

  














const footer_Main = document.querySelector('[data-js="footer-main"]')
const main_Content = document.querySelector('[data-js="main-content"]')
const div_El01 = document.querySelector('[data-js="div_El01"]')
const div_El02 = document.querySelector('[data-js="div_El02"]')
// const div_El03 = document.querySelector('[data-js="div_El03"]')
const open_Button = document.querySelector('[data-js="open-button"]')
const close_Button = document.querySelector('[data-js="close-button"]')
// const hide_Button03 = document.querySelector('[data-js="hhide-button03"]')




const element_H6 = document.querySelector('[data-js="element-h6"]')
const exist_Or_Not = element_H6


const first_Panel = document.querySelector('[data-js="showed-panel"]')
const hide_Panel = document.querySelector('[data-js="hide-panel"]')
const button_Sparkx = document.querySelector('[data-js="hide-button"]')

const divs = [...document.querySelectorAll('.panel')]
console.log(divs)

button_Sparkx.addEventListener('click', e => {
  console.log(e.target)

  divs.forEach( item => {
    item.getAttribute === null 
      ? item.hidden = true
      : null
  })

exist_Or_Not ? console.log('SIMMMMMMMMM') : console.log('NAOOOOOOOOOOOO')
console.log('Referencia do elemento:', exist_Or_Not)
  console.log(first_Panel.getAttribute('hidden'))
  console.log(hide_Panel.getAttribute('hidden'))
  first_Panel.hidden = true
  hide_Panel.hidden = false
})













































const popup = async () => {
  await signInWithPopup(auth_Ref, provider_Ref)
}

const open_Popup = e => {
  const btn = e.target
  
  console.log('Usu´rio Logado!!!! e Tela n°2 `hidden`!!!')
  div_El02.style.display = 'none'
  div_El01.style.display = 'flex'

  div_El01.innerHTML = `<h4>Usuário Logado!!!!</h4>`

  btn.className === 'open_Button' 
    ? popup()
    : null
}

const log_Out = e => {
  const btn = e.target
  console.log(btn)

  const sign_Out = async () => {
    try {
      const log_Out = await signOut(auth_Ref)
      console.log('Objeto sign_Out!!!', log_Out)
      console.log('Usuário Deslogado!!! e Tela n°1 `hidden`!!!')
      
      div_El02.innerHTML = `<h4>Usuário Deslogado!!!!</h4>`
  
      div_El01.style.display = 'none'
      div_El02.style.display = 'flex'

    } catch (e) {
      console.log(e.message)
    }
  }

  sign_Out()
}







onAuthStateChanged(auth_Ref, (user) => {
  console.log('Retorno do StateChanged!!!', user)
  
  open_Button.addEventListener('click', open_Popup)
  
  close_Button.addEventListener('click', log_Out)
});


/*
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
*/















//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const body = document.querySelector('body')

const regex = /(?:key)/

const key_Name = keyName => {
  const only_Key = keyName.replace(regex, '')
  console.log('Exibe only_Key:', only_Key)
  return only_Key
}

console.log('Yesye da função Regex: ', key_Name('keyMarcos'))


body.addEventListener('keyup', (e) => {
  const keyName = e.code;
  console.log('Tecla pressionada:', typeof keyName + keyName)

  const onlyKey = keyName.replace(regex, '')
  console.log('Replace dentro do evento: ',onlyKey )

  // keyName === 'PageDown' 
  //   ? console.log('Ir para a próxima página!!!') 
  //   : console.log('Você pressionou a tecla:', key_Name(keyName))
})


const str = 'key'
const str2 = 'keyB'
const str3 = 'marcosferreiradekeylima'
// const regex = /(?:key)/
// const test = regex.test(str)
// console.log('String test+regex:', test)

const match_Method = str2.match(regex);
console.log('Método Match:', match_Method)

const new_Str = str2.replace(regex, '')
console.log('Nova string com replace:', new_Str)


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX























































  // const show_DB = async () => {
  //   const db = await getDocs(coll_Ref, 'mensagem-teste')
  //   db.docs.forEach( item => console.log(item.data()))//R: object
  // }
  // show_DB()//Retorna o objeto do data-base;

// console.log(div_Block_Main)
// console.log(main_Content.children)

// div_Block_Main.forEach( item => console.log('NodeList: ',item))//R: Itens
// footer_Block.forEach( item => console.log('NodeList: ',item))//R: Itens
// main_Content.forEach( item => console.log('HTMLCollection: ',item))//R: Error


// const show_Buttons = (btn) => {
//   div_Block_Main.forEach((item, index) => {
//     item.classList === 'data="hide-element"' 
//       ? item.style.display = 'none' 
//       : null
//   })

// }

// footer_Main.addEventListener('click', e => {
//   const clicked_Element = e.target
//   // console.log(clicked_Element)

//   show_Buttons(clicked_Element)

// })

