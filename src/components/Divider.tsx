import DividerImage from '@/assets/divider.svg';
import Image from 'next/image';
export function Divider() {
  //bg-[url('../assets/divider.svg')] bg-no-repeat bg-cove
  return (
    <div className="flex w-full h-4 justify-end mt-2">
      <Image src={DividerImage} alt="divider" />
    </div>
  );
}
