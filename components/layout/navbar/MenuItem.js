import React from 'react';
import { Button, Link } from '@chakra-ui/react';

function menuItem(props) {
  return (
    <Link href={props.href}>
      <Button variant="ghost">{props.text}</Button>
    </Link>
  );
}

export default menuItem;
