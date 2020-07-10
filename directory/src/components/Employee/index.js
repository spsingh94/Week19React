import React from 'react';
import './style.css';

function Employee (){
    return (
<table className="emp_table">
    <br></br>
<p>New Employee Imformation</p>
<input type="text" id="newfid" name="fname" placeholder="Employee ID"></input> <br></br>
<input type="text" id="newfname" name="fname" placeholder="Name"></input> <br></br>
<input type="text" id="newfdepartment" name="fname" placeholder="Department"></input> <br></br>
<input type="text" id="newffloor" name="fname" placeholder="Floor"></input> <br></br>
</table>
    )
};

export default Employee;