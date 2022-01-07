import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import { AddUser } from "./AddUser";
import Home from "./Home";
import { NavBar } from "./NavBar";
import Users from "./Users";
import UsersList from "./UsersList";
import {EditUser} from "./EditUser";
import NotFound from "./NotFound";

export const Landing = () =>{
    return(
        <>
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                {/* <Route path="/list" element={<UsersList />} /> */}
                <Route path="/add" element={<AddUser />} />
                <Route path="/edit/:id" element={<EditUser />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </HashRouter>
            
        </>
    )
}