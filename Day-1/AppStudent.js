import React from "react";

function Student(){
    let item = 
        { sid: 101, sname: "Rohit", course: "React JS", age:22, total:83 }

    return(
        <><br/>
            <table  border="2"  width="183">
            <tr >

                <td>
                    <b>Student Details</b>
                <tr>
                    <td >Student ID</td>
                    <td >{item.sid}</td>
                </tr>
                <tr>
                    <td >Student Name</td>
                    <td >{item.sname}</td>
                </tr>
                <tr>
                    <td >Course</td>
                    <td >{item.course}</td>
                </tr>
                <tr>
                    <td >Age</td>
                    <td >{item.age}</td>
                </tr>
                <tr>
                    <td >Total</td>
                    <td >{item.total}</td>
                </tr>
                </td>
            </tr>
            </table>
        </>
    );
    
}

export default Student;