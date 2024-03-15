$(function(){

    var nav = $('.menu'); // seleciona o  elemento onde a classe menu se localiza, e tenho acesso a todos atribuutos e proprriedades desse elemento

    $(window).scroll(function () {  // seleciona a javela visivel do navegador
        if($(this).scrollTop()>150){ // compara se a rolagem do scroll é maior que 150, quando o resultado desse teste for vedadeiro, vai para linha de codigo abaixo
            nav.addClass('menu-fixo'); // aplica no nav, ou seja no elemento correspondente a classe .menu os valores da classe  .menu-fixo, que é um estiilo em css que fixa o menu no topo da pagina, tornando-o sempre visivel
        }else{ // quando o teste do if for falso, executa-se o codigo da linha abaixo
            nav.removeClass("menu-fixo"); // remove a classe .menu-fixo, do emento correspondente a classe .menu, e assim é removido todos os estiilos que fixa o menu no topo da pagina
        }
    });


   

});