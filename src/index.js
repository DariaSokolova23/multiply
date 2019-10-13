module.exports = function multiply(first, second) {
  var parsedFirst= parseInt(first,10);
  var parsedSecond= parseInt(second,10);
  var totalResult=parsedFirst*parsedSecond;
  //создадим массив для разбивания больших чисел
  var BigArr=[first]
  return String(totalResult);
}
