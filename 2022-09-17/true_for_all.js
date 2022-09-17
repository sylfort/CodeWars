// Enumerable Magic #1 - True for All?
function all(arr, fun){
   return arr.filter(fun).length == arr.length ;
}