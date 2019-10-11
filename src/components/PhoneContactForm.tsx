import { addContact } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Contact } from "../types";
import {
  fieldToTextField,
  TextField,
  TextFieldProps
} from "formik-material-ui";
import { Formik, Field, Form } from "formik";
import { getId, normalizePhoneNumber } from "../helpers/factory";
import * as R from "ramda";
import * as React from "react";
import * as validators from "../helpers/formikValidators";
import Button from "@material-ui/core/Button";
import MuiTextField from "@material-ui/core/TextField";

interface StateProps {
  contacts: Contact[];
}

interface ActionProps {
  addContact: (contact: Contact) => any;
}

const PhoneTextField = (props: TextFieldProps) => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const { value } = event.target;
      const match = R.pipe(
        R.match(/\+|\(|\)|-|\s|\d/g),
        R.join("")
      )(value);
      props.form.setFieldTouched(props.field.name);
      props.form.setFieldValue(props.field.name, !!match ? match : "");
    }}
  />
);

const PhoneContactForm: React.FC<ActionProps & StateProps> = props => {
  const { addContact, contacts } = props;

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        comment: ""
      }}
      validateOnChange
      validateOnBlur
      onSubmit={(values, { resetForm, setSubmitting }) => {
        addContact({
          id: getId(`${values.firstName} ${values.lastName}`, contacts),
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: normalizePhoneNumber(values.phoneNumber) || "",
          comment: values.comment
        });
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form className="contactsForm">
          <Field
            name="firstName"
            label="First Name"
            type="text"
            component={TextField}
            margin="normal"
            className="contactsFormFirstName"
            validate={validators.validateName}
          />
          <Field
            name="lastName"
            label="Last Name"
            type="text"
            component={TextField}
            margin="normal"
            className="contactsFormLastName"
            validate={validators.validateName}
          />
          <Field
            name="phoneNumber"
            label="Phone"
            type="text"
            component={PhoneTextField}
            margin="normal"
            className="contactsFormPhone"
            validate={validators.validatePhone}
          />
          <Field
            name="comment"
            label="Additional comment"
            type="text"
            component={TextField}
            margin="normal"
            className="contactsFormComment"
          />
          <Button
            type="submit"
            className="contactsFormSubmit"
            disabled={!isValid || isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state: any): StateProps => {
  return {
    contacts: state.contacts.phoneContacts
  };
};

const mapDispatchToProps = (dispatch: any): ActionProps =>
  bindActionCreators(
    {
      addContact
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneContactForm);
