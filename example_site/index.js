import("./node_modules/zorro_wasm/zorro_wasm.js").then((zorro) => {
  let zDecode = function(img_selector, type) {
  	const input = document.querySelector(img_selector);
  	const arrayBuffer = await file.arrayBuffer();
    console.log('arrayBuffer', arrayBuffer);
    const tmp = return zorro.decode_file_data(arrayBuffer);
    console.log(tmp);
    return tmp;
//    return zorro.decode_file_data(arrayBuffer);
  };

  zorro.greet("WebAssembly");
});
