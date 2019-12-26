import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'urql'
import { Heading } from '../components/Heading'
import { Paragraph } from '../components/Paragraph'
import { BoardColumn } from '../components/BoardColumn'
import { Category } from '../components/Category'

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

  const itemsByCategory = latestBoard.items.reduce(
    (acc, item) => {
      console.log(item)
      acc[item.category.toLowerCase()].push(item)

      return acc
    },
    {
      start: [],
      stop: [],
      continue: [],
    }
  )

  return (
    <div className="container mx-auto px-4">
      <Heading>{team.name}</Heading>
      <div className="flex">
        <BoardColumn>
          <Category items={itemsByCategory.start} title="Start" />
        </BoardColumn>
        <BoardColumn>
          <Category items={itemsByCategory.stop} title="Stop" />
        </BoardColumn>
        <BoardColumn>
          <Category items={itemsByCategory.continue} title="Continue" />
        </BoardColumn>
      </div>
    </div>
  )
}
