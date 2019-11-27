import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import styles from './styles'
import TreeForm from './components/TreeForm'
import Form from './components/ModuleForm'

export class Module extends Component {
    state = {}

    render() {

        const { modules } = this.props

        return modules.length > 0 ? (
            <div className='row'>
                <div className='col-md-5'>
                    <Form modules={modules} />
                </div>
                <div className='col-md-7'>
                    <div className='card'>
                        <div className='card-body'>
                            <DndProvider backend={HTML5Backend}>
                                <TreeForm data={modules} />
                            </DndProvider>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div></div>;
    }
}

const mapStateToProp = state => {
    return {
        modules: state.getModule.modules
    }
}

const mapDispatchToProp = {
}

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(Module)