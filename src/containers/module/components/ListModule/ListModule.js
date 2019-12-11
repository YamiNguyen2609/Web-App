import React, { Component } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const ItemModule = ({ data, item, collpaseCard, moveCard, children, findCard }) => {
    const originalIndex = findCard(item.id).index
    const [{ isDragging }, drag] = useDrag({
        item: { type: "card", id: item.id, originalIndex: originalIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop] = useDrop({
        accept: "card",
        canDrop: () => false,
        hover({ id: draggedId, monitor }) {
            if (draggedId !== item.id) {
                const { index: overIndex } = findCard(item.id)
                moveCard(draggedId, overIndex)
            }
        },
    })

    return <li key={item.id.toString()} className='mn-item' ref={node => drag(drop(node))}>
        {children > 0 ? (
            <button data-action={!item.isShow ? "show" : "hidden"} onClick={() => collpaseCard(item)} type="button"></button>
        ) : null}
        <a className='mn-handle'>
            <span>{item.title}</span>
        </a>
        {children > 0 ?
            <ol className='mn-list' style={item.isShow ? { maxHeight: children * 50 } : null} key={item.id.toString()}>
                <ListModule data={data} collpaseCard={collpaseCard} findCard={findCard} parentId={item.id} moveCard={moveCard} />
            </ol> : null
        }
    </li>
};

const ListModule = ({ data, collpaseCard, moveCard, parentId, findCard }) => {
    var items = parentId > 0
        ? data.filter(e => {
            return e.parentId === parentId && e.id !== e.parentId
        })
        : data.filter(e => {
            return e.id === e.parentId
        })
    return items.map(el => {
        const ul =
            data.filter(e => {
                return e.parentId === el.id && e.id !== e.parentId
            }).length

        return <ItemModule data={data} item={el} collpaseCard={collpaseCard} findCard={findCard} moveCard={moveCard} children={ul} />
    })
}

export default ListModule;