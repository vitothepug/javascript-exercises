let tempC
let tempF

const ftoc = function(tempF) {
  let tempC=''
  tempC = ((tempF-32)/1.8)
  tempC = tempC.toFixed(1);
  return Number(tempC)
};

const ctof = function(tempC) {
  let tempF=''
  tempF = ((tempC*1.8)+32);
  tempF = tempF.toFixed(1);
  return Number(tempF)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
