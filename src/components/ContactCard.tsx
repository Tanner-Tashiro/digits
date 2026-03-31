"use client";

import { Contact } from '@prisma/client';
import { Card, CardTitle } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

/* Renders a single Contact. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header className="text-left">
      <Image
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
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;