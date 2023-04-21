import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {

    const { roomId } = useParams()

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
            maxPos = chars.length,
            i;
        len = len || 5;
        for (i = 0; i < len; i++) {
            result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
    }

    const myMeeting = async (element) => {
        const appId = 1930068824
        const serverSecret = "cb1b61bd7cde5d107ddb4a898fcfae4f"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, randomID(5), randomID(5))
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url: `${process.env.REACT_APP_CLIENT_URL}/room/${roomId}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }

    return (
        <div>
            <div
                className="myCallContainer"
                ref={myMeeting}
                style={{ width: '100vw', height: '100vh', padding: '100px', position: 'static !important' }}
            ></div>
        </div>
    )
}

export default RoomPage