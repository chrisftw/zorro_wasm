import("./node_modules/zorro_wasm/zorro_wasm.js").then((z) => {
//   let zDecode = function(img_selector, type) {
//      const input = document.querySelector(img_selector);
//      const arrayBuffer = await file.arrayBuffer();
//     console.log('arrayBuffer', arrayBuffer);
//     const tmp = return zorro.decode_file_data(arrayBuffer);
//     console.log(tmp);
//     return tmp;
// //    return zorro.decode_file_data(arrayBuffer);
//   };

  // zorro.greet("WebAssembly");
  var Zorro = function Zorro(){
    var self = this;
    // this.readPng = function(pngPath, cb) {
    //   httpRequest = new XMLHttpRequest();

    //   if (!httpRequest) {
    //     alert('Giving up :( Cannot create an XMLHTTP instance');
    //     return false;
    //   }
    //   httpRequest.onreadystatechange = self.decode(cb);
    //   httpRequest.open('GET', pngPath);
    //   httpRequest.send();
    //   console.log('request sent');
    // };

    // this.decode = function(cb) {
    //   console.log('going into decode()');
    //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
    //     if (httpRequest.status === 200) {
    //       console.warn('httpRequest', httpRequest);
    //       var decoded = zorroDecode(httpRequest.response.blob());
    //       cb(decoded);
    //     } else {
    //       alert('There was a problem with the request.');
    //     }
    //   }
    //   return false;
    // };

    this.readPng = async function(imageUrl, cb) {
      var response = await fetch(imageUrl);
      var fileBlob = await response.blob();
      var arrayBuffer = await fileBlob.arrayBuffer();
      var pixels = new Uint8Array(arrayBuffer);
      console.log('fileBlob', pixels);
      var decoded = z.zorro_decode(pixels);
      cb(decoded);
    };
  };

  var zorro = new Zorro();
  zorro.readPng('./img/days.png', function(decoded){ console.log('decoded:', decoded); });
});
