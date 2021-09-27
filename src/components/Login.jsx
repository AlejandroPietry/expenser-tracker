import React from "react";
import "../wwwroot/css/App.css";
import HttpRequest from "../wwwroot/HttpUtils/HttpRequest";

export const Login = () => {
  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");

  const loginBtnClick = (e) => {
    console.log(e);
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtn.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  const singUpBtnClick = (e) => {
    console.log(e);
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtn.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  async function loginSubmit(){
    let response = await HttpRequest.httpPost("https://localhost:5001/api/Login/login", {
      Email: document.getElementById("emailLogin").value,
      Senha: document.getElementById("senhaLogin").value,
    });

    let data = await response.json();
    console.log("json response ", data)
    localStorage.setItem("jwt", data.jwtToken);
    window.location = "/";
  };

  async function singUpSubmit() {
        var response = await HttpRequest.httpPost("https://localhost:5001/api/Usuario/criar", {
          Nome: document.getElementById("nomeCadastro").value,
          Email: document.getElementById("emailCadastro").value,
          Senha: document.getElementById("senhaCadastro").value,
        });

        let data = await response.json();
  };

  return (
    <>
    <div class="login-wrap">
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sing Up</label>
        <div class="login-form">
            <div class="sign-in-htm">
                <div class="group">
                    <label for="user" class="label">Email</label>
                    <input id="user" type="text" class="input" id="emailLogin"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Senha</label>
                    <input id="pass" type="password" class="input" data-type="password" id="senhaLogin"/>
                </div>
                <div class="group">
                    <input id="check" type="checkbox" class="check" checked />
                    <label for="check"><span class="icon"></span> Manter logado!</label>
                </div>
                <div class="group">
                    <input type="submit" class="button" value="Enter" onClick={loginSubmit}/>
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                    <a href="#forgot">Esqueceu a senha?</a>
                </div>
            </div>
            <div class="sign-up-htm">
                <div class="group">
                    <label for="user" class="label">Nome do usuário</label>
                    <input id="user" type="text" class="input" id="nomeCadastro"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Email</label>
                    <input id="pass" type="text" class="input" id="emailCadastro"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Senha</label>
                    <input id="pass" type="password" class="input" data-type="password" id="senhaCadastro"/>
                </div>
                {/*<div class="group">
                    <label for="pass" class="label">Repetir senha</label>
                    <input id="pass" type="password" class="input" data-type="password" />
                </div>*/}
                <div class="group">
                    <input type="submit" class="button" value="Cadastrar" onClick={singUpSubmit}/>
                </div>
            </div>
        </div>
    </div>
</div>
    </>  
  );
};
