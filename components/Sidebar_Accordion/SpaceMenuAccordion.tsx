import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Input } from '@chakra-ui/react'
import { AddIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import { Space } from './spaceMode'


interface Props {
    space: Space
}



const SpaceMenuAccordion = ({ space }: Props) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <Box onMouseOver={() => setShowMenu(!showMenu)} onMouseOut={()=> setShowMenu(!showMenu)}>
            <Box display="flex" alignItems="center" my="5" cursor="pointer">
                {showMenu && <ChevronRightIcon position={'absolute'}/>}
                <Box 
                    backgroundColor="red" 
                    p="2" rounded="5px" ml="5" mr="2" color="white"
                    w="28px"
                    h="32px"
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="semibold">
                        {space._name.charAt(0).toUpperCase()}</Box>
                {space._name}

               
            </Box>
           
        </Box>
    )

}



export default SpaceMenuAccordion