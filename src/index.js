module.exports = function check(str, bracketsConfig) {
  let array = str.split('');  
  const stack = [];
  let isOneBreak = array.some(element => {
    const findConfig = bracketsConfig.find(elem => (element === elem[0] || element === elem[1]));
    if (findConfig[0] !== findConfig[1]) {
      if (element === findConfig[0]) {
        stack.push(element);        
      } else {
        if (stack.pop() !== findConfig[0]) {
          return true;
        }
      }
    } else {
      if (element === stack[stack.length-1]) {
        stack.pop();
      } else {
        stack.push(element);
      }
    }
  
    return false;
  });  
  return (!stack.length && !isOneBreak );
}
