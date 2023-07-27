import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Form() {
    return (
        <div>
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
                                    id="outlined-required"
                                    label="Course Name"
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
                                />
                            </td>
                        </tr>

                        <tr >
                            <td className="formTableDetail">
                                <Button variant="contained" size="large">Submit</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
