const storedData = id => {
    //normal stored
    // const initial = localStorage.getItem(id);
    // if (initial) {
    //     const quantity = parseInt(initial) + 1;
    //     localStorage.setItem(id, JSON.stringify(quantity));
    // }
    // else {
    //     localStorage.setItem(id, 1);
    // }
    // let cart = {};
    // const initial = localStorage.getItem('stored-cart');
    // if (initial) {
    //     cart = JSON.parse(initial);
    // }
    // const quantity = cart[id];
    // if (quantity) {
    //     const newQuantity = quantity + 1;
    //     cart[id] = newQuantity;
    // }
    // else {
    //     cart[id] = 1;
    // }
    // localStorage.setItem('stored-cart', JSON.stringify(cart));

    // const initial = localStorage.getItem(id);
    // if (initial) {
    //     const quantity = parseInt(initial) + 1;
    //     localStorage.setItem(id, JSON.stringify(quantity));
    // }
    // else {
    //     localStorage.setItem(id, 1);
    // }

    let cart = {};
    const initial = localStorage.getItem('stored-cart');
    if (initial) {
        cart = JSON.parse(initial);
    }
    const quantity = cart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('stored-cart', JSON.stringify(cart));
}

export { storedData };