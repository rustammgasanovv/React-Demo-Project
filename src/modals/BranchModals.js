import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertData } from '../actions/mainActions'
import Swal from 'sweetalert2'
import { changeStateValue } from '../redux/MainReducer'

export class BranchModals extends Component {
    state ={
        name: '',
        km: ''
    }

    getInputValues(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addDataBtn(name, km){
        if(name!='' && km!=''){
            this.props.insertData("branch", {name, km})
            .then(resp=>{
                Swal.fire(
                    'Added',
                    'Your file has been added',
                    'success'
                )
                this.props.getAfterInsert();
                this.props.changeStateValue({
                    name:'modalVisible',
                    value: false
                })
            })
        }
    }
  render() {
    const {name, km} = this.state
    return (
      <div className='background-shadow'>
        <div className='modal_body'>
            <div className='modal_header'>
                <h2>Add Data</h2>
            </div>
            <div className='modal_grid'>
                <div className='modal_inp_container'>
                    <label for='name'>Name</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='name' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>KM</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='km' id='name'/>
                </div>
            </div>    
                <div className='modal_btn'>
                    <button className='close_btn'>Close</button>
                    <button className='save_btn' onClick={this.addDataBtn.bind(this,name, km)}>Save</button>
                </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {insertData, changeStateValue}

export default connect(mapStateToProps,mapDispatchToProps) (BranchModals)