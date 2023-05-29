import { setTechPackageType } from "./TransientState.js"

const handleTechnologyType = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        setTechPackageType(parseInt(changeEvent.target.value))

    }
}

document.addEventListener("change", handleTechnologyType)


export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/extras")
    const extras = await response.json()

    let html = ""

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const extra of extras) {
        html += `<option value="${extra.id}">${extra.type}</option>`
    }

    html += "</select>"
    return html
}


