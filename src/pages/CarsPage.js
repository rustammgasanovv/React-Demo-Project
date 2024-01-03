import React, { Component } from 'react'
import { getCars } from '../actions/mainActions'
import { connect } from 'react-redux'
import MainCard from '../component/MainCard'
import CarModals from '../modals/CarModals'

export class CarsPage extends Component {
  componentDidMount() {
    this.props.getCars()
  }
  getAfterDelete = () => {
    this.props.getCars()
  }
  getAfterInsert = () => {
    this.props.getCars()
  }
  render() {
    const { cars, modalVisible } = this.props
    return (
      <div className='container'>
        <div className='grid_container'>
          {
            cars.map((data, i) => {
              console.log('map', data);
              return (
                <MainCard key={i} model={data.model} plate_number={data.plate_number} url={`cars/${data.id}`} getAfterDelete={this.getAfterDelete} />
              )
            })
          }

        </div>
        {
          modalVisible == true ? <CarModals getAfterInsert={this.getAfterInsert} /> : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cars: state.Data.cars,
  modalVisible: state.Data.modalVisible
})

const mapDispatchToProps = { getCars }
export default connect(mapStateToProps, mapDispatchToProps)(CarsPage)