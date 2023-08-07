import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
		<form onSubmit={handleSubmit}>
			<div className="validate-redux-form row">
				<div className="col-sm-12">
					<Field name="firstName" type="text" component={renderField} label="First Name"/>
				</div>	
				<div className="col-sm-12">
					<Field name="lastName"  type="text" component={renderField} label="Last Name"/>
				</div>	
				<div className="col-sm-12 mt-4 ">
					<button  type="submit" className="next btn btn-primary"> Next</button>
				</div>
			</div>
		</form>
  );
};

export default compose(
	connect((state, props) => {
    return {
		initialValues: {
			firstName: "Ram",
			lastName: "Bharat"
		}
    };
  }),
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
    enableReinitialize: true
  })
)(WizardFormFirstPage);