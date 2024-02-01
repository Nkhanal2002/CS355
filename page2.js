"use strict"
const params = new URLSearchParams(location.search);
const formInfoContainer = $(".form-values");

const infoValues = () =>{
        if (params.get("name") === null || params.get("email") === null || params.get("age") === null || params.get("gender")=== null){
                formInfoContainer.innerHTML = "";
        }
        else{
                formInfoContainer.innerHTML+= `
                <p class=para>Name => ${params.get("name")}</p>
                <p class=para>Email => ${params.get("email")}</p>
                <p class=para>Age => ${params.get("age")}</p>
                <p class=para>Gender => ${params.get("gender")}</p>
        `
        }
}
infoValues();

