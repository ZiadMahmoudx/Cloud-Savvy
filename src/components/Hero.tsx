import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface HeroProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
}

const Hero: FC<HeroProps> = ({ image, imageAlt, title }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute z-0 inset-0">
        <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="absolute inset-x-0 top-1/4 text-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-4xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
