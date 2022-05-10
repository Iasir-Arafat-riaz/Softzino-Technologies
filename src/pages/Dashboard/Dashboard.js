import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useContextAuth from '../customHooks/useContextAuth';
import { useForm } from "react-hook-form";

const Dashboard = () => {
    const { register, handleSubmit } = useForm();
    const {userLogout,language, setLanguage}=useContextAuth()
  const onSubmit = data =>{
    setLanguage(data.Language)
  };
    console.log(language);
    return (
        <div className="MotherDashboard">
      <div style={{ positon: "relative" }} className="row ">
        <div className="col-md-2 dashboardItems">
          <div id="wrapper">
           
            <div class="bg-white" id="sidebar-wrapper">
             
              <div class="list-group list-group-flush my-3">
               {language=="English"&& <h4
                 
                 class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
               >
                 <i class="fas fa-project-diagram me-2"></i>  Sidebar
               </h4>}
               {language=="Bengali"&& <h4
                 
                 class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
               >
                 <i class="fas fa-project-diagram me-2"></i> সাইডবার
               </h4>}
               {
                   language=="English"&&  <Link
                   to="/dashboard/usersPage"
                   class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                 >
                   <i class="fas fa-chart-line me-2"></i>Users page
                 </Link>
               }
               {
                   language=="Bengali"&&  <Link
                   to="/dashboard/usersPage"
                   class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                 >
                   <i class="fas fa-chart-line me-2"></i>ব্যবহারকারীদের পৃষ্ঠা
                 </Link>
               }
                {
                    language=="English" && <Link
                    to="/dashboard/products"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i class="fas fa-paperclip me-2"></i>Products
                  </Link>
                }
                  {
                    language=="Bengali" && <Link
                    to="/dashboard/products"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i class="fas fa-paperclip me-2"></i>পণ্য
                  </Link>
                }
               
                <form onSubmit={handleSubmit(onSubmit)}>
      
      <select {...register("Language")}>
        <option value="English">English</option>
        <option value="Bengali">Bengali</option>
       
      </select>
      <input type="submit" value="Change"/>
    </form>
               {language=="English" &&  <Link
                  onClick={userLogout}
                  to="/Home"
                  class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                  <i class="fas fa-power-off me-2"></i>Logout
                </Link>}
                {language=="Bengali" &&  <Link
                  onClick={userLogout}
                  to="/Home"
                  class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                  <i class="fas fa-power-off me-2"></i>প্রস্থান
                </Link>}
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