import React, { Component } from 'react'
import '../../../../assets/css/menutable.css'

function ModuleTable(props) {
    const data = props.data
    return (
        SetModuleTable(data)
    )
}

function SetModuleTable(data, parentId = 0) {
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
                }).length > 0
            return el.parentId == el.id ? (
                <li key={el.id} className='mn-item'>
                    <button data-action="hidden" type="button"></button>
                    <a className='mn-handle' data-target={"#ym-module-group-" + el.parentId} data-id={el.id} key={el.id} data-toggle="collapse" onClick={this}>
                        <span>{el.title}</span>
                    </a>
                    {ul ? <div className='mn-list collapse show' id={"ym-module-group-" + el.parentId}>
                        {SetModuleTable(data, el.id)}
                    </div> : null}
                </li>
            ) :
                (
                    <li key={el.id} className='mn-item' data-id={el.id} key={el.id}>
                        <div className='mn-handle'>
                            <span>{el.title}</span>
                        </div>
                    </li>
                )
        })
    }
}

export default class TreeForm extends Component {
    state = {}

    render() {
        const { id, data } = this.props
        return (
            <div className='mn-tree mn-scroll'>
                <div className='mn' id={id}>
                    <ol className='mn-list'>
                        <ModuleTable data={data} />
                    </ol>
                </div>
            </div>
        )
    }
}


