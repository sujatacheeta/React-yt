import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  const name = 'sujata'
  return (
     <div>
       <Navbar />
       <Card />
       <Card />
       <Card />
       {/* <h3>Hii Card this side</h3> */}
     </div>
  )
}

export default App
