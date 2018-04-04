import React , {Component} from 'react';

export default class Input extends Component{


    render(){
        const {type,name,id,value}=this.props;

        return(
            <div className="form-group">
                <label htmlFor={this.props.id} className="control-label">{this.props.name.toUpperCase()}</label>
                <input type={type} value={value} name={name} id={id} onChange={this.props.change} className="form-control"/>
            </div>
        )
    }
}