import './App.css';
import Header from './components/Header.js'
import Contact from './components/Contact.js'
// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import data from './data/contacts.json'

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
    <Header />
    <Contact data={data[0]} />
    <Contact data={data[1]} />
    <Contact data={data[2]} />
    <Contact data={data[3]} />
    <Contact data={data[4]} />
    <Contact data={data[5]} />
    
    </div>
  );
}

export default App;
