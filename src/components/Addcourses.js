import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Addcourses() {
  const [cId,setCid] = useState('');
  const [cName,setCname] = useState('');
  const [cDesc,setCdesc] = useState('');

                              // write logic to send data to the database in the below function
  const handleSubmit=()=>{
    let data = {
      cid:cId,
      cname:cName,
      cdesc:cDesc
    }

    console.log(data);
  }
  return (
    <div className='addCourseForm'>
      <h1>Add Courses</h1>

      <form style={{ display: "flex", justifyContent: "center", fontFamily: "Poppins", fontSize: "1.0vw" }}>
        <table className="formTable">
          <tbody>
            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Course ID</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Course ID"
                  value={cId}
                  onChange={(e)=>{setCid(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Course Name</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  required
                  id="outlined-required2"
                  label="Course Name"
                  value={cName}
                  onChange={(e)=>{setCname(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Course Description</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Course Description"
                  multiline
                  maxRows={4}
                  value={cDesc}
                  onChange={(e)=>{setCdesc(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <Button variant="contained" size="large" onClick={handleSubmit}>Submit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
