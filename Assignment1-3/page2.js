"use strict"
const formVals = new URLSearchParams(location.search);
const formInfoContainer = $(".form-values");

const infoValues = () =>{
        if (formVals.get("name") === null || formVals.get("email") === null || formVals.get("age") === null || formVals.get("gender")=== null){
                formInfoContainer.innerHTML = "";
        }
        else{
                formInfoContainer.innerHTML= `
                <p class=para>Name => ${formVals.get("name")}</p>
                <p class=para>Email => ${formVals.get("email")}</p>
                <p class=para>Age => ${formVals.get("age")}</p>
                <p class=para>Gender => ${formVals.get("gender")}</p>
        `
        }
}
infoValues();

