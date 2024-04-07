import Image from 'next/image';

import ScrollPointer from '@/assets/scroll_pointer.svg';

export function SectionVilao() {
  return (
    <section className="flex w-full h-[800px] bg-[url('../assets/vilao.png')] bg-no-repeat bg-cover">
      <div className="flex w-full flex-col justify-center items-center">
        <h1 className="text-white font-bold uppercase text-5xl h-[67px]">
          O VILÃO MAIS PODEROSO ESTÁ À SOLTA
        </h1>
        <p className="mt-2">
          Domine as habilidades dos dois Spiders para derrotá-lo em um combate
          épico.
        </p>
        <div className="flex mt-[72px]">
          <Image className="w-8 h-10" src={ScrollPointer} alt="scroll" />
        </div>
      </div>
    </section>
  );
}
