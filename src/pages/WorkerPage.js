import React, { Component } from 'react'
import { getUser } from '../actions/mainActions'
import { connect } from 'react-redux';
import MainCard from '../component/MainCard';
import UserModals from '../modals/UserModals'


export class WorkerPage extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  getAfterDelete = () => {
    this.props.getUser()
  }
  
  getAfterInsert = () => {
    this.props.getUser()
  }
  render() {
    const { user,modalVisible  } = this.props
    console.log(user);

    return (

      <div className='container'>
        <div className='grid_container'>
          {
            user.map((data, i) => {
              console.log(data);
              return (
                <MainCard firs_name={data.firs_name} last_name={data.last_name} phone_number={data.phone_number} email={data.email} password={data.password} key={i} url={`user/${data.id}`} getAfterDelete={this.getAfterDelete}/>
              )
            })
          }
        </div>
        {
          modalVisible == true ? <UserModals getAfterInsert={this.getAfterInsert} /> : null
        }
      </div>
    )

  }
}

const mapStateToProps = (state) => ({
  user: state.Data.user,
  modalVisible: state.Data.modalVisible
})
const mapDispatchToProps = { getUser }
export default connect(mapStateToProps, mapDispatchToProps)(WorkerPage)