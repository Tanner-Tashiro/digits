"use client";

import { Contact, Note } from '@prisma/client';
import { Card, CardTitle, ListGroup } from 'react-bootstrap';
import NoteItem from '@/components/NoteItem';
import Image from 'next/image';

/* Renders a single Contact. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
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
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
      </ListGroup>
      <p className = "blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;