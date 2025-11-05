import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-full w-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div
            className="px-4 py-2 flex-shrink-0"
            style={{ backgroundColor: "#bec6c3" }}
          >
            <span style={{ color: "#3d4a55" }}>To:</span>{" "}
            <span className="font-bold" style={{ color: "#3d4a55" }}>
              {selectedConversation.fullName}
            </span>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col">
            <Messages />
          </div>
          <div className="flex-shrink-0">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
        <p style={{ color: "#3d4a55" }}>Welcome 👋 {authUser.fullName} </p>
        <p style={{ color: "#bec6c3" }}>Select a chat to start messaging</p>
        <TiMessages
          className="text-3xl md:text-6xl text-center"
          style={{ color: "#499fa4" }}
        />
      </div>
    </div>
  );
};
