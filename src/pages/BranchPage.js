import React, { Component } from 'react'
import { getBranch } from '../actions/mainActions'
import { connect } from 'react-redux'
import MainCard from '../component/MainCard'
import BranchModals from '../modals/BranchModals'

export class BranchPage extends Component {
  componentDidMount() {
    this.props.getBranch()
  }
  getAfterDelete = () => {
    this.props.getBranch()
  }
  getAfterInsert = () => {
    this.props.getBranch()
  }
  render() {
    const { branch, modalVisible } = this.props
    return (
      <div className='container'>
        <div className='grid_container'>
          {
            branch.map((data, i) => {
              console.log(data);
              return (
                <MainCard key={i} name={data.name} km={data.km} url={`branch/${data.id}`} getAfterDelete={this.getAfterDelete} />
              )
            })
          }
        </div>
        {
         modalVisible==true? <BranchModals getAfterInsert={this.getAfterInsert} />:null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  branch: state.Data.branch,
  modalVisible: state.Data.modalVisible
})
const mapDispatchToProps = { getBranch }
export default connect(mapStateToProps, mapDispatchToProps)(BranchPage)