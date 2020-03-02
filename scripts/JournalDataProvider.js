/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok",
        id: 1
    },
    {
        date: "02/27/2020",
        concept: "Query Selctors",
        entry: "learned how to assign events specific buttons clicked.",
        mood: "Happy",
        id: 2
    },
    {
        date: "02/20/2020",
        concept: "Javascript",
        entry: "Hold raw data about each entry and export functions that other modules can use to filter the entries for different purposes.",
        mood: "Pissed",
        id: 3
    },
    {
        date: "02/30/2020",
        concept: "Modular JS",
        entry: "Martians Aquarium.",
        mood: "Happy",
        id: 4
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
    }