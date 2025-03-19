import Link from "next/link";

interface MetroLineItemProps {
  color: string;
  number: string;
  nome: string;
  handleLinhaSelect: (linha: string) => void;
}

const LinhaMetroItem = ({ color, number, nome, handleLinhaSelect }: MetroLineItemProps) => {
  return (
    <li className="border-b border-neutral-300 flex gap-4 items-center p-1">
      <button 
      onClick={() => handleLinhaSelect(nome.toLowerCase())}
      className="w-full flex items-center gap-2 decoration-none text-black">
        <span className={`w-[32px] rounded-md h-[32px] flex items-center justify-center ${color} text-white font-lilita`}>
          {number}
        </span>
        {nome}
      </button>
    </li>
  );
};

export default LinhaMetroItem;
