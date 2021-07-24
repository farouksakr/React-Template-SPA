import React, { Component } from 'react';
import { ProfileSkills, ProfileInfo, ProfileTitle, ProfileList, ProfileItem, Span, Web, Skills, SkillsTitle, SkillsDesc, Bar, Title, Perc, Parent, ParentSpan } from './style.js';
import axios from 'axios';

class Profile extends Component {

    state = {
        skills: [
            {
                "id": 1,
                "perc": "100%",
                "title": "Bootstrap"
            },
            {
                "id": 2,
                "perc": "90%",
                "title": "CSS3"
            },
            {
                "id": 3,
                "perc": "80%",
                "title": "Photoshop"
            }
        ]
    }

    // componentDidMount() {
    //     axios.get('js/data.json').then(res => { this.setState({ skills: res.data.skills }) })
    // }

    render() {

        const { skills } = this.state;
        const skillsList = skills.map(skillItem => {
            return (
                <Bar key={skillItem.id}>
                    <Title>{skillItem.title}</Title>
                    <Perc>{skillItem.perc}</Perc>
                    <Parent>
                        <ParentSpan item={skillItem.id}></ParentSpan>
                    </Parent>
                </Bar>
            )
        })

        return (
            <ProfileSkills>
                <div className="container">
                    <ProfileInfo>
                        <ProfileTitle>My Profile</ProfileTitle>
                        <ProfileList>
                            <ProfileItem>
                                <Span>Name</Span>
                                Farouk Sakr
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Birthday</Span>
                                18/07/1995
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Address</Span>
                                El-Monofia
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Phone</Span>
                                4444 5555 6666
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Email</Span>
                                farouksakr95@gamil.com
                            </ProfileItem>
                            <ProfileItem>
                                <Span>Website</Span>
                                <Web>www.google.com</Web>
                            </ProfileItem>
                        </ProfileList>
                    </ProfileInfo>

                    <Skills>
                        <SkillsTitle>Some Skills</SkillsTitle>
                        <SkillsDesc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                        {skillsList}
                    </Skills>

                </div>
            </ProfileSkills>

        )
    }
}

export default Profile;