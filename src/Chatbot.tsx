import { MessengerChat } from "react-messenger-chat-plugin";
const ChatBot = () => {
    return(
        <MessengerChat
            pageId="209191082594903"
            language="sv_SE"
            themeColor={"#000000"}
            bottomSpacing={300}
            loggedInGreeting="loggedInGreeting"
            loggedOutGreeting="loggedOutGreeting"
            greetingDialogDisplay={"show"}
            debugMode={true}
            onMessengerShow={() => {
            console.log("onMessengerShow");
            }}
            onMessengerHide={() => {
            console.log("onMessengerHide");
            }}
            onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
            }}
            onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
            }}
            onMessengerMounted={() => {
            console.log("onMessengerMounted");
            }}
            onMessengerLoad={() => {
            console.log("onMessengerLoad");
            }}
        />
    )
}
export default ChatBot