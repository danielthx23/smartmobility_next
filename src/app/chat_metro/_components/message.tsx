import Image from "next/image";

const Message = ({ text, sender }: Message) => {
    return (
        <li className={`w-full flex flex-col ${sender === "user" ? "items-end" : "items-start"} gap-4`}>
            {sender === "bot" && (
                <Image
                    src="/icones_logos/chat_metro.png"
                    alt="ChatMetrô"
                    width={64}
                    height={64}
                    className="w-10"
                />
            )}
            {sender === "user" && (
                <Image
                src="/icones_logos/chat_metro.png"
                alt="Usuario"
                width={64}
                height={64}
                className="w-10 rounded-full"
            />
            )}
            <p className={`py-4 px-6 rounded-md text-lg w-full md:w-2/4 ${sender === "user" ? "bg-[#6C80A9] text-black" : "bg-[#3E5179] text-white"}`}>
                {text}
            </p>
        </li>
    );
};

export default Message;