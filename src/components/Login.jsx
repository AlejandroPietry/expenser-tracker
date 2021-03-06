import React, { useContext } from "react";
import "../wwwroot/css/App.css";
import {useFormik } from 'formik';
import HttpRequest from "../wwwroot/HttpUtils/HttpRequest";
import alertToast from 'react-hot-toast';
import Url from "../wwwroot/HttpUtils/Url";
import { GlobalContext } from "../context/GlobalState";

export const Login = () => {
  
  const {setIdentity} = useContext(GlobalContext);
  
  console.log(useContext(GlobalContext));

  const formik = useFormik({
    initialValues: {
      emailLogin: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null,2));
    },
  });

  async function loginSubmit(){
    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById("senhaLogin").value;
    if(email.length < 1 || senha.length < 1)
      return alert('Preencher os campos corretamente!');

    let response = await HttpRequest.httpPost(Url.WebApi() + "api/Login/login", {
      Email: document.getElementById("emailLogin").value,
      Senha: document.getElementById("senhaLogin").value,
    });

    try{
      let data = await response.json();

      if(data.error){
        alertToast.error(data.errorMessage)
      }
      else{
        localStorage.setItem("jwt", data.jwtToken);
        setIdentity(data.jwtToken, data.nome)
        window.location = "/menu";
      }
    }
    catch(e){
      console.log(e)
    }
  };

  async function singUpSubmit() {
        
    try{
        var response = await HttpRequest.httpPost(Url.WebApi() + "api/Usuario", {
          Nome: document.getElementById("nomeCadastro").value,
          Email: document.getElementById("emailCadastro").value,
          Senha: document.getElementById("senhaCadastro").value,
        });
          let data = await response.json();

          if(data.error){
            alertToast.error(data.errorMessage);
          }
          else{
            alertToast.success("Cadastrado com sucesso!");
            setTimeout(function(){
              var loginLabel = document.getElementById('tab-1');
              loginLabel.click();
            }, 1000);
          }
        }
        catch(e){
          console.log(e)
        }      
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
                    <input id="user" type="email" class="input" id="emailLogin" onChange={formik.handleChange} value={formik.values.emailLogin}/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Senha</label>
                    <input id="pass" type="password" class="input" data-type="password" id="senhaLogin"/>
                </div>
                <div class="group">
                    <input id="check" type="checkbox" class="check" />
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
                    <label for="user" class="label">Nome do usu??rio</label>
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
