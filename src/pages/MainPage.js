import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../actions/mainActions'
import MainCard from '../component/MainCard';

export class MainPage extends Component {
  componentDidMount() {
    this.props.getOrders()
  }

  getAfterDelete = () => {
    this.props.getOrders()
  }
  render() {
    const {orders} = this.props
    return (
      <div className='container'>
            <div className='grid_container'>
              {
                orders.map((data,i)=>{
                  console.log('map',data);
                  return(
                    <MainCard key={i} user_id={data.user_id} car_id = {data.car_id} branch_id = {data.branch_id} date = {data.date} load = {data.load} load_type = {data.load_type} url={`order/${data.id}`} getAfterDelete={this.getAfterDelete}/>
                  )
                })
              }
            </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  orders: state.Data.orders
})
const mapDispatchToProps = { getOrders }
export default connect(mapStateToProps , mapDispatchToProps) (MainPage)