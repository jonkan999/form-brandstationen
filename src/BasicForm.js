import './BasicForm.css';
import {Formik,ErrorMessage, Field, Form } from 'formik';
import React from 'react';
import formpic from './firstpage-pic.png'


export default class BasicForm extends React.Component {

  render() {
    
    return (
      <div className="main-div" >
        
        <img src={formpic} className="formpic"/>
        <h1>Tack för att du besöker oss! Fyll gärna i vårt formulär nedan, så kan vi hålla kontakt i framtiden.</h1>
        <Formik
          initialValues={{
            name: '',
            email: ''
          }}
          onSubmit={async (values) => {
            /*callAPI(values.name,values.email)*/
            /*console.log(JSON.stringify(values, null, 2));*/
            this.props.newValues({
              name: values.name,
              email: values.email
            })
            if (values.name != '' && values.email != '') {
              setTimeout(() => {this.props.startInd(true)}, 1000)
            }
            
          }}
          validate={values => {
            let errors = {};
            if (values.email === "") {
              errors.email = "Email is required";
            } 
            if (values.name === "") {
              errors.name = "Name is required";
            } 
            return errors;
          }}

        >
          <Form>
          <h1/>
            <label className='form-label' htmlFor="name">Namn <br/> </label>
            <Field className='form-field'
            id="name"
            name="name"
            placeholder="t. ex. Anders Andersson"
            />
            <ErrorMessage
              style={{color:"red"}}
              component="div"
              name="name"
              className="invalid-feedback"
            />
            <h1/>  
            <label className='form-label' htmlFor="email">Emailadress <br/> </label>
            <Field className='form-field'
            id="email"
            name="email"
            placeholder="t. ex. Anders@gmail.com"
            />
            <ErrorMessage
              style={{color:"red"}}
              component="div"
              name="email"
              className="invalid-feedback"
            />
            <h1/>
            <button className="submit-button" type="submit">
              Skicka
            </button>
            
          </Form>
        </Formik>
      </div>
    );
  }
}
