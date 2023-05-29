export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=extra&_expand=wheel")
    const orders = await fetchResponse.json()

    let displayOrdersHTML = ""

    const divStringArray = orders.map(
        (order) => {
            const carPrice = order.paint.price + order.interior.price + order.extra.price + order.wheel.price
            return `<div>Custom Order #${order.id} costs $${carPrice}</div>`
        }
    )
    displayOrdersHTML += divStringArray.join("")

    return displayOrdersHTML
}