import React, { Component } from 'react'
import EventService from '../services/EventService';
import moment from 'moment'

class CreateEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            start: '',
            end: '',
            hours: 0
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeStartHandler = this.changeStartHandler.bind(this);
        this.saveOrUpdateEvent = this.saveOrUpdateEvent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EventService.getEventById(this.state.id).then( (res) =>{
                let event = res.data;
                this.setState({title: event.title,
                    start: event.start,
                    end : event.end,
                    hours: event.hours
                });
            });
        }        
    }
    saveOrUpdateEvent = (e) => {
        console.log('here')
        console.log(moment(this.state.start).format('LT'))
        e.preventDefault();
        let event = {title: this.state.title, start: moment(this.state.start, 'YYYY-MM-DD').toDate(), end: this.state.end, hours: this.state.hours};
        console.log('event => ' + JSON.stringify(event));

        // step 5
        if(this.state.id === '_add'){
            EventService.createEvent(event).then(res =>{
                this.props.history.push('/events');
            });
        }else{
            EventService.updateEvent(event, this.state.id).then( res => {
                this.props.history.push('/events');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeStartHandler= (event) => {
        this.setState({start: event.target.value});
    }

    changeEndHandler= (event) => {
        this.setState({end: event.target.value});
    }

    changeHoursHandler= (event) => {
        this.setState({hours: event.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Event</h3>
        }else{
            return <h3 className="text-center">Update Event</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Start Date </label>
                                            <input placeholder="Start Date" name="start" className="form-control" 
                                                value={this.state.start} onChange={this.changeStartHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="End Date" name="end" className="form-control" 
                                                value={this.state.end} onChange={this.changeEndHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Work Hours: </label>
                                            <input placeholder="Work Hours" name="hours" className="form-control" 
                                                value={this.state.hours} onChange={this.changeHoursHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEvent}>Save</button>
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

export default CreateEventComponent
