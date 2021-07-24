import React, { Component } from 'react';
import axios from 'axios';
import { WorkSection, WorkTitle, WorkPart, Icon, PartTitle, Line, PartDesc } from './style.js';

class Work extends Component {

    state = {
        works: [
            {
                "id": 1,
                "icon_name": "icon fa fa-chain fa-2x",
                "title": "Mobile Ux",
                "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas."
            },
            {
                "id": 2,
                "icon_name": "icon fa fa-bolt fa-2x",
                "title": "Mobile Ux",
                "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas."
            },
            {
                "id": 3,
                "icon_name": "icon fa fa-tachometer fa-2x",
                "title": "Mobile Ux",
                "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas."
            },
            {
                "id": 4,
                "icon_name": "icon fa fa-home fa-2x",
                "title": "Mobile Ux",
                "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas."
            }
        ]
    }

    // componentDidMount() {
    //     axios.get('js/data.json').then(res => { this.setState({ works: res.data.works }) })
    // }

    render() {

        const { works } = this.state;

        const worksList = works.map(workItem => {
            return (
                <WorkPart key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDesc>{workItem.body}</PartDesc>
                </WorkPart>
            )
        })


        return (
            <WorkSection>

                <div className="container">
                    <WorkTitle>My Work</WorkTitle>
                    {worksList}
                </div>

            </WorkSection >
        )
    }

}

export default Work;