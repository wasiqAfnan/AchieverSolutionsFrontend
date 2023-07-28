import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddNotice() {
  const [noticeId,setNoticeId] = useState('');
  const [noticeTitle,setNoticeTitle] = useState('');
  const [noticeDesc,setNoticeDesc] = useState('');

                              // write logic to send data to the database in the below function
  const handleSubmit=()=>{
    let data = {
      noticeid:noticeId,
      noticetitle:noticeTitle,
      noticedesc:noticeDesc
    }

    console.log(data);
  }
  return (
    <div>
      <h1>Add Notices</h1>
      <form style={{ display: "flex", justifyContent: "center", fontFamily: "Poppins", fontSize: "1.2rem" }}>
        <table className="formTable">
          <tbody>
            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Notice No</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Course ID"
                  value={noticeId}
                  onChange={(e)=>{setNoticeId(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Notice Title</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  required
                  id="outlined-required2"
                  label="Course Name"
                  value={noticeTitle}
                  onChange={(e)=>{setNoticeTitle(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Notice Description</label>
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
                  value={noticeDesc}
                  onChange={(e)=>{setNoticeDesc(e.target.value)}}
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
