import React, {useRef} from "react";
import { postData } from "../Services/APIs";

import {useNavigate} from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import "./users.css";


export const AddUser = () =>{
    const unameRef = useRef(null);
    const uageRef = useRef(null);
    const uphoneRef = useRef(null);

    //
    let navigate = useNavigate();

    const addUser = async(e) =>{
        e.preventDefault();
        let formData = {fullName:unameRef.current.value, age:uageRef.current.value, phone:uphoneRef.current.value};
        console.log("user ref==>",formData);
        await postData(formData);
        navigate("/users");
    }

    return(
        <React.Fragment>
       
                <Box component="form" noValidate  className="formClass">
                    <h1 >Add User</h1>
                    <br />
                    <TextField id="filled-basic" label="Name" variant="filled"  inputRef={unameRef}/>
                    <br /><br /><br />
                    <TextField id="filled-basic" label="Age" variant="filled" inputRef={uageRef}/>
                    <br /><br /><br />
                    <TextField id="filled-basic" label="Mobile" variant="filled" inputRef={uphoneRef}/>
                    <br />
                    <Button variant="contained" id="form-btn" onClick={(e)=> addUser(e)}>Add&nbsp;<AddOutlinedIcon /></Button>
                </Box>

        </React.Fragment>
    )
}