import React from 'react'
import { useQuery } from 'urql'

const boardsQuery = `
  query {
    boards {
      id
      team {
        name
      }
    }
  }
`

function App() {
  const [results] = useQuery({
    query: boardsQuery,
  })

  console.log(results)

  if (results.fetching) return <h1>Loading...</h1>
  if (results.error) return <h1>Error: {results.error.message}</h1>

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {results.data &&
          results.data.boards.map(item => (
            <li key={item.id}>
              {item.id} --- {item.team.name}
            </li>
          ))}
      </header>
    </div>
  )
}

export default App
