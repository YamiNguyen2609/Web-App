import React, { Component } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const ItemModule = ({ data, collpaseCard, moveCard, findCard, parentId }) => {
    const originalIndex = findCard(parentId).index
    const [{ isDragging }, drag] = useDrag({
        item: { type: "card", parentId, originalIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const [, drop] = useDrop({
        accept: "card",
        canDrop: () => false,
        hover({ id: draggedId }) {
            if (draggedId !== parentId) {
                const { index: overIndex } = findCard(parentId)
                moveCard(draggedId, overIndex)
            }
        },
    })
    const opacity = isDragging ? 0 : 1
    const items =
        parentId > 0
            ? data.filter(e => {
                return e.parentId === parentId && e.id !== e.parentId
            })
            : data.filter(e => {
                return e.id === e.parentId
            })
    if (items) {
        return items.map(el => {
            const ul =
                data.filter(e => {
                    return e.parentId === el.id && e.id !== e.parentId
                }).length
            return el.parentId == el.id ?
                (
                    <li key={el.id} className='mn-item' ref={node => drag(drop(node))} style={{ opacity }}>
                        <button data-action={!el.isShow ? "show" : "hidden"} onClick={() => collpaseCard(el)} type="button"></button>
                        <a className='mn-handle'>
                            <span>{el.title}</span>
                        </a>
                        {ul > 0 ?
                            <ol className='mn-list' style={el.isShow ? { maxHeight: ul * 50 } : null}>
                                <ItemModule data={data} onCollapse={collpaseCard} parentId={el.id} moveCard={moveCard} findCard={findCard} />
                            </ol> : null
                        }
                    </li>
                ) :
                (
                    <li key={el.id} className='mn-item' ref={node => drag(drop(node))} style={{ opacity }} >
                        <a className='mn-handle'>
                            <span>{el.title}</span>
                        </a>
                    </li>
                )
        })
    }
};

export default ItemModule;