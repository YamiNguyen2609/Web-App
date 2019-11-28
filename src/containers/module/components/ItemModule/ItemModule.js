import React, { Component } from 'react'
import { useDrag, useDrop } from 'react-dnd'


const ItemModule = ({ data, collpaseCard, moveCard, findCard, parentId, id }) => {
    const items =
        parentId > 0
            ? data.filter(e => {
                return e.parentId === parentId && e.id !== e.parentId
            })
            : data.filter(e => {
                return e.id === e.parentId
            })

    const originalIndex = findCard(id).index

    var result = undefined

    if (items) {
        result = items.map(el => {

            const [{ isDragging }, drag] = useDrag({
                item: { type: "card", id, originalIndex },
                collect: monitor => ({
                    isDragging: monitor.isDragging(),
                }),
            })

            const ul =
                data.filter(e => {
                    return e.parentId === el.id && e.id !== e.parentId
                }).length
            return el.parentId == el.id ?
                (
                    <li key={el.id} className='mn-item' ref={node => drag(node)}>
                        {ul > 0 ? (
                            <button data-action={!el.isShow ? "show" : "hidden"} onClick={() => collpaseCard(el)} type="button"></button>
                        ) : null}
                        <a className='mn-handle'>
                            <span>{el.title}</span>
                        </a>
                        {ul > 0 ?
                            <ol className='mn-list' style={el.isShow ? { maxHeight: ul * 50 } : null}>
                                <ItemModule data={data} collpaseCard={collpaseCard} parentId={el.id} id={el.id} moveCard={moveCard} findCard={findCard} />
                            </ol> : null
                        }
                    </li>
                ) :
                (
                    <li key={el.id} className='mn-item' ref={drag}>
                        <a className='mn-handle'>
                            <span>{el.title}</span>
                        </a>
                    </li>
                )
        })
    }

    return <div></div>
};

export default ItemModule;