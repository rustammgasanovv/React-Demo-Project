import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertData } from '../actions/mainActions'
import Swal from 'sweetalert2'
import { changeStateValue } from '../redux/MainReducer'

export class CarModals extends Component {
    state ={
        plate_number: '',
        model: ''
    }

    getInputValues(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addDataBtn(model, plate_number){
        if(model !='' && plate_number!=''){
            this.props.insertData("cars", {model, plate_number})
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
    const {plate_number, model} = this.state
    return (
      <div className='background-shadow'>
        <div className='modal_body'>
            <div className='modal_header'>
                <h2>Add Data</h2>
            </div>
            <div className='modal_grid'>
                <div className='modal_inp_container'>
                    <label for='name'>Car Model</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='model' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>Plate Number</label>
                    <input type='text' onChange={this.getInputValues.bind(this)} name='plate_number' id='name'/>
                </div>
            </div>    
                <div className='modal_btn'>
                    <button className='close_btn'>Close</button>
                    <button className='save_btn' onClick={this.addDataBtn.bind(this,model,plate_number)}>Save</button>
                </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {insertData, changeStateValue}

export default connect(mapStateToProps,mapDispatchToProps) (CarModals)