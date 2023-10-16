/* eslint-disable no-console */
'use client';

import { useEffect, useRef } from 'react';

import { SocketOptions } from './types';

function useSocket(options?: SocketOptions) {
  const socketRef = useRef<WebSocket | null>(null);
  useEffect(() => {
    socketRef.current = new WebSocket(
      process.env.NEXT_PUBLIC_WEBSOCKET as string,
    );

    socketRef.current.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socketRef.current.onmessage = (event) => {
      options?.onMessage?.(event);
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    return () => {
      // Cleanup on component unmount
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [options]);

  const sendMessage = (message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
      console.log('Sent message:', message);
    } else {
      console.error('WebSocket connection not open.');
    }
  };

  return { sendMessage };
}

export default useSocket;
