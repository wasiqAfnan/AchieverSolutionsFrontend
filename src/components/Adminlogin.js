import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Adminlogin() {
    const [userName, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
          Navigate("/dashboard/dashboardhome");
        }
        }
    )

    const handleClick = () => {

        if (userName === '') {
            
            toast.info('Enter Username', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        if (password === '') {
            
            toast.info('Enter Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }

        let data = {
            user: userName,
            password: password
        }

        axios.post("http://localhost:8080/api/admin/allAdmin", data)
            .then(function (response) {
                console.log('response', response);

                if (response.data.success) {
                    
                    toast.success('Login Successful', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Flip
                    });
                    localStorage.setItem("user-info", JSON.stringify(response.data));
                    Navigate('/dashboard');

                }
                else {
                    
                    toast.error(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

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
                        type="password"
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

                    <Button variant="contained" onClick={handleClick}>
                        Submit
                    </Button><br /><br />

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </>
    )
}
