import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteItem } from '../actions/mainActions';
import { Link } from 'react-router-dom';

export class MainCard extends Component {
    deleteDataBtn(url, e) {
        console.log(url);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteItem(url)
                    .then(resp => {
                        this.props.getAfterDelete()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }
    render() {
        const { model = '', plate_number = '', last_name = '', phone_number = '', email = '', password = '', first_name = '', name = '', km = '', user_id = '', car_id = '', branch_id = '', date = '', load = '', load_type = '', url } = this.props
        return (
            <div className='main_card'>
                <div className='card_title'>
                    {
                        model != '' ? <h2>{model}</h2> : ''
                    }
                    {
                        first_name != '' ? <h2>{first_name}</h2> : ''
                    }

                </div>
                <div className='card_body'>
                    <ul>
                        {
                            plate_number != '' ? <li>plate number: <span>{plate_number}</span></li> : ''
                        }
                        {
                            last_name != '' ? <li><span>{last_name}</span></li> : ''
                        }
                        {
                            phone_number != '' ? <li><span>{phone_number}</span></li> : ''
                        }
                        {
                            email != '' ? <li><span>{email}</span></li> : ''
                        }
                        {
                            password != '' ? <li><span>{password}</span></li> : ''
                        }
                        {
                            name != '' ? <li><span>{name}</span></li> : ''
                        }
                        {
                            km != '' ? <li><span>{km}</span></li> : ''
                        }
                        {
                            user_id != '' ? <li><span>{user_id}</span></li> : ''
                        }
                        {
                            car_id != '' ? <li><span>{car_id}</span></li> : ''
                        }
                        {
                            branch_id != '' ? <li><span>{branch_id}</span></li> : ''
                        }
                        {
                            date != '' ? <li><span>{date}</span></li> : ''
                        }
                        {
                            load != '' ? <li><span>{load}</span></li> : ''
                        }
                        {
                            load_type != '' ? <li><span>{load_type}</span></li> : ''
                        }


                    </ul>
                    <div className='row'>
                        <button onClick={this.deleteDataBtn.bind(this, url)}>Delete</button>
                        <Link to={`/${url}`}>Edit</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = { deleteItem }

export default connect(mapStateToProps, mapDispatchToProps)(MainCard)