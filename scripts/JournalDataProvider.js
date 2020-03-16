const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}


let entries = []


export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(
            entry => {
                entry = entry.slice()
                console.log("STATE OF ENTRIES ARRAY", entry)
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
    return entries
}