import React from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Box
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react';
  import useURLParam from '../hooks/useURLParam';


/**
* @author
* @function 
**/

export const Petname = ({name, title, description}) => {
  const isPopoverOpen = useURLParam('letter', name);
  const toast = useToast();

  const constructItemURL = () => {
    const browserURL = new URL(window.location.href);
    return `${browserURL}?letter=${name}`;
  }

  return(
    <Popover 
      defaultIsOpen={isPopoverOpen} 
      arrowSize='10'
      arrowShadowColor='#E2E8F0'
      arrowPadding='8'
      >
      <PopoverTrigger>
        <Button w='80%'>{name}</Button>
      </PopoverTrigger>
      <PopoverContent border='1px solid #E2E8F0' p='3%' bg='#feffee'>
        <PopoverArrow bg='#feffee' />
        <PopoverCloseButton w='7%' p='3' alignSelf='flex-end' />
        <PopoverHeader fontSize='18' fontWeight='600' fontStyle='italic' my='1.5'>{title}</PopoverHeader>
        <PopoverBody>{description}</PopoverBody>
        <PopoverFooter my='3%'>
          <Button onClick={() => {
            const itmLink = constructItemURL();
            navigator.clipboard.writeText(itmLink);
            // console.log(value);
            toast({
              title: 'Share link copied to clipboard.',
              description: itmLink,
              variant: 'left-accent',
              status: 'success',
              duration: 2000,
              isClosable: true,
            });
          }}>Share link</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
   )
  }

  