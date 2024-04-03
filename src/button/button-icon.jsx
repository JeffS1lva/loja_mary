import { RiWhatsappLine, RiInstagramLine } from "react-icons/ri";

export function ButtonIcon() {
  return (
    <div className="flex gap-1 items-center">
      <a
        href="https://www.instagram.com/mariacosta071/"
        target="_blank"
        className="hover:bg-zinc-700 rounded-md p-1.5 cursor-pointer"
      >
        <RiInstagramLine className="size-7 text-white" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5511914675286"
        className="hover:bg-zinc-700 rounded-md p-1.5 cursor-pointer"
      >
        <RiWhatsappLine className="size-7 text-white" />
      </a>
    </div>
  );
}
