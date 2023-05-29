const transientState =
{
    "paintId": 0,
    "interiorId": 0,
    "extraId": 0,
    "wheelId": 0
}

export const setPaintType = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorType = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechPackageType = (chosenTechPackage) => {
    transientState.extraId = chosenTechPackage
    console.log(transientState)
}

export const setWheelType = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }


    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}