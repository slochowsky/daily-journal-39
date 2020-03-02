import { useJournalEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JournalEntryList.js";

EntryListComponent()
useJournalEntries()

const arrayOfJournalEntryies = useJournalEntries()
console.log("all of the entries:", arrayOfJournalEntryies)