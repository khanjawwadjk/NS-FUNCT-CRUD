import React,{useState,useEffect, useRef} from "react";

import {useNavigate, useParams} from "react-router-dom";

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {Form} from "react-bootstrap"; 

import "./users.css";

import {getDataByIdAPI, putData} from "../Services/APIs.js";

export const EditUser = () =>{
    const [proData, setProData] = useState({fullName:"", age:"", phone:""});
    const {id}= useParams();
    const navigate = useNavigate();

    //
    const unameRef = useRef(null);
    const uageRef = useRef(null);
    const uphoneRef = useRef(null);

    useEffect(()=>{
        // console.log(id);
        getDataByID(id);
    },[])

    //get data by id
    const getDataByID = async(id) =>{
        let resp = await getDataByIdAPI(id);
        setProData(resp.data);
        console.log("resp data edit==>",resp.data);
    }
    
    //
    const postEditData = async(e) =>{
        e.preventDefault();
        let formData = {fullName:unameRef.current.value, age:uageRef.current.value, phone:uphoneRef.current.value};
        await putData(id, formData);
        navigate("/users");

    }
    return(
        <React.Fragment>
       
                {/* <Box component="form" noValidate  className="formClass">
                    <h1 >Edit User</h1>
                    <br />
                    <TextField id="filled-basic" label="Name" variant="filled" inputRef={unameRef} defaultValue={proData.fullName}/>
                    <br /><br /><br />
                    <TextField id="filled-basic" label="Age" variant="filled" inputRef={uageRef} defaultValue={proData.age}/>
                    <br /><br /><br />
                    <TextField id="filled-basic" label="Mobile" variant="filled" inputRef={uphoneRef} defaultValue={proData.phone}/>
                    <br />
                    <Button variant="contained" id="form-btn">Edit</Button>
                </Box> */}

                <Form className="formClass">
                <h1 >Edit User</h1>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" ref={unameRef} defaultValue={proData.fullName}></Form.Control>
                    <br />
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="text" placeholder="Age" ref={uageRef} defaultValue={proData.age}></Form.Control>
                    <br />
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" placeholder="Phone" ref={uphoneRef} defaultValue={proData.phone}></Form.Control>
                    <br />
                    <Button variant="contained" id="form-btn" onClick={(e)=> postEditData(e)}>Edit</Button>
                </Form>

        </React.Fragment>
    )
}