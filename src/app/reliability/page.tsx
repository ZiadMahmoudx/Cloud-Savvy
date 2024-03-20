import Hero from '@/components/Hero';
import reliabilityImage from '/public/reliability.jpg';
const ReliabilityPage = () => {
  return (
    <div>
      <Hero
        image={reliabilityImage}
        imageAlt="Reliability image"
        title="Ensuring Dependability in Every Interaction"
      />
    </div>
  );
};

export default ReliabilityPage;
