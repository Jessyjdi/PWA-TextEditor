import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  // console.error('putDb not implemented');
  console.log('Post to the database');
  const jateDb = await openDB('jate',1);// Create a connection to the database database and version we want to use.
  const tx = jateDb.transaction('jate', 'readwrite');// Create a new transaction and specify the database and data privileges.
} 

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
