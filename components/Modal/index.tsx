'use client';

import { createPortal } from 'react-dom';
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { ModalProps } from './types';

function Modal({ title, show, children, onClose }: ModalProps) {
  return (
    show &&
    createPortal(
      <div
        tabIndex={-1}
        className="fixed inset-0 z-50 p-4 overflow-x-hidden overflow-y-auto bg-black/5 backdrop-blur-sm flex items-center"
      >
        <div className="relative w-full max-w-2xl max-h-full m-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={onClose}
              >
                <XMarkIcon className="w-10 h-10" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>,
      document.body,
    )
  );
}

export default Modal;
