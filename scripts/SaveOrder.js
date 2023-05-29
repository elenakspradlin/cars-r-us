import { placeOrder } from "./TransientState.js";

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}



export const saveOrder = () => {

    document.addEventListener("click", handleOrderSubmissionClick)

    return "<div><button id='placeOrder'>Place Order</button></div>"
}

