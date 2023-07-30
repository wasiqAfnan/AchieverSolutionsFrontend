import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';


export default function Form() {
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


    // write logic to send data to the database in the below function
    const handleForm = (event) => {
        event.preventDefault();
        if (courseCode === '') {
            NotificationManager.error('Enter Course ID');
            return false;
        }
        if (courseName === '') {
            NotificationManager.error('Enter Course Name');
            return false;
        }
        if (courseDuration != 1 && courseDuration != 2 && courseDuration != 3 && courseDuration != 6 && courseDuration != 12) {
            console.log(courseDuration)
            NotificationManager.error('Enter Course Duration');
            return false;
        }
        if (courseCertification === '') {
            NotificationManager.error('Select an option in Course Certify');
            return false;
        }
        if (courseDescription === '') {
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
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#f5f5f5", fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem" }}>
            <form >
                <table style={{ textAlign: "left" }} className='addCourse'>
                    <tbody>
                        <tr>
                            <td className='formLabel'>
                                Course Code
                            </td>
                        </tr>
                        <tr >
                            <td colSpan="2">
                                <input type="text" placeholder='Enter Course Code'
                                    onChange={(e) => { setCourseCode(e.target.value) }}
                                ></input>
                            </td>
                        </tr>

                        <tr>
                            <td className='formLabel'>
                                Course Name
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="text" placeholder='Enter Course Name'
                                    onChange={(e) => { setCourseName(e.target.value) }}
                                ></input>
                            </td>
                        </tr>

                        <tr>
                            <td className='formLabel'>
                                Course Duration
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <select onChange={(e) => { setCourseDuration(e.target.value) }}>
                                    <option>--- Select ---</option>
                                    <option value={1}>One Month</option>
                                    <option value={2}>Two Month</option>
                                    <option value={3}>Three Month</option>
                                    <option value={6}>Six Month</option>
                                    <option value={12}> Twelve Month</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='formLabel'>
                                Certification Available
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <select onChange={(e) => { setCourseCertification(e.target.value) }}>
                                    <option>--- Select ---</option>
                                    <option value={'yes'}>Yes</option>
                                    <option value={'no'}>No</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='formLabel'>
                                Course Description
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                                <textarea placeholder='Course Description'
                                    onChange={(e) => { setCourseDescription(e.target.value) }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className='formLabel'>
                                Course Image
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="file" className="btn" onChange={(e) => {
                                    if (e.target.files.length !== 0) {
                                        setCoursePhoto(URL.createObjectURL(e.target.files[0]));
                                        setPhotoName(e.target.files[0].name)
                                    }
                                }} />
                            </td>

                            <td>
                                <img src={coursePhoto} alt="coursePhoto" width="200" height="80"
                                ></img>
                            </td>
                        </tr>


                        <tr>
                            <td className='formLabel'>
                                Course Notes
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="file" className="btn" onChange={(e) => {
                                    if (e.target.files.length !== 0) {
                                        setCourseNotes(URL.createObjectURL(e.target.files[0]));
                                        setNotesName(e.target.files[0].name)
                                    }
                                }} />
                            </td>

                            <td>
                                <p>{courseNotesName}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ margin: "30px 0px" }}>
                    <button className="btn btnSubmit" onClick={handleForm}>ADD COURSE</button>
                </div>
            </form>
            <NotificationContainer />

        </div>
    )
}
