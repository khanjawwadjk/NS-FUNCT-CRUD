import React,{useState} from 'react';
import { Button, Typography } from '@mui/material';

const myStyle ={
    margin:"40px auto",
    border:"2px solid black",
    height:"25rem",
    width:"40rem",
    padding:"20px",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",

    btn:{
        display:"flex",
        margin:"70px auto",
        marginLeft:"15rem",
    }
}

const Home = () => {
    const [cnt, setCnt] = useState(0);
    return (
        <div style={myStyle}>
            <h2>Counter</h2>
        
        <div style={myStyle.btn}>
            <Button variant="contained" onClick={()=>setCnt(cnt - 1)}>-</Button>&nbsp;&nbsp;&nbsp;
            <Typography>{cnt}</Typography>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={()=>setCnt(cnt + 1)}>+</Button>
        </div>
        </div>
    );
};

export default Home;