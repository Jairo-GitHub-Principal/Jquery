$(function(){

    $('.titulo').click(function(){
        var conteudo = $(this).parent().find('.conteudo');/**O método parent() retorna  o elemento ancestrl do elemento selecionado.
        Um ancestral é um pai, avô, bisavô e assim por diante. */
        
        if(!conteudo.hasClass('show')){
            // seleciono a classe .caixa, no elemento que eu acesso atraves de .caixa procuro pela class .show
            // quando encronta-la chamo a função .slidUp() com atributo 'fast' e ainiinhamos nela uma função, pra fazer a class .show virar hide e esconder o conteudo atual   
            $('.caixa').find('.show').slideUp('fast',function(){
                 $(this).addClass('hide').removeClass('show');// no elemento selecionado adicionamos a classe hide e removemos a classe show
            });

            /** no codigo acima nos removemos a class show, e escondemos o conteudo, ja no codigo abaixo
             * vamos adicionar a clas show no conteudo selecionado, hemoveremos a class hide, para que o nosso conteudo 
             * aparaeça atraves de um efeito sliidedown
             */
            conteudo.slideDown('fast',function(){
                $(this).addClass('show').removeClass('hide');
            });
        }
    })
});