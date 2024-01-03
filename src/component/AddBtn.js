import React, { Component } from 'react'
import { changeStateValue } from '../redux/MainReducer'
import { connect } from 'react-redux'

export class AddBtn extends Component {
  btnClick() {
    this.props.changeStateValue({
      name:'modalVisible',
      value: true
    })
  }
  render() {
    return (
      <div className='container'>
        <button className='add_btn' onClick={this.btnClick.bind(this)}>Add</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = { changeStateValue }


export default connect(mapStateToProps, mapDispatchToProps)(AddBtn) 