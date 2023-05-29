import { InteriorOptions } from './InteriorOptions.js'
import { PaintOptions } from './PaintOptions.js'
import { saveOrder } from './SaveOrder.js'
import { Orders } from './ShowOrders.js'
import { TechOptions } from './TechnologyOptions.js'
import { WheelOptions } from './WheelOptions.js'

const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const techOptionsHTML = await TechOptions()
    const wheelOptionsHTML = await WheelOptions()
    const buttonHTML = await saveOrder()
    const displayOrdersHTML = await Orders()

    const composedHTML = `
        <h1></h1>

        <article class="choices">
            <section class="choices--column list choices__paint options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices--column list choices__interior options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices--column list choices__tech options">
                <h2>Tech Packages</h2>
                ${techOptionsHTML}
            </section>

             <section class="choices--column list choices__wheel options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

                <article class="order">
        <h2></h2>
        ${buttonHTML}

        </article>

                <article class="customOrders">
            <h2>Car Orders</h2>
            ${displayOrdersHTML}

        </article>
    `

    container.innerHTML = composedHTML



}

document.addEventListener("newOrderCreated", render)

render()