// Your code hfunf
function saturdayFun (activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (ne= '*') {
    return function (adjective="special") {
     return `You are ${ne}${adjective}${ne}!`
}
}

let Calculator = {
  add: function add(a,b){
  return a+b
  }
  
  subtract: function subtract(a,b){
  return a-b
  }
}
