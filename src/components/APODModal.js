import React from 'react';
import {
    Button, Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Text
} from "@chakra-ui/react";
import DisplayContent from "./DisplayContent";

const APODModal = ({isOpen, onClose, title, explanation, url, media_type}) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <DisplayContent media_type={media_type} url={url} height={"400px"}/>
                <Divider />
                <Text h={"300px"} p={2} overflow={"auto"} overflowX={"hidden"}>{explanation}</Text>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)

export default APODModal;