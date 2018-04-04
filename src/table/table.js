import React, {Component} from 'react';

class Table extends Component{


    valchecker=(index,e)=>{
        if(e.target.checked){
            let arr=this.props.rows;
            let person=arr[index];
            this.props.selectedPerson(person,index);
            e.target.checked=false;
        }
    }

    render(){
        let rows=null
        if(this.props.rows.length){
            rows=this.props.rows.map((each,index)=>{
                return (
                    <tr key={each.name}>
                        <td>{each.name}</td>
                        <td>{each.surname}</td>
                        <td>
                            <input type="radio" name="selperson" onChange={(e)=>{this.valchecker(index,e)}} />
                        </td>
                    </tr>
                )
            })
        }
        return(
            <div className="Table" style={{marginTop:"20px"}}>
                <table className="table table-responsive table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Select to Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;