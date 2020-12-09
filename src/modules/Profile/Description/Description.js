import React from 'react';
import s from './Description.module.css';
import SocialLink from "./SocialLink";

const Description = () => {
    return (
        <main className={`${s.content} block`}>
            <div className={s.header}>
                <h1 className={s.name}>Nikita Bortsov</h1>
                <p className={s.status}>inst: bonnysid</p>
                <div className="underline"></div>
            </div>
            <section className={s.about}>
                <SocialLink
                    link='https://instagram.com/bonnysid'
                    urlId='instagram'
                    hoverTitle="instagram"
                    width='35px'
                    height='35px'
                />
                <SocialLink
                    link='https://github.com/bonnysid'
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