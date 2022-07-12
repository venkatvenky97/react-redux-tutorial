const CAKE_ORDERED = 'CAKE_ORDERED'  //what action we have to take

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

export default orderCake;