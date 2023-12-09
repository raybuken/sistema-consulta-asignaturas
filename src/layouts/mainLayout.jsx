import Header from "../components/Header/Header"


function mainLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default mainLayout