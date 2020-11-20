import React from 'react';
import { Button, Link } from '@chakra-ui/react';

function menuItem(props) {
  return (
    <Button variant="ghost">
      <Link href={props.href}>{props.text}</Link>
    </Button>
  );
}

export default menuItem;
