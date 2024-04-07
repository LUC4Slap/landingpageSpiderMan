import LogoBoot from '@/assets/logoBoot.svg';
import Image from 'next/image';
export function Foter() {
  return (
    <footer className="flex w-full h-60 py-[72px] px-28 justify-between">
      <div className="flex flex-col w-full max-w-[668px]">
        <p className="text-white font-bold">©codeboost2024</p>
        <p className="text-white mt-[11px]">
          Este conteúdo destina-se exclusivamente a fins educacionais e não será
          utilizado para fins comerciais. Todas as imagens e marcas registradas
          são de propriedade de seus respectivos detentores de direitos
          autorais. O uso deste material busca promover a educação e o
          conhecimento.
        </p>
      </div>
      <div className="flex items-center w-full justify-end gap-6">
        <span>Design by </span>
        <Image src={LogoBoot} alt="logo" />
      </div>
    </footer>
  );
}
