import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
// private ket: 619d3a16-8d55-401c-97bb-28cffbeecd08
import dynamic from "next/dynamic";
const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);
export default function Chats() {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);
  const { userName, userSecret } = useContext(UserContext);
  console.log(userSecret, userName);
  useEffect(() => {
    // console.log("document data Chekcing");
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  useEffect(() => {
    if (userName === "" || userSecret === "") {
      router.push("/");
    }
  }, [userName, userSecret]);
  if (!showChat) return <div />;
  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="2c98b3dc-d903-4107-9705-501b5931ac55"
          userName={userName}
          userSecret={userSecret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
