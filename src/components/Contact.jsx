/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const receivedEmail = import.meta.env.VITE_RECEIVED_EMAIL;
		const receivedName = import.meta.env.VITE_RECEIVED_NAME;

		emailjs
			.send(
				serviceId,
				templateId,
				{
					from_name: form.name,
					to_name: receivedName,
					from_email: form.email,
					to_email: receivedEmail,
					message: form.message,
				},
				publicKey
			)
			.then(() => {
				setLoading(false);
				alert("Thank you. I will get back to you as soon as soon as possible.");
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((err) => {
				console.log(err);
				alert("Sending email fail!");
				setLoading(false);
			});
	};

	return (
		<div className="xl:mt:12 xl:flex-row flex-col-reverse items-center flex gap-10 overflow-hidden w-full">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="  rounded-2xl w-full flex-1"
			>
				<div className=" bg-black-100 p-8 rounded-2xl w-full flex-1">
					<p className={styles.sectionSubText}>Get in touch</p>

					<h3 className={styles.sectionHeadText}>Contact.</h3>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>

						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>

						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Message</span>
							<textarea
								rows="7"
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="What's your message?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<button
							type="submit"
							className="bg-tertiary py-3 px-8 font-bold shadow-md shadow-primary outline-none rounded-xl w-fit"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
				<div className="flex my-10 flex-wrap gap-x-52">
					<div className="mb-5">
						<p className="text-secondary mb-3 border-b border-secondary border-dashed pb-2">
							Where to find me
						</p>
						{/* <p className="mb-2">
              Bunzlauer 12, 80992 Munich, <br /> Germany
            </p> */}
						<p className="mb-2">
							36 Bờ Bao Tân Thắng, 7600 <br /> Hồ Chí Minh, Vietnam
						</p>
						<p className="mb-2">andy.vo.webdeveloper@gmail.com</p>
						<p>+49 1575 0625 876</p>
					</div>

					<div>
						<p className="text-secondary mb-3 border-b border-secondary border-dashed pb-2">
							Follow me
						</p>
						<div className="flex flex-col">
							<a
								className="mb-2"
								href="https://www.linkedin.com/in/bao-vo-hoang/"
								target="_blank"
							>
								Linkedin
							</a>
							<a href="https://github.com/andyvo190998" target="_blank">
								Github
							</a>
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:j-auto md:h-[550px] h-[350px] w-6/12"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
