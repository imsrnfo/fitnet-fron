import axios from 'axios';

let dominioResourceServer = "http://localhost:8080";

export function httpGet(url) {
  return new Promise(function(resolve, reject) {
        let authToken = localStorage.getItem("JWT");
        if (authToken === null) {
            axios.defaults.headers.common.Authorization = null;
            reject(Error("Local storage jwt es nulo"));
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
            axios.get(dominioResourceServer+"/admins", {} ).then(function(response) {
                resolve(response);
            }).catch(function(error) {
               reject(error);
            });
        }
  });
}

let dominioAuthenticationServer = "http://localhost:8081";

export function login(username, password) {
    var session_url = dominioAuthenticationServer+'/oauth/token';
    var uname = 'USER_CLIENT_APP';
    var pass = 'password';

    var bodyFormData = new FormData();
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);
    bodyFormData.set('grant_type', 'password');

    return new Promise(function(resolve, reject) {
        axios.post(session_url, bodyFormData, {
            auth: {
                username: uname,
                password: pass
            }
        }).then(function(response) {
            localStorage.setItem('JWT', response.data.access_token);
            resolve(response);
        }).catch(function(error) {
            console.log(error);
            reject(error);
        });
    });
}