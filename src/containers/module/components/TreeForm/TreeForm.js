import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

import '../../../../assets/css/menutable.css'
import ItemModule from '../ItemModule'

class TreeForm extends Component {
    state = { cards: [] }

    componentDidMount() {
        this.setState({ cards: this.props.data })
    }

    collpaseCard = (item) => {
        console.log(item)
        this.setState({
            cards: this.state.cards.map(e => {
                return {
                    ...e,
                    isShow: e.id == item.id ? !e.isShow : e.isShow
                }
            })
        })
    }

    findCard = id => {
        const card = this.state.cards.filter(c => c.id === id)[0]
        return {
            card,
            index: this.state.cards.indexOf(card),
        }
    }

    moveCard = (id, atIndex) => {

    }

    render() {

        const { id } = this.props
        const { cards } = this.state

        return cards.length > 0 ? (
            <div className='mn-tree mn-scroll'>
                <div className='mn' id={id}>
                    <ol className='mn-list' >
                        <ItemModule data={cards} collpaseCard={this.collpaseCard} findCard={this.findCard} moveCard={this.moveCard} />
                    </ol>
                </div>
            </div>
        ) : null
    }
}

export default TreeForm;