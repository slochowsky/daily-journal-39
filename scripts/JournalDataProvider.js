let entries = []

const eventHub = document.querySelector(".container")


const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}


export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(
            parsedEntries => {
                entries = parsedEntries.slice()
                console.log("STATE OF ENTRIES ARRAY", entries)
            }
        )
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

export const useEntries = () => {
    return entries.slice()
}