import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/** Define a Mongo collection to hold the data. */
const Contacts = new Mongo.Collection('Contacts');

/** Define a schema to specify the structure of each document in the collection. */
const ContactSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  address: String,
  image: String,
  description: String,
  owner: String,
});

/** Attach this schema to the collection. */
Contacts.attachSchema(ContactSchema);

/** Make the collection and schema available to other code. */
export { Contacts, ContactSchema };
