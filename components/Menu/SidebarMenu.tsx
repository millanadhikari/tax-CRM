import React, { useState } from 'react'
import { Box, Flex, Icon, Spacer } from '@chakra-ui/react'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import { AiOutlineHome } from 'react-icons/Ai'
import { BiBellMinus } from 'react-icons/Bi'
import { GiBowlingPropulsion } from 'react-icons/Gi'
import { GiTargetPrize } from 'react-icons/Gi'
import NavLink from './NavLink'

const SidebarMenu = () => {

    const [showLess, setShowLess] = useState<boolean>(false);

    return (
        <Box position="absolute" color="gray.500" mt="20px" w="300px" >
            <NavLink to="/home" activeProps={{ backgroundColor: "red.900" }}>
                <Flex
                    role="group"
                    px="8"
                    py="2"
                    // _hover={{ backgroundColor: "gray.100" }}
                    w="100%" alignItems="center" cursor="pointer"
                    fontSize="15px" >
                    <Icon
                        fontSize="20px"
                        //  _groupHover={{ backgroundColor: "gray.100" }} 
                        aria-label='Search database' textAlign="center" mr="3"
                        as={AiOutlineHome} />
                    Home</Flex>
            </NavLink>
            <NavLink to="/notifications" activeProps={{ backgroundColor: "red.900" }}>

                <Flex role="group"
                    px="8"
                    py="2"
                    _hover={{ backgroundColor: "gray.100" }}
                    _active={{ backgroundColor: "purple" }}
                    w="100%" alignItems="center" cursor="pointer"
                    fontSize="15px" >
                    <Icon
                        _hover={{ background: "gray.100" }} fontSize="20px" _groupHover={{ backgroundColor: "gray.100" }} backgroundColor="white" aria-label='Search database' textAlign="center" mr="3"
                        as={BiBellMinus} />Notifications</Flex>
            </NavLink>
            {showLess &&
                <Box>
                    <Flex role="group"
                        px="8"
                        py="2"
                        _hover={{ backgroundColor: "gray.100" }}
                        w="100%" alignItems="center" cursor="pointer"
                        fontSize="15px">
                        <Icon
                            _hover={{ background: "gray.100" }} fontSize="20px" _groupHover={{ backgroundColor: "gray.100" }} backgroundColor="white" aria-label='Search database' textAlign="center" mr="3"
                            as={GiBowlingPropulsion} />Pulse</Flex>
                    <Flex role="group"
                        px="8"
                        py="2"
                        _hover={{ backgroundColor: "gray.100" }}
                        w="100%" alignItems="center" cursor="pointer"
                        fontSize="15px">
                        <Icon
                            _hover={{ background: "gray.100" }} fontSize="20px" _groupHover={{ backgroundColor: "gray.100" }} backgroundColor="white" aria-label='Search database' textAlign="center" mr="3"
                            as={GiTargetPrize} />Goals</Flex>
                </Box>}
            {showLess ?
                <Box onClick={() => setShowLess(!showLess)}>
                    <Flex role="group"
                        px="8"
                        py="2"
                        _hover={{ backgroundColor: "gray.100" }}
                        w="100%" alignItems="center" cursor="pointer"
                        fontSize="15px" >
                        <Icon
                            _hover={{ background: "gray.100" }} fontSize="20px" _groupHover={{ backgroundColor: "gray.100" }} backgroundColor="white" aria-label='Search database' textAlign="center" mr="3"
                            as={ArrowUpIcon} />Show less</Flex>
                </Box> :
                <Box onClick={() => setShowLess(!showLess)}>
                    <Flex role="group"
                        px="8"
                        py="2"
                        _hover={{ backgroundColor: "gray.100" }}
                        w="100%" alignItems="center" cursor="pointer"
                        fontSize="15px" >
                        <Icon
                            _hover={{ background: "gray.100" }} fontSize="20px" _groupHover={{ backgroundColor: "gray.100" }} backgroundColor="white" aria-label='Search database' textAlign="center" mr="3"
                            as={ArrowDownIcon} />Show More</Flex>
                </Box>}
        </Box>
    )
}


export default SidebarMenu