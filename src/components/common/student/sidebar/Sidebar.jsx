import React from "react";
import './sidebar.css';
import profile from '../../../../images/1.jpg';
import {Link} from 'react-router-dom';

export default function Sidebar(){
    return(
        <div className="sidebar">
				
			
			<div class="profile_info">
				<img className="profile_image" alt="profile" src={profile}/>
				<h6>Disanayake D.M.S.</h6>
				<h6>IT22345678</h6>
			</div>
			<Link to={"/student/"}><i class="fas fa-desktop"></i><span>Dashboard</span></Link>
			<Link to={"/student/"}><i class="fas fa-sliders-h"></i><span>Module page</span></Link>
			<Link to={"/student/"}><i class="fas fa-table"></i><span>Group Details</span></Link>
			<Link to={"/student/"}><i class="fas fa-th"></i><span>Group Registration</span></Link>
			<Link to={"/student/"}><i class="fas fa-cogs"></i><span>Paper Publication</span></Link>
			<Link to={"/student/"}><i class="fas fa-info-circle"></i><span>Marks</span></Link>
			
		</div>
    );
}