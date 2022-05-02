import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'

export const loadNotes = async ( uid ) => {

    try {
        
        const notesSnap = await getDocs(query(collection(db, `${ uid }/journal/notes`)));

        const notes = []

        notesSnap.forEach( note => {
            notes.push({
                id: note.id,
                ...note.data()
            })
        });

        return notes

    } catch (e) {
        throw new Error(e)
    }

}