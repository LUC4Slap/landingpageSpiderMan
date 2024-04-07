import Image from 'next/image';
import NumberIdade from '@/assets/number.svg';
import Hart from '@/assets/hart.svg';
import Lancamento from '@/assets/lancamentos.svg';
import Controle from '@/assets/controle.svg';
import Lampada from '@/assets/lampada.svg';
import { ItemInfom } from './ItemInfo';

export function SectionHero() {
  // className="flex items-center border-2 w-[200px] bg-gray-800 p-1"
  return (
    <section className="w-full h-[800px] bg-[url('../assets/SpiderBanner.png')] bg-no-repeat bg-cover pt-14">
      <div className="w-full p-32">
        <div className="flex w-full container">
          <div className="flex items-center w-[220px]">
            <span className="rounded-l-[4px] border-l-2 border-l-gray-700 p-2 bg-gray-700">
              Disponível para
            </span>
            <span className="rounded-r-[4px] border-r-2 p-2 bg-gray-600 border-r-gray-600 text-white font-bold">
              PS5
            </span>
          </div>
        </div>
        {/* parte informações */}
        <div className="flex flex-col w-full mt-6">
          <div className="flex items-center">
            <h1 className="text-white font-bold uppercase text-5xl w-full h-20 mb-2">
              Marvel's Spider-Man 2
            </h1>
            <div className="flex flex-col w-full max-w-[140px] items-end">
              <Image src={NumberIdade} alt="Classificação" />
              <span className="text-end">Violência Compras no jogo</span>
            </div>
          </div>
          <p className="w-full max-w-[662px] text-white pt-1">
            Os Spiders Peter Parker e Miles Morales estão de volta em mais uma
            aventura eletrizante da famosa franquia Marvel's Spider-Man para
            PS5.
          </p>
        </div>
        {/* parte valor e botoes */}
        <div className="flex flex-col w-full mt-12">
          <h2 className="text-4xl font-bold">R$ 349,90</h2>
          <div className="flex gap-6 mt-6">
            <button className="py-4 px-10 bg-laranga rounded-3xl">
              Adicionar ao carrinho
            </button>
            <a href="">
              <Image src={Hart} alt="Favorito" />
            </a>
          </div>
        </div>
        {/* parte infos jogo */}
        <div className="flex w-full mt-12">
          <div className="flex w-full flex-col">
            <ItemInfom
              image={Lancamento}
              bolet={true}
              info="Lançado 20/10/2023"
              text="Versão para PS5"
              alt="Lançamento"
            />
            <ItemInfom
              image={Controle}
              bolet={true}
              info="1 jogador"
              text="Compatível com função de vibração e efeito gatilho "
              alt="Controle"
            />
            <ItemInfom
              image={Lampada}
              bolet={false}
              info="Compatível com a ajuda do jogo"
              alt="Lampada"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
