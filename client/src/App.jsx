import './App.css'
import { Navbar, Footer, Services, Transactions, Welcome } from "./components"

function App() {

  return (
    <main>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </main>
  )
}

export default App
