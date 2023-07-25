import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';


export default function Adminlogin() {
    const [userName, setUserName] = useState("");
    const [password, setpassword] = useState("");
    return (
        <>
            <div>
                <h1>Admin Login Form</h1>
                <div className='form'>
                    {/* Username field*/}

                    <TextField
                        id="input-with-icon-textfield"
                        label="Username"
                        sx={{ width: '90%' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        value={userName} onChange={(e) => { setUserName(e.target.value) }}
                    /><br /><br />


                    {/* Password field */}

                    <TextField
                        id="input-with-icon-textfield"
                        label="Password"
                        sx={{ width: '90%' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                        
                        variant="standard"
                        value={password} onChange={(e) => { setpassword(e.target.value) }}
                    /><br /><br />

                    <Button variant="contained">
                        Submit
                    </Button><br /><br />
                </div>
            </div>
        </>
    )
}
