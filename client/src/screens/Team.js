import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'urql'
import { Heading } from '../components/Heading'
import { Paragraph } from '../components/Paragraph'
import { Board } from '../components/Board'

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
          category
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

  if (results.fetching) return <Paragraph>Loading...</Paragraph>
  if (results.error) return <Paragraph>{results.error.message}</Paragraph>

  const { team } = results.data

  const teamHasBoards = team.boards.length > 0

  if (!teamHasBoards) {
    return <Paragraph>Please create a board first.</Paragraph>
  }

  const latestBoard = team.boards[team.boards.length - 1]

  return (
    <div className="container mx-auto px-4">
      <Heading>{team.name}</Heading>
      <div className="flex">
        <Board items={latestBoard.items} />
      </div>
    </div>
  )
}
