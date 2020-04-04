import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { BoardColumn } from './BoardColumn'
import { Category } from './Category'
import { ItemCard } from './ItemCard'

const getItemsByCategory = items => {
  const itemsByCategory = items.reduce(
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

  return itemsByCategory
}

export const Board = ({ items }) => {
  const [startItems, setStartItems] = useState([])
  const [stopItems, setStopItems] = useState([])
  const [continueItems, setContinueItems] = useState([])

  useEffect(() => {
    const itemsByCategory = getItemsByCategory(items)

    setStartItems(itemsByCategory.start)
    setStopItems(itemsByCategory.stop)
    setContinueItems(itemsByCategory.continue)
  }, [items])

  const columnIdsToStateFunction = {
    start: setStartItems,
    stop: setStopItems,
    continue: setContinueItems,
  }

  const columnIdsToState = {
    start: startItems,
    stop: stopItems,
    continue: continueItems,
  }

  const onDragEnd = result => {
    const { source, destination } = result

    if (!destination || source.droppableId === destination.droppableId) {
      return
    }

    const sourceColumn = source.droppableId
    const destinationColumn = destination.droppableId

    const sourceColumnCopy = Array.from(columnIdsToState[sourceColumn])
    const destinationColumnCopy = Array.from(
      columnIdsToState[destinationColumn]
    )

    const [removed] = sourceColumnCopy.splice(source.index, 1)
    const removedClone = Object.assign({}, removed)
    removedClone.category = destinationColumn
    destinationColumnCopy.splice(destination.index, 0, removedClone)

    const setSourceFunction = columnIdsToStateFunction[sourceColumn]
    const setDestinationFunction = columnIdsToStateFunction[destinationColumn]

    setSourceFunction(sourceColumnCopy)
    setDestinationFunction(destinationColumnCopy)
  }

  const createDroppableColumn = (id, title, items) => (
    <BoardColumn>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <Category title={title}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ItemCard
                        key={item.id}
                        category={item.category.toLowerCase()}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.text}
                      </ItemCard>
                    </div>
                  )}
                </Draggable>
              ))}
            </Category>
          </div>
        )}
      </Droppable>
    </BoardColumn>
  )

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {createDroppableColumn('start', 'Start', startItems)}
      {createDroppableColumn('stop', 'Stop', stopItems)}
      {createDroppableColumn('continue', 'Continue', continueItems)}
    </DragDropContext>
  )
}
