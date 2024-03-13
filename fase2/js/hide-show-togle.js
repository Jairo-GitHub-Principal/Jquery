$(function(){


    var ex = $('.ex1');
    // fazer desaparecer um elemento usando um evento de click
    $('.ev1').click(function(){
        ex.hide('slow') // usar um atributo para o tempo de desaparecimento do elemento
    });
    // fazer aparecer um elemento usando um evento de click
    $('.ev2').click(function(){
        ex.show(1500) // usar um representação de tempo pra definiir o tempo do desaparecimento
    });

     // fazer aparecer e desaparecer um elemento usando um unico  evento de click

     $('.ev3').click(function(){
        ex.toggle('fast')
     });


     // usar o keyup para desparar os eventos de hide show e toggle

     $('.ev4').keyup(function(){
        var text = $(this).val();
        if(text =="hide"){
            ex.hide('slow') // usar um atributo para o tempo de desaparecimento do elemento
         }else if(text == 'show'){
            ex.show('slow') // usar um atributo para o tempo de desaparecimento do elemento
        } else if(text == 'toggle'){
            ex.toggle('fast')
        }
     })
});