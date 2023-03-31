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

// Adding logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  // console.error('putDb not implemented');
  console.log('Post to the database');
  const jateDb = await openDB('jate',1);// Create a connection to the database database and version we want to use.
  const tx = jateDb.transaction('jate', 'readwrite');// Create a new transaction and specify the database and data privileges.
  const store = tx.objectStore('jate');// Open up the desired object store.
  const request = store.put({ jate: content }); // Add the content
  const result = await request;  // Get confirmation of the request.
  console.log('🚀 - data saved to the database', result); 
}; 

// Adding logic for a method that gets all the content from the database
export const getDb = async () => {
  //console.error('getDb not implemented');
  console.log('GET from the database');
  const jateDb = await openDB('jate',1);// Create a connection to the database database and version we want to use.
  const tx = jateDb.transaction('jate', 'readonly');// Create a new transaction and specify the database and data privileges.
  const store = tx.objectStore('jate');// Open up the desired object store.
  const request = store.getAll(); // Use the .getAll() method to get all data in the database.
   // Get confirmation of the request.
   const result = await request;
   console.log('result.value', result);
   return result;
}
initdb();
