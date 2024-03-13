$(function(){

    var ex = $('.ex1');
    var button = $('.fadeoutin'); // aqui encapsulamos  elemento button usando o atributo type, por isso usamos a expressão :button
    
    button.click(function(){
        ex.fadeOut("slow")
        button.css({marginTop:'50px'})
    }).dblclick(function(){ // aqui encadiamos um dobleclick para fazermos o fadeIn() ou aparecer
        ex.fadeIn("slow");
        button.css({marginTop:'10px'})
    });

    // poderiamos fazer o fadeIn() assim: como no codigo commentado abaixo

    // button.dblclick(function(){ // aqui encadiamos um dobleclick para fazermos o fadeIn() ou aparecer
    //     ex.fadeIn("slow");
    // });

    // obs: se usarmos o .click pro fadein e fadeout ele o fadein e fadeout sera acionado simultaneammente e agira commo
    // um toggle


    // novo efeito para desvanecer usando o fadeTo que mmexe na opacidade do elemmento

     var botao2 = $('.fadeto');

    botao2.click(function(){  // esse efeito vai fazer apenas o desvanecimmento para menos ou para mais, dependendo de como tiver o estado atual do elemento
        ex.fadeTo("slow",0.5);
    });


    // fadeToggle faz os dois estados, o desvanecimento(desaparecer) e o vanecimento(surgimmento)

    var botao3 = $('.fadetoggle');

    botao3.click(function(){  // esse efeito vai fazer aparecer e desaparecer
        ex.fadeToggle("slow");
    });


    // outra forma fadeTo e fadeToggle

    var botao4 = $('.fadeto2');
    var ex2 = $('.ex2');
    botao4.click(function(){
        // usar cllback dentro do fadeTo, trata-se de adiicionarr uma função dentro fadeTo 
        ex.fadeTo(2000, 0.2,function(){
            ex2.fadeTo('slow',0.5)
        });
       
    });

    
});