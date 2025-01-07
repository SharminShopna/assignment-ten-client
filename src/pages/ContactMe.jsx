import { useRef } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_9sghgqq', 'template_xlngcjf', form.current, 'rxea47ehjWZO9-2G4')
            .then(
                () => {
                    Swal.fire({
                        title: "Good job!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Message failed to send. Please try again later.",
                        footer: ''
                    });
                }
            );
    };

    return (
        <>
            <Helmet>
                <title>Contact | Sport</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="w-11/12 mx-auto">
                <nav className="my-6">
                    <Header />
                </nav>
                <section className="py-8 lg:py-16 mx-auto max-w-screen-lg mt-24">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-blue-900">
                        Contact Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Form Section */}
                        <div className="p-6 rounded-lg shadow-md bg-blue-900 text-white">
                            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        className="w-full p-2 h-32 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="px-4 py-2 text-blue-900 bg-white rounded-lg hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-blue-900">
                            <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">
                                Contact Information
                            </h3>
                            <ul className="space-y-4 text-blue-900 dark:text-gray-300">
                                <li className="flex gap-2 items-center text-center">
                                    <strong><MdEmail /></strong>{' '}
                                    <a
                                        href="mailto:sharminshopna149@gmail.com"
                                        className="text-blue-900 dark:text-white hover:underline"
                                    >
                                        sharminshopna149@gmail.com
                                    </a>
                                </li>
                                <li className="flex gap-2 items-center text-center">
                                    <strong><FaPhoneVolume /></strong>{' '}
                                    <a
                                        href="tel:8801303058388"
                                        className="text-blue-900 dark:text-white hover:underline"
                                    >
                                        +8801303058388
                                    </a>
                                </li>
                                <li className="flex gap-2 items-center text-center">
                                    <strong><FaWhatsapp size={32} /></strong>{' '}
                                    <a
                                        href="https://wa.me/01303058388"
                                        className="text-blue-900 dark:text-white hover:underline"
                                    >
                                        +8801303058388
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ContactMe;
