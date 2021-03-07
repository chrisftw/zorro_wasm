use wasm_bindgen::prelude::*;
use zorro;
extern crate console_error_panic_hook;
use std::panic;

#[wasm_bindgen]
pub fn zorro_decode(bytes: &[u8]) -> String {
	panic::set_hook(Box::new(console_error_panic_hook::hook));
    return zorro::decode_file_data(bytes);
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
