import Hero from '@/components/Hero';
import scaleImage from '/public/scale.jpg';

const ScalePage = () => {
  return (
    <div>
      <Hero
        image={scaleImage}
        imageAlt="scaleImage image"
        title="Seamless Growth for Your Cloud Infrastructure"
      />
    </div>
  );
};

export default ScalePage;
