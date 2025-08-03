"use client"

import * as Dialog from '@radix-ui/react-dialog';
import { FC, useEffect, useState } from 'react';
import { Button } from './primitives/button';

const WelcomeDialog: FC = () => {

  const [showDialog, setShowDialog] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited') === 'true';
    if (!hasVisited) {
      setShowDialog(true);
    }
  }, []);

  const handleClose = (): void => {
    sessionStorage.setItem('hasVisited', 'true');
    setShowDialog(false);
  };

  if (!showDialog) return null;
  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-sm transform -translate-x-1/2 -translate-y-1/2
             bg-white p-6 rounded-lg shadow-xl
             flex flex-col items-center justify-center text-center space-y-4">
          <Dialog.Title className="text-xl font-semibold mb-2">
            Welcome!
          </Dialog.Title>
          <Dialog.Description className="mb-4">
            This website doesn't use cookies so you don't need to agree to anything. Yay!
          </Dialog.Description>
          <Dialog.Close asChild>
            <Button
              // type="button"
              onClick={handleClose}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              OK
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default WelcomeDialog;