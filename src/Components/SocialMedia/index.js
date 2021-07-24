import React, { useEffect, useState } from 'react';
import { SocialSection, Social, Icon, Paraghraph, Span, SpanInfo } from './style.js';
import axios from 'axios';

const SocialMedia = () => {

    const [social, setSocial] = useState([
        {
            "id": 1,
            "icon": "icon fa fa-facebook fa-fw",
            "body": "Facebook",
            "title": "Follow Me on"
        },
        {
            "id": 2,
            "icon": "icon fa fa-twitter fa-fw",
            "body": "Twitter",
            "title": "Tweet Me on"
        },
        {
            "id": 3,
            "icon": "icon fa fa-google-plus fa-fw",
            "body": "Google",
            "title": "Email Me on"
        },
        {
            "id": 4,
            "icon": "icon fa fa-pinterest fa-fw",
            "body": "Pinterest",
            "title": "Pin Me on"
        }
    ]);


    // useEffect(() => {
    //     axios.get('js/data.json').then(res => { setSocial(res.data.social) })
    // }, [])

    const socialList = social.map((socialItem) => {
        return (
            <Social item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Paraghraph>
                    <Span>{socialItem.body}</Span>
                    <SpanInfo>{socialItem.title}</SpanInfo>
                </Paraghraph>
            </Social>
        )
    })

    return (
        <SocialSection>
            {socialList}
        </SocialSection>
    )
}

export default SocialMedia;