import React from 'react';
import { useColorMode, IconButton, DarkMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function DarModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Dark Swtich"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
}
