import Navbar from "./Navbar"


function Header({position}) {
  return (
    <header style={{position: position || '', width: "100vw"}}>
        <Navbar/>

        
    </header>
  )
}

export default Header