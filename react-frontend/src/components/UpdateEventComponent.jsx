import React, { Component } from 'react'
import EventService from '../services/EventService';

class UpdateEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            start: '',
            end: '',
            hours: 0,
        }
        this.changeTileHandler = this.changeTitleHandler.bind(this);
        this.changeStartHandler = this.changeStartHandler.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
    }

    componentDidMount(){
        EventService.getEventById(this.state.id).then( (res) =>{
            let event = res.data;
            this.setState({title: event.title,
                start: event.start,
                end : event.end,
                hours: event.hours
            });
        });
    }

    updateEvent = (e) => {
        e.preventDefault();
        let event = {title: this.state.title, start: this.state.start, end: this.state.end, hours: this.state.hours};
        console.log('event => ' + JSON.stringify(event));
        console.log('id => ' + JSON.stringify(this.state.id));
        EventService.updateEvent(event, this.state.id).then( res => {
            this.props.history.push('/events');
        });
    }
    
    changeEventHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeStartHandler= (event) => {
        this.setState({start: event.target.value});
    }

    changeEndHandler= (event) => {
        this.setState({end: event.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Event</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="Start Date" name="start" className="form-control" 
                                                value={this.state.start} onChange={this.changeStartHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="End Date" name="end" className="form-control" 
                                                value={this.state.end} onChange={this.changeEndHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEvent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEventComponent
