import { useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./Journal.js"

const contentTarget = document.querySelector(".entryListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => {
    const entries = useEntries()
    contentTarget.innerHTML = ""
    contentTarget.innerHTML = entries.map(entry => {
        return JournalEntryComponent(entry)
    }).join("")
})

const EntryListComponent = () => {
    
    const entries = useEntries()
    const contentTarget = document.querySelector(".entryListContainer")
    for (const entry of entries) {
        contentTarget.innerHTML += JournalEntryComponent(entry);
    }
}

export default EntryListComponent
