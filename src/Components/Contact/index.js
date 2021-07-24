import React from 'react';
import { ContactSection, ContactTitle, Form, InputText, InputEmail, InputSubject, TextArea, InputSubmit } from './style.js';
import Footer from './../Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>

                <div className="container">

                    <ContactTitle>Drop Me A line</ContactTitle>
                    <Form>
                        <InputText placeholder="Your Name" />
                        <InputEmail placeholder="Your Email" />
                        <InputSubject placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit value="Send Message" />
                    </Form>

                </div>

            </ContactSection>
            <Footer />
        </React.Fragment>

    )
}

export default Contact;