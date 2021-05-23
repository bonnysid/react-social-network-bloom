import {CHAT_URL, instance} from "./constants";
import store from "../store/redux-store";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import {authHeader} from "./helpers";
import {IMessage} from "../interfaces/dialogs-interfaces";
import {addMessage} from "../store/action-creators/dialogs-ac";

const dispatch = store.dispatch
let stompClient: Stomp.Client;

const ChatAPI = {

    connectToChat(id: number | string) {
        console.log('Connecting to chat...')
        const socket = new SockJS(`${CHAT_URL}/chat`)
        stompClient = Stomp.over(socket)
        stompClient.connect(authHeader(), frame => {
            console.log(`connected to: ${frame}`)
            stompClient.subscribe(`/topic/messages/${id}`, response => {
                const data: IMessage = JSON.parse(response.body);
                dispatch(addMessage(data));
            });
        })
    },

    sendMessage(to: number | string, dialogId: number | string, idFromUser: number | string, text: string) {
        stompClient.send('/app/chat/' + to, authHeader(), JSON.stringify({
            dialogId,
            idFromUser,
            text,
            date: new Date()
        }))
    },

    createDialog(id: string | number) {
        return instance.post(`dialogs/${id}`)
    },

    getDialogs() {
        return instance.get(`dialogs`);
    },

    getMessages(id: string | number) {
        return instance.get(`dialogs/${id}/messages`)
    },
    deleteMessage(id: string | number) {
        return instance.delete(`message/${id}`);
    },
    updateMessage(id: string | number, text: string) {
        return instance.put(`message/${id}`, {
            text
        })
    }
}

export default ChatAPI;
