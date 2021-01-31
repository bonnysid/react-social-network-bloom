import React from 'react';
import s from './Description.module.css';
import SocialLink from "./SocialLink";

const Description = ({name, status, contacts}) => {

    const contactsLinks = [];

    for(let key in contacts) {
        if (contacts[key]) {
            contactsLinks.push(<SocialLink key={key} link={contacts[key]} urlId={key} hoverTitle={key} width={'35px'} height={'35px'}/>);
        }
    }

    console.log(contactsLinks)

    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>{name}</h1>
                <p className={s.status}>{status}</p>
                <div className="underline"></div>
            </div>
            <section className={s.about}>
                {contactsLinks}
            </section>
        </main>
    );
}

export default Description;