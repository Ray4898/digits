import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Contacts } from '../../api/stuff/Contacts';
import swal from 'sweetalert';

class Delete extends React.Component {
  removeContact(docID) {
    swal({
      title: "Are you sure you want to delete this contact?",
      text: "Once deleted, you will not be able to recover this contact!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            console.log(`Contact to delete is ${docID}`);
            Contacts.remove(docID);
            swal("The contact has been deleted!", {
              icon: "success",
            });
          } else {
            swal("You canceled the deletion");
          }
        });


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
