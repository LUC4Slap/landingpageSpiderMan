import { Logo } from "./Logo";

export default function Menu() {
  return (
    <header className="flex items-center justify-between w-full h-20 bg-black px-8">
      <Logo />
      <nav className="flex items-center gap-5">
        <a href="">Visão geral</a>
        <a href="">Edições</a>
        <a href="">Características</a>
        <a href="">Gameplay</a>
      </nav>
      <div>
        <button className="rounded-2xl flex-1 border-2 border-l-rose-950 p-2">
          Adicionar ao carrinho
        </button>
      </div>
    </header>
  );
}
