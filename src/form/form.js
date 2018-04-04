import React, {Component} from 'react';
import Input from './Input/Input';

class Form extends Component{
    state={
        formValues:{
            name:"",
            surname:""
        }
    };
    componentWillReceiveProps=(props)=>{
        if(props.personEdit.name){
            this.setState({formValues:props.personEdit});
        }
    }
    valChangeHandler=(name,event)=>{
        let value={...this.state.formValues};
        value[name]=event.target.value;
        this.setState({formValues:value});
    }


    formsubmitter=(event)=>{
        event.preventDefault();
        console.log(event);
        if(this.state.formValues.name !== '' && this.state.formValues.surname !==""){
            this.props.submit(this.state.formValues);
            let  emptyform={name:"",surname:""};
            this.setState({formValues:emptyform});
        }
    }
    render(){

        return(
            <div className="Form" name="myform">
                <form action="">
                    <Input type="text" name="name" id="name" value={this.state.formValues.name} change={(e)=>{this.valChangeHandler("name",e)}}/>
                    <Input type="text" name="surname" id="surname" value={this.state.formValues.surname} change={(e)=>{this.valChangeHandler("surname",e)}}/>
                    <input type="submit" className="btn btn-primary" value="save" onClick={this.formsubmitter}/>
                </form>
            </div>
        )
    }
}
export default Form;