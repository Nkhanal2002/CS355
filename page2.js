"use strict"
const params = new URLSearchParams(location.search);
const formInfoContainer = $(".form-values");

const value =()=>{
    if (params.get("name") === "" || params.get("email")=== "" || params.get("age") === "" || params.get("gender") === ""){
        formInfoContainer.innerHTML = "";
    }
    else{
        formInfoContainer.innerHTML = `
        <p class=para>Name is ${params.get("name")}</p>
        <p class=para>Email is ${params.get("email")}</p>
        <p class=para>Age is ${params.get("age")}</p>
        <p class=para>Gender is ${params.get("gender")}</p>
`
    }
}
value();
