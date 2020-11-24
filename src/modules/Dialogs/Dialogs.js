import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages';

const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), lastMsg: 'Hello', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'},
        {id: 2, name: 'Ira Pauchok', time: new Date().toTimeString().substr(0, 9), lastMsg: 'Where is my money', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f'},
        {id: 3, name: 'Nikita Brekhov', time: new Date().toTimeString().substr(0, 9), lastMsg: 'Go cs!', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b'}
    ];

    return (
        <main className={`${s.content}`}>
            <div className={`${s.header} block`}>
                <h1 className={s.title}>messages</h1>
                {/* <div className="underline"></div> */}
            </div>
            <aside className={s.people}>
                {dialogsData.map(dialog => (
                    <Dialog
                        id={dialog.id} 
                        name={dialog.name}
                        time={dialog.time}
                        lastMsg={dialog.lastMsg}
                        avatarLink={dialog.avatarLink}
                    />
                ))}
            </aside>
            <Messages
                name="Yana Pros"
            />
        </main>
    );
}

export default Dialogs;