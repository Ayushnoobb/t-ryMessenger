import { useEffect, useRef } from "react";
import ChatBot from "./Chatbot";

const App = () => {
    // const MessengerRef = useRef<any>();
    // useEffect(() => {
    //     if (MessengerRef.current) {
    //         MessengerRef.current.setAttribute('page_id', 209191082594903);
    //         MessengerRef.current.setAttribute('attribution', 'biz_inbox');
    //     }
    
    //     window.fbAsyncInit =  () => {
    //         window.FB.init({
    //             appId : 714647430026707 ,
    //             xfbml: true,
    //             version: 'v16.0',
    //         });
    //     };
    
    //     (function (d, s, id) {
    //         let js: HTMLScriptElement | null,
    //             fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s) as HTMLScriptElement;
    //         js.id = id;
    //         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    //         fjs.parentNode?.insertBefore(js, fjs);
    //     })(document, 'script', 'facebook-jssdk');
    // }, []);
    // console.log(MessengerRef)
    return (
        <>
            <div id="fb-root"></div>
            <ChatBot />
            {/* <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div> */}
        </>
    );
    }; 
export default App;