import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneData, updateData } from '../../actions/mainActions'
import { changeStateValue } from '../../redux/MainReducer'
import { connect } from 'react-redux'

function withHook(Component){
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />
}

export class BranchEdit extends Component {

    componentDidMount(){
        this.props.getOneData(`branch/${this.props.params.id}`)
    }
    getInpValues(e){
        this.props.changeStateValue({
            name:"oneData." + e.target.name,
            value: e.target.value
        })
    }
    saveDataBtn(data, e){
        if(data.name != '' && data.km != ''){
            this.props.updateData(`branch/${this.props.params.id}`, data)
            .then(resp => {
                this.props.navigate('/branch')
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
                    <label for='name'>Name</label>
                    <input type='text' value={oneData.name} onChange={this.getInpValues.bind(this)} name='name' id='name'/>
                </div>
                <div className='modal_inp_container'>
                    <label for='name'>KM</label>
                    <input type='text' value={oneData.km} onChange={this.getInpValues.bind(this)} name='km' id='name'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withHook(BranchEdit))