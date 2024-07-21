"Use strict";

const SignupBtn = document.getElementById('initialSignupBtn');
const OriginalLogin = document.querySelector('.originalLogin');
const OriginaLoginBg = document.querySelector('.loginBg');

const OriginalSignup = document.querySelector('.originalSignup');
const OriginalSignupBg = document.querySelector('.signupBg')

const newLogin = document.querySelector('.newLogin');
const newLoginBg = document.querySelector('.newloginBg');

const newSignup = document.querySelector('.newSignup');
const newSignupBg = document.querySelector('.newSignupBg')

const newLoginBtn = document.querySelector('.newSigninBtn');


SignupBtn.addEventListener('click',function(){

    OriginalLogin.style.display = 'none';
    OriginalSignup.style.display = 'none';

    // document.getElementsByName('body').style.display = 'flex';
    

    newLogin.style.display = 'flex';
    // newLogin.style.margin = '0 0 0 -0.2vw';

    // newSignup.style.margin = '0 -0.2vw 0 0';
    newSignup.style.display = 'flex';

    document.querySelector('.main2').style.display = 'flex'

    OriginaLoginBg.style.height = '0';
    OriginaLoginBg.style.width = '0';

    OriginaLoginBg.classList.add('newLoginBgColor');
    OriginalSignupBg.classList.add('newSignupBgColor')
    document.querySelector('.main').style.height = '0';
    document.querySelector('.main').style.backgroundColor = '#CBCBCB';

    OriginaLoginBg.style.backgroundColor = '#CBCBCB';
    newLoginBg.style.height = '100vh';
    newLoginBg.style.width = '50vw';
    // newLoginBg.style.margin = '0';
    // newLoginBg.style.padding = '0';

    OriginalSignupBg.style.backgroundColor = '#c41d3e';
    newSignupBg.style.height = '100vh';
    newSignupBg.style.width = '50vw'

    OriginaLoginBg.display = 'none';
    OriginalSignupBg.display = 'none';

    // newSignupBg.style.margin = '0'
    // newSignupBg.style.padding = '0'
})

newLoginBtn.addEventListener('click', function(){
    console.log('clicked')
    newLogin.style.display = 'none';
    newSignup.style.display = 'none';
    
    OriginalLogin.style.display = 'flex';
    OriginalSignup.style.display = 'flex';

    // document.getElementsByName('body').style.display = 'flex';

    document.querySelector('.main2').style.display = 'none'

    OriginaLoginBg.style.height = '100%';
    OriginaLoginBg.style.width = '50%';

    // OriginaLoginBg.classList.add('newLoginBgColor');
    // OriginalSignupBg.classList.add('newSignupBgColor')
    document.querySelector('.main').style.height = '100%';
    document.querySelector('.main').style.backgroundColor = '#c41d3e';

    OriginaLoginBg.style.backgroundColor = '#c41d3e';
    newLoginBg.style.height = '0';
    newLoginBg.style.width = '0';
    // newLoginBg.style.margin = '0';
    // newLoginBg.style.padding = '0';

    OriginalSignupBg.style.backgroundColor = '#CBCBCB';
    newSignupBg.style.height = '0';
    newSignupBg.style.width = '0'

    OriginaLoginBg.display = 'flex';
    OriginalSignupBg.display = 'flex';

})