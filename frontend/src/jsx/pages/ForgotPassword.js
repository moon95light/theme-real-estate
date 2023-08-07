import React from "react";
//import { Link } from "react-router-dom";
const ForgotPassword = ({ history }) => {
   const onSubmit = (e) => {
      e.preventDefault();
      history.push("/");
   };
   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            {" "}
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Forgot Password
                              </h4>
                              <form onSubmit={(e) => onSubmit(e)}>
                                 <div className="form-group">
                                    <label>
                                       <strong>Email</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       defaultValue="hello@example.com"
                                    />
                                 </div>
                                 <div className="text-center">
                                    <input
                                       type="submit"
                                       value="SUBMIT"
                                       className="btn btn-primary btn-block"
                                    />
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForgotPassword;
