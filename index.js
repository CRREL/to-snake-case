module.exports = function(str, upper){
  var snake = str.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
  return upper === true ? snake.toUpperCase() : snake;
}