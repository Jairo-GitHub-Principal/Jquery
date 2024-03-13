$(document).ready(function(){


     // $('.ex1').css({background:"black",color:"white"}); //teste de funcionammmento 

     // evento .click detecta um unico click do mmouse

     // obs: .click esta deprecated use .on("click") ou .trigger("click")
    //  $('.ev1').click(function(){
    //     $(this).css("background","#ccc");
    //  });


    // criar uma variavel de scopo global para ser acessada de dentro de qualquer escopo 
    var ex = $('.ex1'); // selecionei o elemento na aarvore Dom e coloquei dentro de uma variavel
     // evento usado no lugar o .click
     $('.ev1').on("click",function(){
        $(this).css("background","red");// o this aqui ele se refere ao elemento selecionado '.ev1'
        ex.text("Voce Clicou");
     });

    
    
     // double click
     $('.ev2').on("dblclick",function(){
        $(this).css("background","darkred");// o this aqui ele se refere ao elemento selecionado '.ev1'
        ex.text("Voce deu 2 clicks");
     });

     
     
     // focus
     $('.ev3').on("focusin",function(){
        $(this).css({background:"white", border:"solid 5px balck"});


        ex.text("vc deu focu no input");
     }).on("focusout",function(){
        ex.text("vc tirou o  focu do input");
     });


     // evento de passar o mouse ou mouse hover
     // passar o mouse sobre ummm elemento e o elemmento reagir a esse evento
     $('.ev4').hover(function(){
        $(this).css({background:"DarkOrange",color:'white'});
        ex.text("vc passou o mouse");
     });

    

     // evento de apertar e soltar o botão do mouse
     $('.ev5').on("mousedown",function(){
        $('.ev5').css({background:"DarkKhaki",color:'Yellow'});
        ex.text("vc apertou o botão do mouse no elem ev5 ");
     }).on("mouseup",function(){
        $('.ev5').css({background:"black",color:'white'});
        ex.text("vc soutou o botão do mouse no elem ev5 ");
     });

     // evento de apenas entrar e sair de umm elemmento usando o mouse

     // evento de entrada e saida do mouse
     var a = 0;
     $('.ev6').on("mouseenter",function(){// entrada do mouse
        // incrementar o a
        a+=1 // equivale a a=a+1
        $(this).css({background:"Gold",color:'red'});
        ex.text("vc entrou comm  o mouse "+a);
     }).on("mouseleave",function(){ // saida do mouse
        $('.ev6').css({background:"black",color:'white'});
        ex.text("vc saiu commm   o mouse ");
     });

     // evento mouseover

     var b = 0;
     $('.ev7').on("mouseover",function(){// entrada do mouse
        // incrementar o a
        b+=1 // equivale a a=a+1
        $(this).css({background:"IndianRed",color:'white'});
        ex.text("mouse over "+b);
     }).on("mouseleave",function(){ // saida do mouse
        $(this).css({background:"black",color:'white'});
        ex.text("Mouse leave ");
     });


     $('.ev8').on("mousemove",function(evt){
        var localx=evt.pageX;
        var localy=evt.pageY;
        $(this).css({background:"LightSalmon", colo:"white"})
        ex.text("Movimento X: "+localx+" - Movimento Y: "+localy);

     }).on("mouseleave",function(){ // saida do mouse
        $(this).css({background:"black",color:'white'});
        ex.text("fim do movimento do mouse com mouseLeave ");
     });








});