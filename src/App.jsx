import Header from './components/Header/Header'
import Table from './components/Table/Table'

function App() {
  const table = {
    head: [
      {
        text: "ID"
      },
      {
        text: "name"
      }
    ],
    body: [
      {
        data: [
          "1",
          "Ray"
        ]
      },
      {
        data: [
          "2",
          "Eduardo"
        ]
      },
      {
        data: [
          "3",
          "Maximo"
        ]
      },
    ]
  }

  return (
    <>
      <Header/>

      <main>
        <Table title={'signatures'} table={table}/>        
      </main>
    </>
  )
}

export default App
