function reverseNumberSum(limit) {
  var n = 12;
  while(n < limit) {
    if(n.toString()[0] !== '0' && n.toString()[n.toString().length - 1] !== '0') {
      var newN = n.toString();
      var inverseNewN = '';
      for(let i = 0; i < newN.length; i += 1) {
        inverseNewN += newN[newN.length - 1 - i];
      }
      if ((parseInt(inverseNewN) + n) % 2 !== 0 && (parseInt(inverseNewN) + n) < limit) console.log(n);
    }
    n += 1;
  }
}

reverseNumberSum(1000000);