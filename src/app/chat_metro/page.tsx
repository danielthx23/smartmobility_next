"use client";
import { useState } from "react";
import Message from "./_components/message";
import { FaArrowRight, FaBars } from "react-icons/fa";

const ChatMetro = () => {
    const [messages, setMessages] = useState([
        { text: "Olá, seja bem-vindo ao ChatMetrô!", sender: "bot" },
        { text: "Obrigado! O que você é?", sender: "user" },
        { text: "Eu sou uma IA programada para ajudá-lo no metrô.", sender: "bot" },
        { text: "Que legal! Então qualquer dúvida eu te chamo.", sender: "user" },
        { text: "Ok! Estou à sua disposição.", sender: "bot" },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);
        setInput("");

        // Simulando uma resposta do bot após 1 segundo
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Ainda estou aprendendo! Como posso te ajudar?", sender: "bot" },
            ]);
        }, 1000);
    };

    return (
        <div className="bg-[#5BC7CA] w-full flex flex-col items-center justify-center">
            <section className="w-full lg:w-3/6">
                {/* Cabeçalho */}
                <div className="bg-[#6C80A9] flex justify-between items-center md:w-full p-14">
                    <h1 className="text-center w-full text-white font-lilita text-xl lg:text-2xl">ChatMetrô</h1>
                    <button className="w-24 flex justify-center items-center">
                        <FaBars className="text-white" size={34}/>
                    </button>
                </div>

                {/* Corpo do Chat */}
                <div className="p-4 bg-[#C6D7EF] w-full flex flex-col gap-8">
                <ul className="w-full p-4 h-[700px] scrollbar-none overflow-auto list-none flex flex-col gap-8">
                    {messages.map((msg, index) => (
                        <Message key={index} text={msg.text} sender={msg.sender as "user" | "bot"} />
                    ))}
                </ul>

                <form className="w-full py-2 px-10 flex items-center justify-end bg-[#6C80A9] rounded-md" onSubmit={sendMessage}>
                    <input
                        className="w-full p-4 px-6 border-none rounded-md bg-[#3E5179] text-white placeholder-[#6C80A9] text-md md:text-xl font-lilita"
                        placeholder="Digite aqui o que deseja"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="absolute ml-4 rounded-full p-2 flex justify-center items-center mr-2" type="submit">
                        <FaArrowRight className="text-white" size={32}/>
                    </button>
                </form>
                </div>

            </section>
        </div>
    );
};

export default ChatMetro;
