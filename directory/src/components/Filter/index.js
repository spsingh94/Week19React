import React from 'react';

function Filter (){
    return (
<table className="table">
<td>Filter:</td>
<input type="text" id="fid" name="fname" placeholder="Employee ID"></input>
<input type="text" id="fname" name="fname" placeholder="Name"></input>
<input type="text" id="fdepartment" name="fname" placeholder="Department"></input>
<input type="text" id="ffloor" name="fname" placeholder="Floor"></input>
</table>
    )
};

export default Filter;