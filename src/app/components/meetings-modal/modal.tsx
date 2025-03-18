"use client"; // Client Component since modals require interactivity

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react"; // Icon for close button
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;

}

export default function ModalComponent({ open, onOpenChange, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal Content */}
        <Dialog.Content className="fixed left-1/2 top-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-md">
          {/* Close Button */}
          <Dialog.Close className="absolute right-3 top-3 text-gray-500 hover:text-gray-800">
            <X className="h-4 w-4" />
          </Dialog.Close>

          {/* Modal Content */}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
