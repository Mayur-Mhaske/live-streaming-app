import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Streaming = () => {
  const { userName } = useParams();
  const roomID = userName;

  // start the call
  let myMeeting = async (element) => {
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: "Share this link",
          url: `http://localhost:5173/stream/${roomID}`,
        },
      ],
    });
  };

  // generate Kit Token
  const appID = 2143753857;
  const serverSecret = "ec8281e77282a2b953415880b7d289a6";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    Date.now().toString(),
    userName
  );

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Streaming;
