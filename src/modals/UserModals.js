import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertData } from '../actions/mainActions'
import Swal from 'sweetalert2'
import { changeStateValue } from '../redux/MainReducer'

export class UserModals extends Component {
    state ={
        firs_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: ''
    }

    getInputValues(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addDataBtn(firs_name, last_name, phone_number, email, password){
        if(firs_name !='' && last_name!='' && phone_number!='' && email!='' && password!=''){
            this.props.insertData("user", {firs_name, last_name, phone_number, email, password})
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
    const {firs_name, last_name, phone_number, email, password} = this.state
    return (
      <div className='background-shadow'>
        <div className='modal_body'>
            <div className='modal_header'>
                <h2>Add Data</h2>
            </div>
            <div className='modal_grid'>
                <div className='modal_inp_container'>
                    <label for='name'>User Model</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='firs_name' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>Last Name</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='last_name' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>Phone Number</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='phone_number' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>Email</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='email' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>Password</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='password' id='name'/>
                </div>
            </div>    
                <div className='modal_btn'>
                    <button className='close_btn'>Close</button>
                    <button className='save_btn' onClick={this.addDataBtn.bind(this,firs_name, last_name, phone_number, email, password)}>Save</button>
                </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {insertData, changeStateValue}

export default connect(mapStateToProps,mapDispatchToProps) (UserModals)