import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState("");
	const messagesEndRef = useRef(null);
	const inputRef = useRef(null);

	const { messages, sendMessage, status, error, stop, regenerate } = useChat({
		api: "/api/chat",
		initialMessages: [
			{
				id: "welcome",
				role: "assistant",
				content:
					"Hi there! I'm Andy's assistant. Ask me anything about Andy's skills, experience, or projects!",
			},
		],
	});

	const isLoading = status === "submitted" || status === "streaming";

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages, status]);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	const onFormSubmit = async (e) => {
		e.preventDefault();
		if (!input.trim() || isLoading) return;

		const message = input;
		setInput("");
		await sendMessage({ text: message });
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			onFormSubmit(e);
		}
	};

	return (
		<>
			{/* Floating Button */}
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#915eff] to-[#7c3aed] shadow-lg shadow-purple-500/25 flex items-center justify-center hover:shadow-purple-500/40 transition-shadow duration-300"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				aria-label={isOpen ? "Close chat" : "Open chat"}
			>
				<AnimatePresence mode="wait">
					{isOpen ? (
						<motion.svg
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</motion.svg>
					) : (
						<motion.svg
							key="chat"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</motion.svg>
					)}
				</AnimatePresence>
			</motion.button>

			{/* Chat Panel */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.95 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] bg-tertiary rounded-2xl shadow-2xl shadow-black/50 border border-white/10 flex flex-col overflow-hidden"
					>
						{/* Header */}
						<div className="px-4 py-4 border-b border-white/10 bg-gradient-to-r from-[#915eff]/20 to-[#7c3aed]/20">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#915eff] to-[#7c3aed] flex items-center justify-center">
									<svg
										className="w-5 h-5 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-white font-semibold text-sm">
										Andy&apos;s Assistant
									</h3>
									<p className="text-secondary text-xs flex items-center gap-1">
										<span
											className={`w-2 h-2 rounded-full ${
												isLoading ? "bg-yellow-500" : "bg-green-500"
											} animate-pulse`}
										></span>
										{isLoading ? "Typing..." : "Online"}
									</p>
								</div>
							</div>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
							{messages.map((message) => (
								<motion.div
									key={message.id}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.2 }}
									className={`flex ${
										message.role === "user" ? "justify-end" : "justify-start"
									}`}
								>
									<div
										className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap ${
											message.role === "user"
												? "bg-gradient-to-r from-[#915eff] to-[#7c3aed] text-white rounded-br-md"
												: "bg-white/5 text-secondary border border-white/10 rounded-bl-md"
										}`}
									>
										{message.content}
									</div>
								</motion.div>
							))}

							{/* Typing Indicator */}
							{isLoading && messages[messages.length - 1]?.role === "user" && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex justify-start"
								>
									<div className="bg-white/5 text-secondary border border-white/10 rounded-2xl rounded-bl-md px-4 py-3">
										<div className="flex gap-1">
											<span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
											<span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
											<span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce"></span>
										</div>
									</div>
								</motion.div>
							)}

							{/* Error Message */}
							{error && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex flex-col gap-2"
								>
									<div className="flex justify-start">
										<div className="bg-red-500/10 text-red-400 border border-red-500/20 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm">
											Sorry, something went wrong. Please try again.
										</div>
									</div>
									<button
										onClick={() => regenerate()}
										className="self-start ml-2 text-xs text-secondary hover:text-white transition-colors underline"
									>
										Retry last message
									</button>
								</motion.div>
							)}

							<div ref={messagesEndRef} />
						</div>

						{/* Input */}
						<form
							onSubmit={onFormSubmit}
							className="p-4 border-t border-white/10 bg-primary/50"
						>
							<div className="flex items-center gap-2">
								<input
									ref={inputRef}
									type="text"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyDown={handleKeyDown}
									placeholder="Type a message..."
									disabled={isLoading}
									className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-secondary/50 focus:outline-none focus:border-[#915eff]/50 focus:ring-1 focus:ring-[#915eff]/25 transition-all disabled:opacity-50"
								/>
								{isLoading ? (
									<motion.button
										type="button"
										onClick={() => stop()}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="w-10 h-10 rounded-xl bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition-colors"
										title="Stop generating"
									>
										<svg
											className="w-4 h-4 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<rect x="6" y="6" width="12" height="12" rx="2" />
										</svg>
									</motion.button>
								) : (
									<motion.button
										type="submit"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										disabled={!input.trim()}
										className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#915eff] to-[#7c3aed] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
									>
										<svg
											className="w-5 h-5 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
											/>
										</svg>
									</motion.button>
								)}
							</div>
							<p className="text-[10px] text-secondary/50 text-center mt-2">
								Powered by AI
							</p>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ChatBot;
