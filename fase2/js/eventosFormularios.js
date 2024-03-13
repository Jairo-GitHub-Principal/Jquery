$(document).ready(function () {
    // vai percorrer todas as label e a cada label percorrido disparara um alert,informando a label atual

    // $('label').each(function(index){ 

    //     alert(index );
    // });

    // agora vamos percorrrer todos os elementos comm a classe place

    // implementaçã odo placeHolder
    // $('.place').each(function () {
    //     var place = $(this).attr('title'); // pega o atributo title que pertence ao elemento encapsulado "selecionado" representado pela .place, e coloca seu valor dentro da var place
    //     var input = $(this); // pega todo o elemento encapsulado "selecionado" que é o .place e o atribui como valor de input, obs.: esse valor na verdade é um objeto, ele tem varios atributos


    //     input
    //         .val(place)// passa os valores da var place para a var input, o valor que sera passado é o atributo title, agora no input sera exibido o atributo title
    //         .css({ color: '#ccc' })// atribuo a esso atributo title, um estilo, uma  cor cinza 
    //         .focusin(function () { // quando eu der focu na input, ou seja: quando eu selecionar a input com o mouse, chamo a function implementado dentro do função .focusin() e atribuo os seguintes valores aos atribulto do input
    //             input
    //                 .css({ color: "#000" }); // adiciona um cor preto para  o conteudo que sera digitado dentro da input
    //             if (input.val() == place) { // se o valor da input, for == ao valor de place, eu faço o que mando a linha de codigo abaixo
    //                 input.val("");// limpo a imput, ou seja quando eu clicar na input o valor "texto" que aparece nela some, e:
    //                 // assim ficara visivel somento o que eu apartir dali digitar, 
    //             }
    //         }).focusout(function () { // quando sair do input
    //             if (input.val() == "") { // e caso não inserir nenhum valor no mesmo, não digitar nada, ela retornara aos valores padrão 
    //                 input.css({ color: '#ccc' }); // cor padrão do place holder
    //                 input.val(place); // vallor padrão do place holder
    //             }
    //         });


    // });


    // // função de teclado, key press tem um atraso de um precionamento de tecla, o valor de uma tecla so aparece quando a proxima tecla for precionada, e esse evento não é acionado por todas as teclas do teclado
    // // var ex = $('.ex1');
    // // $('.key').keypress(function () {
    // //     ex.text($(this).val());

    // // });

    // // função de teclado, keyDown tem um atraso de um precionamento de tecla, o valor de uma tecla so aparece quando a proxima tecla for precionada, e esse evento não é acionado por todas as teclas do teclado


    // // var ex = $('.ex1');
    // // $('.key').keydown(function () {  
    // //     ex.text($(this).val());

    // // });

    // // função de teclado, keyUp aciona o evento em tempo real, melhor opção para fazer o databind

    // var ex = $('.ex1'); // seleciona a class ex1 e altomaticamente acesso todos as atributos dentro do elemento onde ela se encontra
    // $('.ev1').focus(function () { // seleciona a classe ev1 e altomaticamento tenho acesso a tudo dentro do conponente onde ev1 se encontra
    //     ex.text($(this).attr('title'))// aqui estou pegando o atributo title que esta dentro do elemnto input o qual, a classe ev1 foi uusado para selecioa-lo,e estou atribuindo o valor do atributo title de ev1, para ser o valor do atributo .val() do emento div que selecionamos atraves da classse ex1

    // }).keyup(function () { // dar focu no proximo campo
    //     if ($(this).val() == 'pontocom') {
    //         $('.ev2').focus();
    //     }
    // });

    // $('.ev1').blur(function () {
    //     ex.text("saida do campo " + $(this).attr('name'));
    // });

    // // evento change, so despara quando ouver uma mudança no valor que foi atribuido dentro do elemento que ele (change) estiver ouvindo
    // // obs.: eu entro na input, digiito um nomme, saio da inpuut, se eu voltar na mmesma input e alterar o valorr que eu 
    // // ja tinha atrribuido ai sim vai disparar o evento change
    // // o event chage pode entrar en conlito com outros eventos caso seja usado o mesmo seletor para atribui-los a um elemento
    // $('.ev2').change(function () {
    //     ex.text("campo alterado " + $(this).val());
    // });

    // função que seleciona um texto dentro de uma text area ou input

    $('.selecionar').click(function(){
        $('.ev3').select();
        $("form").submit(function(){// criar um bloqueio para que ao pressionar o botão selecionar,o formulario  não faça um submit
            return false;
        });
    });

    // seleciona o texto, quando clicar dentro do elemento onde eesta o texto

    $(".ev3").click(function(evt){
        evt.target.select();
    })
   

});