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
            axios.get(dominioResourceServer+url, {} ).then(function(response) {
                resolve(response);
            }).catch(function(error) {
               reject(error);
            });
        }
  });
}

export function authHttpGet(url) {
    return new Promise(function(resolve, reject) {
        httpGet(url).then(function(response) {
             resolve(response);
        }).catch(function(error) {
            if (error.response && error.response.status === 401 && error.response.data.error === "invalid_token"){
                refreshToken().then(function(response) {
                    httpGet(url).then(function(response) {
                        resolve(response);
                    }).catch(function(error) {
                        reject(error);
                    });
                }).catch(function(error) {
                    reject(error);
                });
            }else{
                reject(error);
            }
        });
    });
}

function refreshToken(){
    return new Promise(function(resolve, reject) {

        var session_url = dominioAuthenticationServer+'/oauth/token';
        var uname = 'USER_CLIENT_APP';
        var pass = 'password';

        let jwtRefreshToken = localStorage.getItem("JWT-Refresh");

        var bodyFormData = new FormData();
        bodyFormData.set('refresh_token', jwtRefreshToken);
        bodyFormData.set('grant_type', 'refresh_token');

        if (jwtRefreshToken === null){
            reject(Error("Local storage jwt refresh es nulo"));
        }else{
            axios.post(session_url, bodyFormData, {
                auth: {
                    username: uname,
                    password: pass
                }
            }).then(function(response) {
                localStorage.setItem('JWT', response.data.access_token);
                localStorage.setItem('JWT-Refresh', jwtRefreshToken);
                resolve(response);
            }).catch(function(error) {
                console.log(error);
                reject(error);
            });
        }
    });
}

export function httpPost(url,data) {
    return new Promise(function(resolve, reject) {
        let authToken = localStorage.getItem("JWT");
        if (authToken === null) {
            axios.defaults.headers.common.Authorization = null;
            reject(Error("Local storage jwt es nulo"));
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
            axios.post(dominioResourceServer+url, data).then(function(response) {
                resolve(response);
            }).catch(function(error) {
                console.log(error);
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
            localStorage.setItem('JWT-Refresh', response.data.refresh_token);
            resolve(response);
        }).catch(function(error) {
            console.log(error);
            reject(error);
        });
    });
}