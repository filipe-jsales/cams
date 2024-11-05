import React from 'react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({
  isOpen,
  onClose,
}: ForgotPasswordModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
          Esqueceu sua senha?
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Confirme seu e-mail abaixo.
        </p>
        <input
          type="email"
          placeholder="Confirme seu e-mail abaixo."
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400 text-gray-700"
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            Cancelar
          </button>
          <button className="px-6 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-900 focus:outline-none">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
