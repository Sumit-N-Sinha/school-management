import React from "react";
import './Student.css';
const Student = () => {
return (
	<>
		
		<div class="sidebar">
    <div class="logo-details">
      <i class="bx bxl-c-plus-plus"></i>
      <span class="logo_name">Student Panel</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active">
            <i class="bx bx-grid-alt"></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-box"></i>
            <span class="links_name">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-list-ul"></i>
            <span class="links_name">Calender</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-pie-chart-alt-2"></i>
            <span class="links_name">Attendence</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-coin-stack"></i>
            <span class="links_name">Contact Mentor</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-book-alt"></i>
            <span class="links_name">Leave Details</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-user"></i>
            <span class="links_name">Fee Details</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-message"></i>
            <span class="links_name">Notifications</span>
          </a>
        </li>
    
        
        <li class="log_out">
          <a href="http://localhost:3000/">
            <i class="bx bx-log-out"></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class="bx bx-menu sidebarBtn"></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..."/>
        <i class="bx bx-search"></i>
      </div>
      
    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Notifications</div>
            <a class="btn btn-danger" href="Notification" role="button">My Noti</a>
            
          </div>
          <i class="bx bx-cart-alt cart"></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Attendence</div>
            <a class="btn btn-danger" href="AttendanceS" role="button">View</a>
            
          </div>
          <i class="bx bxs-cart-add cart two"></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Assessments</div>
            <a class="btn btn-danger" href="Assessment" role="button">Assessment</a>
            
          </div>
          <i class="bx bx-cart cart three"></i>
        </div>
        
      </div>
    </div>
	</section>
	</>
);
};

export default Student;
