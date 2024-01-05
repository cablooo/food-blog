import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';

const ContactPage = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isPending, setIsPending] = useState(false)
    const form = useRef();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)

        emailjs.sendForm('service_u2o6rct', 'template_vpdw5vt', form.current, 'mXi3MuI0aowNjswcW')
        .then((result) => {
            setIsPending(false)
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
        });

    };

    return (
        <div className="contact">
            <div className="container">
                <h1>Contact Us 👋</h1>
                <form 
                onSubmit={handleSubmit}
                ref={form}
                >
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name.."
                            autoComplete="off"
                            required
                            
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email.."
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message.."
                            autoComplete="off"
                            required
                        ></textarea>
                    </div>
                    { !isPending && <button type="submit" value="send">Send</button> }
                    { isPending && <button disabled>Sending...</button> }
                </form>
            </div>
            
        </div>
    );
};

export default ContactPage;
