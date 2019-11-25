import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './styles'
import TreeForm from './components/TreeForm'
import Form from './components/ModuleForm'

export class Module extends Component {
    state = {}

    render() {

        const { modules } = this.props

        return (
            <div className='row'>
                <div className='col-md-5'>
                    <Form modules={modules} />
                </div>
                <div className='col-md-7'>
                    <div className='card'>
                        <div className='card-body'>
                            <TreeForm data={modules} />
                        </div>
                    </div>
                </div>
            </div>
        );
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