"use client";

import { Contact } from '@prisma/client';
import { Card, CardTitle } from 'react-bootstrap';

/* Renders a single Contact. */
const ContactCardAdmin = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header className="text-left">
      <img
        src={contact.image}
        alt={`${contact.firstName} ${contact.lastName}`}
        width={75}
        height={75}
      />
      <CardTitle>
        {contact.firstName} {contact.lastName}
      </CardTitle>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <p className = "bloackquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;