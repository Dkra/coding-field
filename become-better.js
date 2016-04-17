function delayAndSay (time, msg) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      // value pass in to resolve is "Value return in feature"
      resolve(msg);
    }, time);
  });
}

delayAndSay(1000,'hey')
  .then(function(data) {
    console.log(data);
    return delayAndSay(2000,'man');
  },function(data) {
    console.log('resovle'+data);
  })
  .then(function(data) {
    console.log(data);
    return delayAndSay(2000,'yo');
  })
  .then(function(data) {
    console.log(data);
  });
