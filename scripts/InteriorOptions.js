import { setInteriorType } from "./TransientState.js"

const handleInteriorType = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInteriorType(parseInt(changeEvent.target.value))

    }
}

document.addEventListener("change", handleInteriorType)

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select an interior</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.interior}</option>`
    }

    html += "</select>"
    return html
}