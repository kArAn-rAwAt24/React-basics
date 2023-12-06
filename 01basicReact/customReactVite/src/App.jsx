
function App() {
 const username = "karan"
  return (
    <>
     <h1>hello vite {username}</h1>
     {/* {} is an evaluated expression we can't put JS here we have to put the final evaluated value here becoz if we put if else here and the it will be converted to a tree then children will contain if else in his key which is not a right Js syntax  */}
    </>
  )
}

export default App
