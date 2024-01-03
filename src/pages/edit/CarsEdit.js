import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneData, updateData } from '../../actions/mainActions'
import { changeStateValue } from '../../redux/MainReducer'
import { connect } from 'react-redux'

function withHook(Component){
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />
}

export class CarsEdit extends Component {

    componentDidMount(){
        this.props.getOneData(`cars/${this.props.params.id}`)
    }
    getInpValues(e){
        this.props.changeStateValue({
            name:"oneData." + e.target.name,
            value: e.target.value
        })
    }
    saveDataBtn(data, e){
        if(data.model != '' && data.plate_number != ''){
            this.props.updateData(`cars/${this.props.params.id}`, data)
            .then(resp => {
                this.props.navigate('/cars')
            })
        }
    }
  render() {
    const { oneData } = this.props
    console.log(oneData);
    return (
        <div className='background-shadow'>
        <div className='modal_body'>
            <div className='modal_header'>
                <h2>Add Data</h2>
            </div>
            <div className='modal_grid'>
                <div className='modal_inp_container'>
                    <label for='name'>Car Model</label>
                    <input type='text' value={oneData.model} onChange={this.getInpValues.bind(this)} name='model' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>Plate Number</label>
                    <input type='text' value={oneData.plate_number} onChange={this.getInpValues.bind(this)} name='plate_number' id='name'/>
                </div>
            </div>    
                <div className='modal_btn'>
                    <button className='close_btn' onClick={this.saveDataBtn.bind(this)}>Close</button> 
                    <button className='save_btn' onClick={this.saveDataBtn.bind(this,oneData)}>Save</button>
                </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    oneData: state.Data.oneData
})

const mapDispatchToProps = {getOneData, changeStateValue, updateData}

export default connect(mapStateToProps, mapDispatchToProps)(withHook(CarsEdit))