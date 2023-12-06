import './App.css'
import Card from './component/Card'

function App() {

  return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind Test</h1> 

   <Card username="abc" btnText="click me"/>
   <Card username="xyz" btnText="visit me"/>
   
   </>
  )
}



export default App
