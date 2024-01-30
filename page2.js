"use strict"
const params = new URLSearchParams(location.search);
const formInfoContainer = $(".form-values");

formInfoContainer.innerHTML = `
<p class=para>Name is ${params.get("name")}</p>
<p class=para>Email is ${params.get("email")}</p>
<p class=para>Age is ${params.get("age")}</p>
<p class=para>Gender is ${params.get("gender")}</p>

`