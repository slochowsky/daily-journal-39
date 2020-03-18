import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryFormContainer")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button") {
        
        const newEntry = {
            date: document.querySelector('#journalDate').value,
            concept: document.querySelector('#conceptsCovered').value,
            entry: document.querySelector('#entryText').value,
            mood: document.querySelector('#entryMood').value
        }
        
        // Change API state and application state
        saveEntry(newEntry)
        console.log("new note that was saved", newEntry)
        
    }
})
const EntryFormComponent = () => {

const render = () => {
    contentTarget.innerHTML = `
            <h1>Daily Journal</h1>
            <div class="entryForm">
    <fieldset class="fieldsetContent">
        <label for="journalDate">Date of entry</label>
        <input type="date" name="journalDate" id="journalDate">

        <label for="conceptsCovered">Concepts covered</label>
        <input type="text" name="Concepts covered" id="conceptsCovered">

        <label for="journalEntry">Journal entry</label>
        <input type="text" name="journal entry" id="entryText">

        <div class="dropdownContainer">
        <label for="moodOfTheDay">Mood of the day</label>
        <select id="entryMood">
            <option value="Happy">Happy</option>
            <option value="Confident">confident</option>
            <option value="Sad">Sad</option>
            <option value="Pissed">Pissed</option>
            <option value="Ok">Ok</option>
        </select>
        </div>
        <input type="Submit" id="button"></input>
        </fieldset>
        </div>
    `
    }
    render()
}


export default EntryFormComponent