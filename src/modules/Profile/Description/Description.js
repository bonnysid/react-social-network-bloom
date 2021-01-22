import React from 'react';
import s from './Description.module.css';
import SocialLink from "./SocialLink";

const Description = ({name, status, instaLink, gitHubLink}) => {
    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>{name}</h1>
                <p className={s.status}>{status}</p>
                <div className="underline"></div>
            </div>
            <section className={s.about}>
                <SocialLink
                    link={instaLink}
                    urlId='instagram'
                    hoverTitle="instagram"
                    width='35px'
                    height='35px'
                />
                <SocialLink
                    link={gitHubLink}
                    urlId='github'
                    hoverTitle="github"
                    width='35px'
                    height='35px'
                />

            </section>
        </main>
    );
}

export default Description;