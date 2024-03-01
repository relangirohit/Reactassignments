import { useState } from "react";

function EmpList() {

    const [empsArray, setEmpsArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getEmpsClick() {
        let data = [
            { empno: 101, ename: "Rohit", job: "Hyd" , sal: 25000, deptno: 10},
            { empno: 102, ename: "Sai Kiran", job: "Pune" , sal: 28000, deptno: 10},
            { empno: 103, ename: "Tarun", job: "Bnglr" , sal: 35000, deptno: 20},
            { empno: 104, ename: "Khaalid", job: "Chennai" , sal: 18000, deptno: 30},
        ];

        setEmpsArray(data);

    }

    function addEmpClick()
    {
        let empObj = { };
        empObj.empno = empno; 
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.sal = sal; 
        empObj.deptno = deptno;
        

        let tempArray = [...empsArray];
        tempArray.push(empObj);       
        setEmpsArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function  deleteClick(eno)
    {


        let tempArray = [...empsArray];
        
        let  index = tempArray.findIndex( item => item.empno == eno );
        tempArray.splice(index, 1); 

        setEmpsArray( tempArray );
    }

    function  selectClick(eno)
    {
      let empObj =   empsArray.find(item =>  item.empno ==  eno);
      setEmpno(empObj.empno);
      setEname(empObj.ename);
      setJob(empObj.job);
      setSal(empObj.sal);
      setDeptno(empObj.deptno);
   
    }


    function  updateEmpClick()
    {
        let tempArray = [...empsArray];

        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
        tempArray[index].deptno = deptno ;


        setEmpsArray( tempArray );

        clearFields();
    }

    let resultArray = empsArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.empno)}}>Select</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.empno)}}>Delete</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Deptno" type="text"
                value={empno} onChange={(e) => setEmpno(e.target.value)} />

            <input placeholder="Dname" type="text"
                value={ename} onChange={(e) => setEname(e.target.value)} />

            <input placeholder="Loc" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />

            <input placeholder="Sal" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />

            <input placeholder="DeptNo" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />


            <hr />

            <input type="button" value="Get Employees" onClick={getEmpsClick} />
            <input type="button" value="Add Employee" onClick={addEmpClick} />
            <input type="button" value="Update Emplyee" onClick={updateEmpClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Employee Job</th>
                    <th>Employee Salary</th>
                    <th>Employee Dept No</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default EmpList;