import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
		<div className="row justify-content-center h-100 align-items-center">
				<div className="col-md-12">
					
					<Field name="email" type="email" component={renderField} label="Email" />
				</div>
				<div className="col-md-12 mt-2">
					<div className="form-group">	
						<label className="font-w600">Gendar</label>
					<div>
						
						<label className="mr-2" >
							<Field name="sex" component="input" type="radio" value="male" />{" "} Male
						</label>
						<label>
							<Field name="sex" component="input" type="radio" value="female" />{" "} Female
						</label> 
						<Field name="sex" component={renderError} />
					</div>
				  </div>
				</div>
				<div className="col-md-12">
					<button type="button" className="previous btn btn-light mr-1" onClick={previousPage}>
						Previous
					</button>
					<button type="submit" className="next btn btn-primary ml-1">
						Next
					</button>
				</div>
		</div>	  
    </form>
  );
};

export default compose(
  connect((state, props) => {
    return {
      initialValues: {
        email: "Ram@gmail.com",
        sex: "female"
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
)(WizardFormSecondPage);
