import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Contacts } from '../../api/stuff/Contacts';

class Delete extends React.Component {
  removeContact(docID) {
    console.log(`Contact to delete is ${docID}`);
    Contacts.remove(docID);
  }

  render() {
   return (
       <div>
      <Button onClick={() => this.removeContact(this.props.contactId)}>
      Delete
      </Button>
      </div>);
  }
}
Delete.propTypes = {
  owner: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
export default Delete;
