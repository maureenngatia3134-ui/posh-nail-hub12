import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Posh Nail Hub</h1>
        <p className="text-gray-700">Your one-stop destination for all things nails!</p>
      </main>
    </div>
  )
}

export default App
