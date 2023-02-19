import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

type NotificationType = {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: Date;
};

export const useNotification = () => {
  const [notifications, setNotifications] = useState<NotificationType[] | null>(
    null
  );

  useEffect(() => {
    socket.on("server:loadnotes", (data) => {
      setNotifications(data);
    });

    return () => {
      socket.off("disconnect");
    };
  }, []);

  const hideNotification = () => {
    setNotifications(null);
  };

  return { notifications, hideNotification };
};
