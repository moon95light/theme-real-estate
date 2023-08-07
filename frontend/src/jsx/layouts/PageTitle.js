import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ pageHeading, motherMenu, activeMenu }) => {
  let path = window.location.pathname.split("/");

  return (
    <div className="page-titles">
		<h4>{activeMenu}{pageHeading}</h4>	
		<ol className="breadcrumb">
			<li className="breadcrumb-item">
				<Link to={`/${path[path.length - 1]}`}>{motherMenu}</Link>
			</li>
			<li className="breadcrumb-item active">
			<Link to={`/${path[path.length - 1]}`}>{activeMenu}</Link>
			</li>
		</ol>
    </div>
  );
};

export default PageTitle;
