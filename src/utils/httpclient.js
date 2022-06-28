const API = process.env.REACT_APP_API
const API_TOKEN = process.env.REACT_APP_API_TOKEN
export function HttpClient(path){
    return fetch(API + path,{
        headers: {
            authorization: "Bearer" + API_TOKEN ,
            "Content-type": "application/json;charset=utf-8"}
    }).then(res => res.json())

}