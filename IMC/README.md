# Calculadora-IMC
Criei uma calculadora de Índice de Massa Corporal (IMC) que a partir do seu peso e sua altura indica se você está em um nível de 
magreza, normal, sobrepeso, obesidade ou obesidade grave. Criei a interface com HTML e CSS e utilizei JS para criar o código que calcula o IMC;

Linguagens Utilizadas: HMTL, CSS e JS;

Na interface se encontram dois inputs em um formulário, lá você irá informar seu peso e sua altura, 
a partir daí ao clicar no botão calcular irá se inciar uma função do JS ativada pelo click do botão, 
essa função pega os valores do input através do document.querySelector e element.value, e apartir desses
valores a função calcula o IMC pela formula: peso / (altura^2). Sabendo o valor do IMC a função irá definir
se o resultado te define como magreza, normal, sobrepeso, obesidade ou obesidade grave. As duas informações serão exibidas 
em um p localizado abaixo do formulário através do element.innerHTML;
