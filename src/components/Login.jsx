import React from 'react';
import '../wwwroot/css/Login.css';
import HttpRequest from '../wwwroot/HttpUtils/HttpRequest';

export const Login = () => {

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    const loginBtnClick = (e) => {
        console.log(e);
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                signupBtn.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    };

    const singUpBtnClick = (e) => {
        console.log(e);
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                loginBtn.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    };

    const loginSubmit = () => {

        HttpRequest.httpPost("https://localhost:5001/api/Login/login", {
            Email : document.getElementById('emailLogin').value,
            Senha : document.getElementById('senhaLogin').value})
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("jwt", response.jwtToken);
            window.location = "/";
        });
    }

    const singUpSubmit = () => {

        HttpRequest.httpPost("https://localhost:5001/api/Usuario/criar",
        {
            Nome : document.getElementById('nomeCadastro').value,
            Email : document.getElementById('emailCadastro').value,
            Senha : document.getElementById('senhaCadastro').value
        });
    }

    return (
        <>
           <div class="form-structor">
                <div class="signup">
                    <h2 class="form-title" id="signup" onClick={e => singUpBtnClick(e.target)}><span>or</span>Sign up</h2>
                    <div class="form-holder">
                        <input type="text" class="input" placeholder="Nome" id="nomeCadastro" />
                        <input type="email" class="input" placeholder="Email" id="emailCadastro"/>
                        <input type="password" class="input" placeholder="Senha" id="senhaCadastro"/>
                    </div>
                    <button class="submit-btn" onClick={singUpSubmit}>Sign up</button>
                </div>
                <div class="login slide-up">
                    <div class="center">
                        <h2 class="form-title" id="login" onClick= {e => loginBtnClick(e.target)}><span>or</span>Log in</h2>
                        <div class="form-holder">
                            <input type="email" class="input" placeholder="Email" id="emailLogin"/>
                            <input type="password" class="input" placeholder="Password" id="senhaLogin"/>
                        </div>
                        <button class="submit-btn" onClick={loginSubmit}>Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}
