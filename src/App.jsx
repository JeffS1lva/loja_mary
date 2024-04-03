import { ButtonIcon } from "./button/button-icon";
import profile from "../src/assets/img.svg";

export function App() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-violet-500 p-10 sm:p-3 ">
        <div className="flex flex-col items-center w-[30rem] sm:flex p-5 space-y-6 rounded-md border border-slate-300">
          <img src={profile} className="size-28" />
          <span className="w-full text-center p-3 rounded-md bg-zinc-50 hover:bg-zinc-100">
            <a href="https://api.whatsapp.com/send?phone=5511957137484" target="_blank">Cabelos</a>
          </span>
          <span className="w-full text-center p-3 rounded-md bg-zinc-50 hover:bg-zinc-100">
            <a href="https://api.whatsapp.com/send?phone=5511957137484" target="_blank">
              Roupas - Catálogo
            </a>
          </span>
          <span className="w-full text-center p-3 rounded-md bg-zinc-50 hover:bg-zinc-100">
            <a
              href="https://api.whatsapp.com/send?phone=5511957137484"
              target="_blank"
            >
              Envie uma mensagem
            </a>
          </span>
          <ButtonIcon />
        </div>
      </div>
    </div>
  );
}
