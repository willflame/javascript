/**
 * Função responsável por iniciar o jogo
 */
function start() {
    $("#start").hide();

    $("#backgroundGame").append("<div id='player' class='animationPlayer'></div>");
    $("#backgroundGame").append("<div id='enemy1' class='animationEnemy1'></div>");
    $("#backgroundGame").append("<div id='enemy2' class='animationEnemy2'></div>");
    $("#backgroundGame").append("<div id='ally' class='animationAlly'></div>");
}