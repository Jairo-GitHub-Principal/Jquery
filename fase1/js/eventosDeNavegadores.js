
$(document).ready(function () {

         // esse codigo adiiciona uma imagem na tag <img/>   
        //$('img').attr("src", "./img/error2.jpg");

             
        // codigo que substituira uma imagem caso a mesma não carrregue

        // $('img1').error(function(){
        //      $('img').attr("src","./img/error2.jpg")
        // });

       
           
           


  

    // $('h2').css({color:"red"})


    // codigo equivalente ao codigo acima, Criado pelo chate Gpt
    //  $("img").on("error", function () {
    //     $(this).attr("src", "./img/error2.jpg");
    //   });
    // });


    
    // dimensionar um elemento para o tamanho da tela do dispositivo ou da viewport 
     $('img').width($(window).width()).height($(window).height());

    // // dimensionar um elemento para o tamanho da tela do dispositivo ou da viewport  
    // // isso acontecera atraves do codigo abaixo a cada vez  que a tela for redimencionada
    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height()); // esse funcionou
    });

    // seleciona  o body e atribúi uma altura fixa
    $('body').css({height:'1200px'});

    // ver o quanto a pagina foi rolada pra baixo pelo scrow
    $(window).scroll(function(){
        var topo = $(window).scrollTop(); // pega o valor de rolagem do scroll
        //alert(topo); // mostra o valor de rolagem do scroll

        if(topo > 100){
           
            $('img').fadeOut('1000');
            
        }else{
            $('img').fadeIn('1000');
        }
    });
    
    // fazer a imgaens sumir apos umm determminada rolagem de escrow para baixo

    



})