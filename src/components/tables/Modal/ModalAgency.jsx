

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { PlusIcon } from "../PlusIcon";
import AddAgency from "@/components/forms/AddAgency";

export default function ModalAgency() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button  className="bg-foreground text-background"
      endContent={<PlusIcon />}
      size="sm" onPress={onOpen}> Add New </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex  gap-1"> Add <span className="text-green-500"> Agency Account</span></ModalHeader>
                <ModalBody>
                    <AddAgency/>
                </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={onClose}>
                  Add 
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
