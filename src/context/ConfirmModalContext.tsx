"use client"
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import { createContext, useState, useContext, ReactNode } from "react";

interface ModalContextProps {
  showModal: (message: string, onConfirmCallback: () => void) => void;
  hideModal: () => void;
}

const ConfirmModalContext = createContext<ModalContextProps | undefined>(undefined); 

export const ConfirmModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState(() => () => {});

  const showModal = (message: string, onConfirmCallback: () => void) => {
    setMessage(message);
    setOnConfirm(() => onConfirmCallback);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setMessage("");
    setOnConfirm(() => () => {});
  };

  return (
    <ConfirmModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isVisible && (
        <ConfirmModal
          message={message}
          onConfirm={() => {
            onConfirm();
            hideModal();
          }}
          onCancel={hideModal}
        />
      )}
    </ConfirmModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ConfirmModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
