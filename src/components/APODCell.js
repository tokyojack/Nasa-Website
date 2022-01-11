import React, {useState} from 'react';
import {Box, Center, Divider, Flex, Spacer, Text, useDisclosure} from "@chakra-ui/react";
import DisplayContent from "./DisplayContent";
import {ExternalLinkIcon, Icon} from "@chakra-ui/icons";
import APODModal from "./APODModal";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const APODCell = (props) => {

    const {title, date, media_type, url} = props;

    const {isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose} = useDisclosure();
    const [isLiked, setLiked] = useState(false);

    const onLikeClick = () => {
        setLiked(!isLiked);
    }

    return (
        <>
            <Box height='500px' borderRadius='lg' overflow='hidden' bg={"gray.50"} boxShadow='xl'>
                <Box height={450} overflow={"hidden"}>
                    <DisplayContent media_type={media_type} url={url} height={"450px"}/>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    p={2}
                    pl={4}
                >
                    <Flex>
                        <Center>
                            <Text overflow={"hidden"}><b>{title}</b> &bull; {date}</Text>
                        </Center>
                        <Spacer/>
                        <Center pr={2}>
                            <ExternalLinkIcon w={5} h={5} cursor={"pointer"} onClick={onModalOpen}/>
                            <Divider orientation='vertical' mx={4} borderColor={"black"}/>
                            <Icon w={6} h={6} color="red" as={isLiked ? AiFillHeart : AiOutlineHeart} cursor={"pointer"}
                                  onClick={onLikeClick}/>
                        </Center>
                    </Flex>
                </Box>
            </Box>
            <APODModal isOpen={isModalOpen} onClose={onModalClose} {...props} />
        </>
    )

}

export default APODCell;