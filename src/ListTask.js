import React, { useState } from "react";
import { Button, Table} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListTask = (props) => {
    const {listTask, handleDeleteTask, editTask} = props
    
    
    return(
        <>
            <Table>
                <thead style={{color : "black", background: "aqua"}}>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>User Id</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {listTask.map( (task, i) => {
                        return(
                            <tr>
                                <td>{ task.id }</td>
                                <td>{task.name}</td>
                                <td>{task.user_id}</td>
                                <td>
                                    <Button color="warning" onClick={() => editTask(task.id)}>Edit</Button> &nbsp;
                                    <Button color="danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default ListTask;