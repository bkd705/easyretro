import React from 'react'
import { useQuery } from 'urql'
import gql from 'graphql-tag'

const getTeam = gql`
  query GetTeam($name: String!) {
    team(name: $name) {
      id
      name
      boards {
        id
        items {
          id
          text
        }
      }
    }
  }
`

export const Team = ({ match: { params } }) => {
  const { teamName } = params
  const [results] = useQuery({
    query: getTeam,
    variables: { name: teamName },
  })

  if (results.fetching) return <p>Loading...</p>
  if (results.error) return <p>{results.error.message}</p>

  const { team } = results.data

  const teamHasBoards = team.boards.length > 0

  if (!teamHasBoards) {
    return <p>Please create a board first.</p>
  }

  const latestBoard = team.boards[team.boards.length - 1]

  return (
    <div>
      <h1>{team.name}</h1>
      <p>Item Count: {latestBoard.items.length}</p>
    </div>
  )
}
