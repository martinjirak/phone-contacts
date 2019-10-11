import { connect } from "react-redux";
import { Contact } from "../types";
import * as R from "ramda";
import * as React from "react";
import PhoneContactForm from "./PhoneContactForm";

interface StateProps {
  contacts: Contact[];
}

const PhoneContacts: React.FC<StateProps> = props => {
  const { contacts } = props;
  return (
    <>
      <PhoneContactForm />
      {contacts.length > 0 ? (
        <div>
          <div className="contactRowHeader">
            <div>ID:</div>
            <div>First Name:</div>
            <div>Last Name:</div>
            <div>Phone Number:</div>
            <div>Additional Comments:</div>
          </div>
          {R.map((phoneContact: Contact) => {
            return (
              <div key={phoneContact.id} className="contactRow">
                <div>{phoneContact.id}</div>
                <div>{phoneContact.firstName}</div>
                <div>{phoneContact.lastName}</div>
                <div>{phoneContact.phoneNumber}</div>
                <div className="contactRowComment">{phoneContact.comment}</div>
              </div>
            );
          })(contacts)}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state: any): StateProps => {
  return {
    contacts: state.contacts.phoneContacts
  };
};

export default connect(mapStateToProps)(PhoneContacts);
