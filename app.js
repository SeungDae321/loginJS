const id = document.querySelector('#id')
const password = document.querySelector('#password')

const memberPage = document.querySelector('.memberPage');
const loginPage = document.querySelector('.loginForm')

let validID = '1';
let validPassword = '1';

const button = document.querySelector('button');
button.addEventListener('click',(evt)=>{
    id.value === validID  && password.value === validPassword ?
    succeedLogic():
    faildLogic()
    evt.preventDefault()
})

const succeedLogic = () => {
    alert('logged in perfectly');
    memberPage.classList.toggle('block');
    loginPage.classList.toggle('block');
}

const faildLogic=()=>{
    alert('invalid ID or password');
    id.value= '';
    password.value = '';
}

const logout = document.querySelector('.logout')
logout.addEventListener('click',()=>{
    confirm('Do you want to logout?')?
    memberPage.classList.toggle('block')&&loginPage.classList.toggle('block'):
    null;
})