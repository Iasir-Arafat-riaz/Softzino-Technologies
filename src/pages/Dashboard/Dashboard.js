import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useContextAuth from '../customHooks/useContextAuth';


const Dashboard = () => {
    const {userLogout}=useContextAuth()
    return (
        <div className="MotherDashboard">
      <div style={{ positon: "relative" }} className="row ">
        <div className="col-md-2 dashboardItems">
          <div id="wrapper">
           
            <div class="bg-white" id="sidebar-wrapper">
             
              <div class="list-group list-group-flush my-3">
                <h4
                 
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-project-diagram me-2"></i>Sidebar
                </h4>
                <Link
                  to="/dashboard/usersPage"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-chart-line me-2"></i>Users page
                </Link>
                <Link
                  to="/dashboard/products"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-paperclip me-2"></i>Products
                </Link>
               

                <Link
                  onClick={userLogout}
                  to="/Home"
                  class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                  <i class="fas fa-power-off me-2"></i>Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 dashboardOrigin">
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default Dashboard;