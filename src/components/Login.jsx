import React from 'react';
import '../wwwroot/css/Login.css';
export const Login = () => {

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    const loginBtnClick = (e) => {
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

    }

    const singUpSubmit = () => {
        console.log(document.getElementById('nomeCadastro').value)
        fetch("https://localhost:5001/api/Usuario/criar", {
            method: 'POST',
            body : JSON.stringify({
                Nome : document.getElementById('nomeCadastro').value,
                Email : document.getElementById('emailCadastro').value,
                Senha : document.getElementById('senhaCadastro').value
            })
        });
    }

    return (
        <>
           <div class="form-structor">
                <div class="signup">
                    <h2 class="form-title" id="signup" onClick={e => singUpBtnClick(e)}><span>or</span>Sign up</h2>
                    <div class="form-holder">
                        <input type="text" class="input" placeholder="Nome" id="nomeCadastro" />
                        <input type="email" class="input" placeholder="Email" id="emailCadastro"/>
                        <input type="password" class="input" placeholder="Senha" id="senhaCadastro"/>
                    </div>
                    <button class="submit-btn" onClick={singUpSubmit}>Sign up</button>
                </div>
                <div class="login slide-up">
                    <div class="center">
                        <h2 class="form-title" id="login" onClick= {e => loginBtnClick(e)}><span>or</span>Log in</h2>
                        <div class="form-holder">
                            <input type="email" class="input" placeholder="Email" />
                            <input type="password" class="input" placeholder="Password" />
                        </div>
                        <button class="submit-btn">Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}
