import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useEffect } from "react";

export const Index = ()=>{
    useEffect(()=>{

        const apiKey = import.meta.env.VITE_APP_VIDEO_SDK_API;
        const meetingId = "milkyway";
        const name = "Demo User";

        const config = {
            name: name,
            meetingId: meetingId,
            apiKey: apiKey,
      
            containerId: "vdoCall",
            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,
      
            chatEnabled: true,
            screenShareEnabled: true,
            participantCanLeave: true, // if false, leave button won't be visible
      
      
            permissions: {
              askToJoin: false, // Ask joined participants for entry in meeting
              toggleParticipantMic: true, // Can toggle other participant's mic
              toggleParticipantWebcam: true, // Can toggle other participant's webcam
              removeParticipant: true, // Remove other participant from meeting
              endMeeting: true, // End meeting for all participant
            },
      
            joinScreen: {
              visible: true, // Show the join screen ?
              title: "Daily scrum", // Meeting title
              meetingUrl: window.location.href, // Meeting joining url
            },
      
            pin: {
              allowed: true, // participant can pin any participant in meeting
              layout: "SIDEBAR", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
            },
      
            leftScreen: {
              actionButton: {
                label: "Powered by Kasinathan", // action button label
                href: "https://kasinathanb.vercel.app", // action button href
              },
            },
          };
          const meeting = new VideoSDKMeeting()
          meeting.init(config)
    },[])

    return(
        <div id="vdoCall">

        </div>
    )
}