import React from "react";
import {AppBar, Toolbar, Box} from '@mui/material';
import {Link} from "react-router-dom";

const myStyles = {
    color:"white",
    margin:"20px",
    fontSize:"1.7rem",
    fontWeight:"bold",
    textDecoration:"none",

    appBar:{
        height:"90px",
        padding:"10px",
        backgroundColor:"black"
    }
}

export const NavBar = () =>{
    return(
        <React.Fragment>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"  style={myStyles.appBar}>
                    <Toolbar>
                        <Link variant="h5" component="div" style={myStyles} to="/">Home</Link>
                        <Link variant="h5" component="div" style={myStyles} to="/users">Users</Link>
                        {/* <Link variant="h5" component="div" style={myStyles} to="/list">Users's List</Link> */}
                        <Link variant="h5" component="div" style={myStyles} to="/add">Add User</Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}