import Hero from '@/components/Hero';
import performanceImage from '/public/performance.jpg';
const PerformancePage = () => {
  return (
    <div>
      <Hero
        image={performanceImage}
        imageAlt="performance image"
        title="Optimize Your Operations
         Performance Solutions"
      />
    </div>
  );
};

export default PerformancePage;
