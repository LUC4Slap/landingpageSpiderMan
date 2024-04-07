import Image from 'next/image';

type Props = {
  info: string;
  bolet: boolean;
  text: string | null;
  image: string;
  alt: string;
};

export function ItemInfom({ info, bolet, text, image, alt }: Props) {
  return (
    <div className="flex items-center mb-[17px]">
      <Image src={image} alt={alt} />
      <span className="text-white font-bold ml-4">{info}</span>
      {bolet ? (
        <span className="flex items-center mr-4 ml-4 bg-gray-600 border-gray-600 rounded-full w-[10px] h-[10px]"></span>
      ) : (
        ''
      )}
      {text != null ? <span className="text-white font-bold">{text}</span> : ''}
    </div>
  );
}
