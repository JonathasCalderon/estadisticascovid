function ingresar()
{
    var user=document.getElementById("usuario");
    var pass=document.getElementById("contrasenia");
    if(user.value=="Gerente" && pass.value=="1234")
    {
        window.location.href="index.html";
    }
    else
    {
            alert("Los datos no son Correctos");
    }
}