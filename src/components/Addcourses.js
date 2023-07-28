import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { grey } from '@mui/material/colors';
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import {NotificationContainer, NotificationManager} from 'react-notifications';



export default function Addcourses() {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState('Course Duration');
  const [courseCertification, setCourseCertification] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [coursePhoto, setCoursePhoto] = useState('');
  const [courseNotes, setCourseNotes] = useState('');
  const [courseVideo, setCourseVideo] = useState('');
  const [coursePhotoName, setPhotoName] = useState('');
  const [courseNotesName, setNotesName] = useState('');
  const [courseVideoName, setVideoName] = useState('');
  const [isHovering, setIsHovering] = useState(false);




  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // write logic to send data to the database in the below function
  const handleSubmit = () => {
    if (courseCode === '') {
      NotificationManager.error('Enter Course ID');
      return false;
    }
    if (courseName === '') {
      NotificationManager.error('Enter Course Name');
      return false;
    }
    if (courseDuration !== 1 && courseDuration !== 2 && courseDuration !== 3 && courseDuration !== 6 && courseDuration !== 12) {
      NotificationManager.error('Enter Course Duration');
      return false;
    }
    if (courseCertification === '') {
      NotificationManager.error('Select an option in Course Certify');
      return false;
    }
    if(courseDescription === ''){
      NotificationManager.error('Enter Course Description');
      return false;
    }
    if (coursePhotoName === '') {
      NotificationManager.error('Upload a course Photo');
      return false;
    }
    if (courseNotesName === '') {
      NotificationManager.error('Upload course Notes');
      return false;
    }
    

    let data = {
      courseCode: courseCode,
      courseName: courseName,
      courseDuration: courseDuration,
      courseCertification: courseCertification,
      courseDescription: courseDescription,
      coursePhoto: coursePhoto,
      courseNotes: courseNotes,
      courseVideo: courseVideo,
    }

    console.log(data);
  }
  return (
    <div className='addCourseForm'>
      <h1>Add Courses</h1>

      <form className="courseForm">
        <table className="formTable">
          <tbody>
            <tr className="formTableRow">
              <td className="formTableDetail">
                <label className="formLabel">Course Code</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  style={{ width: "100%" }}
                  fullWidth
                  required
                  id="outlined-required"
                  label="Course Code"
                  value={courseCode}
                  onChange={(e) => { setCourseCode(e.target.value) }}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label className="formLabel">Course Name</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  required
                  id="outlined-required2"
                  label="Course Name"
                  value={courseName}
                  onChange={(e) => { setCourseName(e.target.value) }}
                />
              </td>
            </tr>


            <tr >
              <td className="formTableDetail">
                <label className="formLabel">Course Duration</label>
              </td>
            </tr>
            <tr>
              <td>
                <Select
                  fullWidth
                  id="demo-simple-select"
                  displayEmpty
                  value={courseDuration}
                  onChange={(e) => { setCourseDuration(e.target.value) }}
                >
                  <MenuItem value=""><em>Select</em></MenuItem>
                  <MenuItem value={1}>One Month</MenuItem>
                  <MenuItem value={2}>Two Month</MenuItem>
                  <MenuItem value={3}>Three Month</MenuItem>
                  <MenuItem value={6}>Six Month</MenuItem>
                  <MenuItem value={12}>Twelve Month</MenuItem>
                </Select>
              </td>
            </tr>


            <tr >
              <td className="formTableDetail">
                <label className="formLabel">Certification Available</label>
              </td>
            </tr>
            <tr>
              <td>
                <Select
                  fullWidth
                  id="demo-simple-select"
                  displayEmpty
                  value={courseCertification}
                  onChange={(e) => { setCourseCertification(e.target.value) }}
                >
                  <MenuItem value=""><em>Select</em></MenuItem>
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label className="formLabel">Course Description</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Course Description"
                  multiline
                  maxRows={10}
                  value={courseDescription}
                  onChange={(e) => { setCourseDescription(e.target.value) }}
                />
              </td>
            </tr>



            <tr >
              <td className="formTableDetail">
                <pre style={{ fontFamily: "Poppins" }}><label>Course Photo                      Course Pdf                        Course Video</label></pre>
              </td>
            </tr>
            <tr>
              <td>
                <tr style={{ display: "flex", justifyContent: "space-between" }}>
                  <td >
                    <Button

                      variant="contained"
                      component="label"
                    >
                      Upload File
                      <input
                        type="file"
                        name="coursePhoto"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files.length !== 0) {
                            setCoursePhoto(URL.createObjectURL(e.target.files[0]));
                            setPhotoName(e.target.files[0].name)
                          }
                        }}
                        hidden
                      />
                    </Button>
                  </td>

                  <td>
                    <Button

                      variant="contained"
                      component="label"
                    >
                      Upload File
                      <input
                        type="file"
                        name="courseNotes"
                        accept="application/pdf"
                        onChange={(e) => {
                          if (e.target.files.length !== 0) {
                            setCourseNotes(URL.createObjectURL(e.target.files[0]));
                            setNotesName(e.target.files[0].name)
                          }
                        }}
                        hidden
                      />
                    </Button>
                  </td>

                  <td>
                    <Button

                      variant="contained"
                      component="label"
                    >
                      Upload File
                      <input
                        type="file"
                        name="courseNotes"
                        accept="video/*"
                        onChange={(e) => {
                          if (e.target.files.length !== 0) {
                            setCourseVideo(URL.createObjectURL(e.target.files[0]));
                            setVideoName(e.target.files[0].name)
                          }
                        }}
                        hidden
                      />
                    </Button>
                  </td>
                </tr>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: "flex", gap: "50px", width: "28%" }}>
                  <img style={{ width: "100%", height: "100%"}} src={coursePhoto} />
                  <p style={{ width: "100%", height: "50%", marginLeft: "2vw" }}>{courseNotesName}</p>
                  <p style={{ width: "100%", height: "50%", marginLeft: "5vw" }}>{courseVideoName}</p>
                </div>
              </td>

            </tr>
            <tr >
              <td className="formTableDetail">
                <Button style={{
                  border: "0.5px solid",
                  borderColor: isHovering ? 'cyan' : 'grey',
                  backgroundColor: isHovering ? 'grey' : 'white',
                  color: isHovering ? 'white' : 'grey',
                }}
                  fullWidth
                  onClick={handleSubmit}
                  size="large"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  
                >
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <NotificationContainer/>
    </div>
  )
}
