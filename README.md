# Case-RUV

JavaScript:

Quando o player de musica é acionado, a função "counter" é chamada, trazendo como parâmetro um nÚmero de 0 a 3, representando cada um dos 4 players. 
Essa função verifica se o audio já foi iniciado nesse acesso ao site e, caso negativo, soma uma vez ao contador de plays. 
Essa funcação também altera a dom(árvore de elementos) do html, mostrando ao usuário a quantidade de vezes que o audio foi tocado. 
Caso o usuário escute o podcast até o fim, a função "reset" é acionada, também recebendo com parâmetro um número de 0 a 3 para identificar o player, 
semelhante a função anterior, tendo como objetivo desbloquear a verificação, para, caso o usuario escute novamente o audio, a função "counter" some novamente ao contador.


A variável que armazena o número de visualizações é salva no armazenamento local do navegador, através do metodo localStorage. 
O armazenamento ocorre dentro da função counter, e o código, ao ser iniciado, verifica se existe algum dado salvo no localStorage. 
Assim, caso o usuário feche a pagina e acesse novamente o contador ainda terá guardado quantas vezes o audio foi escutado.

 

FONTES:

fonte "Poppins": https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap

logo Instagram: https://logodownload.org/instagram-logo/

logo Twitter: https://logodownload.org/twitter-logo/

logo Youtube: https://www.flaticon.com/br/icone-gratis/youtube_1384060

logo Facebook: https://commons.wikimedia.org/wiki/File:Facebook_Logo_(2019).png

logo Gmail: https://logodownload.org/gmail-logo/

logo telefone: https://www.clipartmax.com/middle/m2K9A0b1H7b1K9A0_icon-telephone-png/

imagem Jô Soares: https://www.noticiasaominuto.com.br/fama/1300570/jo-soares-para-tas-sobre-sexualidade-somos-dois-viados-velhos

imagem Anitta: https://www.areavip.com.br/famosos/anitta-faz-grande-anuncio-me-sinto-pronta/

imagem Fiuk: http://gshow.globo.com/novelas/aquele-beijo/personagem/agenor-fiuk.html

imagem Whindersson: https://www.campograndenews.com.br/lado-b/diversao/fenomeno-na-internet-whindersson-nunes-volta-a-campo-grande-em-junho

imagem Letrux: https://www.correio24horas.com.br/noticia/nid/climao-de-despedida-letrux-encerra-turne-no-pelourinho/
