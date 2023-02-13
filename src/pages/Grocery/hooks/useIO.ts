import { io } from "socket.io-client";
import { useEffect } from "react";

export const useIo = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.on("connect", () => {
      console.log(socket.id);
    });
    // required as strict mode will render twice under dev env
    return () => {
      socket.disconnect();
    };
  }, []);
};
