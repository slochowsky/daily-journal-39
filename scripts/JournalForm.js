import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryFormContainer")

const EntryFormComponent = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "button") {

            const newEntry = {
                date: new Date(Date.now()).toLocaleDateString('en-US'),
                concept: document.querySelector('#conceptsCovered').value,
                entry: document.querySelector('#entryText').value,
                mood: document.querySelector('#entryMood').value
            }

            // Change API state and application state
            saveEntry(newEntry)
            console.log("new note that was saved", newEntry)

        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <h1>Daily Journal</h1>
    <fieldset>
        <label for="journalDate">Date of entry</label>
        <input type="date" name="journalDate" id="journalDate">
        <label for="conceptsCovered">Concepts covered</label>
        <input type="text" name="Concepts covered" id="conceptsCovered">
        <label for="journalEntry">Journal entry</label>
        <input type="text" name="journal entry" id="entryText">
        <label for="moodOfTheDay">Mood of the day</label>
        <select id="entryMood">
            <option value="Happy">Happy</option>
            <option value="Confident">confident</option>
            <option value="Sad">Sad</option>
            <option value="Pissed">Pissed</option>
            <option value="Ok">Ok</option>
        </select>
    </fieldset>
    <input type="Submit" id="button"></input>
    `
    }
    render()
}


export default EntryFormComponent