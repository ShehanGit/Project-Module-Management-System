import React from "react";
import { Outlet } from 'react-router';
import Header from "../components/common/student/header/Header";
import Sidebar from "../components/common/student/sidebar/Sidebar";


export default function Student(){

    return(
		<div className="student-container">
			<div className="wrapper">
				<Header />
				<Sidebar />
				<Outlet/>
			</div>

		</div>
		 
    );
}