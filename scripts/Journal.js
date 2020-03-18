
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <ol>
        <ul>Date: ${entry.date}</ul>
        <ul>Concept: ${entry.concept}</ul>
        <ul>Entry: ${entry.entry}</ul>
        <ul>Mood: ${entry.mood}</ul>
        </section>
        </ol>
    `
}

