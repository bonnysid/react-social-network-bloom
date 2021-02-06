import React from 'react';
import s from './Description.module.css';
import SocialLink from "../../HelpfulComponents/SocialLink";
import ProfileStatus from "./ProfileStatus";

const Description = ({name, status, contacts, about, updateUserStatus}) => {

    const contactsLinks = [];

    for(let key in contacts) {
        if (contacts[key]) {
            contactsLinks.push(<SocialLink key={key} link={contacts[key]} urlId={key} hoverTitle={key} width={'35px'} height={'35px'}/>);
        }
    }

    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>{name}</h1>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <div className="underline"></div>
            </div>
            <section className={s.links}>
                {contactsLinks}
            </section>

        </main>
    );
}

export default Description;