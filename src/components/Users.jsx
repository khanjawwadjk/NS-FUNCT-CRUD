import React, {useState, useEffect, Children} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material';

import "./users.css";
import {Link} from "react-router-dom";
import {getData, delRecordAPI} from "../Services/APIs.js";

const myStyle = {
    fontSize:"1.3rem",
    backgroundColor:"gray",

    rowStyle:{
        fontSize:"1rem",
        padding:"22px"
    },

    btnStyle:{
        margin:"10px",
        padding:"10px",
        float:"right",
    }
}

export default function Users() {
    const [APIData, setData] = useState([]);
    console.warn(APIData);

    useEffect(()=>{
        getAPI();
    },[]);

    const getAPI = async() =>{
        let resp = await getData();
        setData(resp.data);
    } 

    //delete
    const delRecord = async(id) =>{
        // alert(id);
        await delRecordAPI(id);
        getAPI();
    }

    //edit
    const editProd = (id) =>{
        // alert(id);
    }

    return (
        <div>
            <h2>User's Details</h2>
            <TableContainer component={Paper} style={{width:"60rem", padding:"20px", margin:"10px auto"}} >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={myStyle}><b>Sr. No.</b></TableCell>
                        <TableCell style={myStyle}><b>Full Name</b></TableCell>
                        <TableCell style={myStyle} align="right"><b>Age</b></TableCell>
                        <TableCell style={myStyle} align="right"><b>Phone</b></TableCell>
                        <TableCell style={myStyle} align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                            {APIData.map((items, index)=>{
                                return(
                                    <TableRow key={items.id} className="rowClass">
                                        <TableCell style={myStyle.rowStyle} component="th" scope="row">{index+1}</TableCell>
                                        <TableCell style={myStyle.rowStyle} component="th" scope="row">{items.fullName}</TableCell>
                                        <TableCell style={myStyle.rowStyle} align="right">{items.age}</TableCell>
                                        <TableCell style={myStyle.rowStyle} align="right">{items.phone}</TableCell>
                                        <TableCell>
                                        <Button  variant="outlined" color="error" style={myStyle.btnStyle} onClick={()=> delRecord(items.id)}>Delete</Button>
                                        <Link to={{pathname:`/edit/${items.id}`}}>     
                                        <Button  variant="outlined" color="warning" style={myStyle.btnStyle} onClick={()=> editProd(items.id)}>Edit</Button>
                                        </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
