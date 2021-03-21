# zorro_wasm
Wasm bindings for Zorro.

# Install

## from source
clone

        git clone git@github.com:chrisftw/zorro_wasm.git

build

        cd zorro_wasm
        cargo install
        wasm-pack build --target web

## or into your webpage:

Just copy the four js/wasm files into your webapp.

        script/zorro_wasm_bg.wasm
        script/zorro_wasm_bg.js
        script/zorro.js
        script/zorro_wasm.js

and edit the zorro.js file to load your images, do something with the data.

#Usage

See [example_site/index.html](https://github.com/chrisftw/zorro_wasm/blob/main/example_site/index.html).
