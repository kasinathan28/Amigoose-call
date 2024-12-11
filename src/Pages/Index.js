import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const apiKey = process.env.REACT_APP_VIDEO_SDK_API;

export const Index = () => {
  const { userName } = useParams(); // This will extract the userName from the URL

  console.log(userName);

  let i = 0;
  useEffect(() => {
    if (!apiKey) {
      console.error("API key is missing!");
      return;
    }

    const name = userName;
    console.log("Number of render", i++);

    const meetingId = "milkyway";

    const config = {
      name,
      meetingId,
      apiKey,
      containerId: "vdoCall",
      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      chatEnabled: true,
      screenShareEnabled: true,
      participantCanLeave: true,
      permissions: {
        askToJoin: false,
        toggleParticipantMic: true,
        toggleParticipantWebcam: true,
        removeParticipant: true,
        endMeeting: true,
      },
      joinScreen: {
        visible: true,
        title: "Daily scrum",
        meetingUrl: window.location.href,
      },
      pin: {
        allowed: true,
        layout: "SIDEBAR",
      },
      leftScreen: {
        actionButton: {
          label: "Powered by Kasinathan",
          href: "https://kasinathanb.vercel.app",
        },
      },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);

    // Cleanup if needed
  }, [apiKey]); // Empty dependency array ensures this runs only once
  if (!userName) {
    console.error("User Name is missing!");
    return;
  }
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div id="vdoCall" style={{ position: "relative" }}></div>
    </div>
  );
};
