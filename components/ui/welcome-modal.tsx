"use client"

import { FC, useEffect, useState } from 'react';

const WelcomeModal: FC = () => {

   const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowModal(true);
    }
  }, []);

  const handleClose = (): void => {
    localStorage.setItem('hasVisited', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">
          Welcome!
        </h2>
        <p className="mb-4">
          This website doesn't use cookies so you don't need to agree to anything. Yay!
        </p>
        <button
          onClick={handleClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default WelcomeModal;