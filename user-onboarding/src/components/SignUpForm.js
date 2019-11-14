import React from "react";
import {Form,Field, withFormik} from "formik";
import * as Yup from "yup";

const SignUpForm =({values,errors,touched})=>{
    return(
        <div className="rightBox">
            <h1>Sign Up</h1>
            <Form className="formBox"> 
                <label> Name:
                <Field name="name" type="text"/></label>
                {touched.name && errors.name && ( <p className="errorMSG">{errors.name}</p>)}
                
                <label> Email:
                <Field name="email" type="email"/></label>
                {touched.email && errors.email && ( <p className="errorMSG">{errors.email}</p>)}
                
                <label> Password:
                <Field name="password" type="password"/></label>
                {touched.password && errors.password && ( <p className="errorMSG">{errors.password}</p>)}
                
                <label> Confirm Password:
                <Field name="confirmPassword" type="password"/></label>
                
                <label> agree to the Terms of Service</label>
                <Field name="termsOfService" type="checkbox" checked={values.termsOfService}/>
                {touched.termsOfService && errors.termsOfService && ( <p className="errorMSG">{errors.termsOfService}</p>)}
                
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({name,email,password,confirmPassword,termsOfService}){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || "",
            termsOfService: termsOfService || false,
            
        };
    },
    validationSchema: Yup.object().shape({
        name:Yup.string().required(),
        email:Yup.string().email("Invalid email").required(),
        password:Yup.string().required(),
        termsOfService:Yup.boolean().oneOf([true],"agreed to terms of service required"),

    })
})(SignUpForm);

export default FormikSignUpForm;