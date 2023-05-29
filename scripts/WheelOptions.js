import { setWheelType } from "./TransientState.js"

const handleWheelType = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
        setWheelType(parseInt(changeEvent.target.value))

    }
}

document.addEventListener("change", handleWheelType)




export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let html = ""

    html += '<select id="wheels">'
    html += '<option value="0">Select a set of wheels</option>'

    const arrayOfOptions = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.wheelType}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

}