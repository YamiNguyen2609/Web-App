import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

import '../../../../assets/css/menutable.css'
import ListModule from '../ListModule'



const TreeForm = ({ data, id }) => {
    const [cards, setCards] = useState(data)

    const collpaseCard = (item) => {
        const index = cards.map(e => { return e.id }).indexOf(item.id)
        setCards(
            update(cards, {
                [index]: {
                    isShow: { $apply: () => { return !item.isShow } }
                }
            }),
        )
    }

    const moveCard = (id, atIndex) => {
        const { card, index } = findCard(id)
        setCards(
            update(cards, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, card],
                ],
            }),
        )
    }
    const findCard = id => {
        const card = cards.filter(c => c.id === id)[0]
        return {
            card,
            index: cards.indexOf(card),
        }
    }

    const [, drop] = useDrop({ accept: "card" })

    return (
        <div className='mn-tree mn-scroll' ref={drop}>
            <div className='mn' id={id}>
                <ol className='mn-list'>
                    <ListModule data={cards} findCard={findCard} collpaseCard={collpaseCard} moveCard={moveCard} />
                </ol>
            </div>
        </div>
    )
}

export default TreeForm;