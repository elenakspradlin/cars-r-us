import { setPaintType } from "./TransientState.js"

const handlePaintType = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        setPaintType(parseInt(changeEvent.target.value))

    }
}




export const PaintOptions = async () => {
    document.addEventListener("change", handlePaintType)
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

}








