// ContactForm.jsx
import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../../../components/common/input';
import TextArea from '../../../components/common/textarea';
import Button from '../../../components/common/button';
import { CheckIcon, CloseIcon, Spinner } from '../../../assets/icons/svg';

export default function ContactForm() {
    const [promt, setPromt] = useState<boolean | null>(false)
    const [isLoading, setIsLoading] = useState<boolean | null>(false)
    const [err, setErr] = useState<string | null>("")
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        const emailPayload = {
            to_email: 'ebubeezi@gmail.com,mhatons@gmail.com',
            from_name: `${formData.name}`,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };
        // initial email sending to the admin
        emailjs.send(
            'service_lurufoo',
            'template_sexf70q',
            emailPayload,
            'yUx6glCLOOWwArpF0'
        ).then((response) => {
            console.log("email successfully sent", response.status, response.text);
            setPromt(true);
            setIsLoading(false);

            // Send automated response back to the user
            const autoReplyEmailPayload = {
                to_name: `${formData.name}`,
                to_email: formData.email,
                message: "Thank you for contacting us! We have received your message and will get back to you soon."
            };

            emailjs.send(
                'service_lurufoo',
                'template_0fmsuos',
                autoReplyEmailPayload,
                'yUx6glCLOOWwArpF0'
            )
                .then((response) => {
                    console.log('Auto-reply sent successfully!', response.status, response.text);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    });
                })
                .catch((error) => {
                    console.error('Failed to send auto-reply:', error);
                    setErr(error)
                });
        }).catch((error) => {
            console.error('Failed to send email:', error);
            setErr(error)
        });
    };

    return (
        <div className="flex items-center justify-center relative">
            <div className=" p-8 sm:rounded-lg shadow-lg w-full relative">
                <h2 className="text-2xl font-bold mb-6 text-primary dark:text-secondary text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className=''>
                        {/* <Input
                            label="First name"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            required
                            value={formData.firstName} // Pass value here
                            onChange={handleChange}
                        /> */}
                        <Input
                            label="Your name(s)"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={formData.name} // Pass value here
                            onChange={handleChange}
                        />
                        <Input
                            label="Contact number"
                            name="phone"
                            type="number"
                            placeholder="Enter your contact number"
                            required
                            value={formData.phone} // Pass value here
                            onChange={handleChange}
                        />
                        {/* <Input
                            label="Product"
                            name="product"
                            type="text"
                            placeholder="Enter your product"
                            value={formData.product} // Pass value here
                            onChange={handleChange}
                        /> */}
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={formData.email} // Pass value here
                            onChange={handleChange}
                        />
                        {/* <Input
                            label="Address"
                            name="address"
                            type="text"
                            placeholder="Enter address"
                            value={formData.address} // Pass value here
                            onChange={handleChange}
                        /> */}
                    </div>
                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        label='Message'
                        required
                    />

                    <div className=' py-4'>
                        <Button
                            onClick={() => { }}
                            // text={"send message"}
                            text={isLoading ? <Spinner /> : "send message"}
                        />
                    </div>
                    <span className=' text-center w-full text-red-500'>{err}</span>
                </form>
            </div>
            {
                promt && (
                    <div className='fixed w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#000000a8]'>
                        <div className='bg-white w-96 rounded-2xl relative flex items-center justify-center pb-8 pt-10 px-4'>
                            <div className='flex items-start gap-3'>
                                <div>
                                    <CheckIcon />
                                </div>
                                <div className=' font-serif text-right text-[18px] text-primary_color font-semibold'>
                                    Your message has been sent successfully! do expect a quick feedback from us
                                </div>
                            </div>
                            <div onClick={() => setPromt(false)} className='absolute top-3 right-3 cursor-pointer'>
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
