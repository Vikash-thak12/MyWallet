import './App.css'
import { Navbar, Footer, Loader, Services, Transactions, Welcome } from "./components"

function App() {

  return (
    <main>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Loader />
      <Services />
      <Transactions />
      <Footer />
    </main>
  )
}

export default App
