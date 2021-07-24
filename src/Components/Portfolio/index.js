import React, { Component } from 'react';
import { PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan } from './style.js';
import axios from 'axios';

class Portfolio extends Component {

    state = {
        portfolio: [
            {
                "id": 1,
                "image": "images/portfolio-img1.jpg"
            },
            {
                "id": 2,
                "image": "images/portfolio-img2.jpg"
            },
            {
                "id": 3,
                "image": "images/portfolio-img3.jpg"
            },
            {
                "id": 4,
                "image": "images/portfolio-img4.jpg"
            },
            {
                "id": 5,
                "image": "images/portfolio-img5.jpg"
            },
            {
                "id": 6,
                "image": "images/portfolio-img6.jpg"
            },
            {
                "id": 7,
                "image": "images/portfolio-img4.jpg"
            },
            {
                "id": 8,
                "image": "images/portfolio-img8.jpg"
            }
        ]
    }

    // componentDidMount() {
    //     axios.get('js/data.json').then(res => { this.setState({ portfolio: res.data.portfolio }) })
    // }

    render() {

        const { portfolio } = this.state;

        const portfolioImages = portfolio.map((imageItem) => {
            return (
                <ImageWrapper key={imageItem.id}>
                    <Image src={imageItem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>Show Image</OverlaySpan>
                    </Overlay>
                </ImageWrapper>
            )
        })

        return (
            <PortfolioSection>
                <PortfolioTitle>My Portfolio</PortfolioTitle>
                <PortfolioList>
                    <PortfolioItem active>All</PortfolioItem>
                    <PortfolioItem>HTML</PortfolioItem>
                    <PortfolioItem>Photoshop</PortfolioItem>
                    <PortfolioItem>Wordpress</PortfolioItem>
                    <PortfolioItem>Mobile</PortfolioItem>
                </PortfolioList>

                <div className="box">
                    {portfolioImages}
                </div>

            </PortfolioSection >
        )
    }
}

export default Portfolio;