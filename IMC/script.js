function imc() {
    var peso = document.querySelector(".peso");
    var altura = document.querySelector(".altura");
    var pesoN = Number(peso.value);
    var alturaN = Number(altura.value);
    var calculo = Math.round(pesoN / (alturaN**2));
    if (calculo <= 18.5) {
      var nivel = "Baixo peso (OMS, 2000)";
    } else if (18.5 < calculo && calculo <= 24.9) { 
      var nivel = "Eutrofia (OMS, 2000)";
    } else if (24.9 < calculo && calculo <= 29.9) { 
      var nivel = "Sobrepeso (OMS, 2000)";
    } else if (29.9 < calculo && calculo <= 39.9) { 
      var nivel = "Obesidade (OMS, 2000)";
    } else {
      var nivel = "Obesidade grave - II e III (OMS, 2000)";
    }
    peso.value = ""
    altura.value = ""
    document.getElementById("texto").innerHTML = calculo + " / " + nivel;
    return imc
  };
  
  document.getElementById("enviar").addEventListener("click", imc);