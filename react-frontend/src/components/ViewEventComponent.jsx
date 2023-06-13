import React, { Component } from 'react'
import EventService from '../services/EventService'

class ViewEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            event: {}
        }
    }

    componentDidMount(){
        EventService.getEventById(this.state.id).then( res => {
            this.setState({event: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Event Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Event Title: </label>
                            <div> { this.state.event.title }</div>
                        </div>
                        <div className = "row">
                            <label> Event Start Date: </label>
                            <div> { this.state.event.start }</div>
                        </div>
                        <div className = "row">
                            <label> Event End Date: </label>
                            <div> { this.state.event.end }</div>
                        </div>
                        <div className = "row">
                            <label> Work Hours: </label>
                            <div> { this.state.event.hours }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEventComponent
