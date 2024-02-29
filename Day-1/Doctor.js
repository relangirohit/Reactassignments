import React from "react";

function Doctor(){
    let doctorArray = [
        { doctorid: 101, doctorname: "Rohit", Designation: "surgeon", Experience:"9 years", Contact:9982548725 },
        { doctorid: 102, doctorname: "Sai Kiran", Designation: "Head surgeon", Experience:"15 years", Contact:8825749376 },
        { doctorid: 103, doctorname: "Tarun", Designation: "Gynecologist", Experience:"6 years", Contact:9964234561 },
        { doctorid: 104, doctorname: "Khaalid", Designation: "Dentist", Experience:"7 years", Contact:9275348234 },
        { doctorid: 105, doctorname: "Sudheer", Designation: "RMP", Experience:"1 year", Contact:9982548725 },
    ];

    let resultArray =  doctorArray.map(item => 
    {
        return <tr>
                <td>{item.doctorid}</td>
                <td>{item.doctorname}</td>
                <td>{item.Designation}</td>
                <td>{item.Experience}</td>
                <td>{item.Contact}</td>
            </tr>;
    });

    return(
        <><br/>
            <table  border="2"  width="500">

                <tr>
                    <th>Doctor ID</th>
                    <th>Doctor Name</th>
                    <th>Department</th>
                    <th>Experience</th>
                    <th>Contact</th>
                </tr>

                {resultArray}
            </table>
        </>
    );
    
}

export default Doctor;