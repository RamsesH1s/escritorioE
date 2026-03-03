import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

const PillarsSection = dynamic(() => import('@/components/PillarsSection'));
const PracticeAreasSection = dynamic(() => import('@/components/PracticeAreasSection'));

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PillarsSection />
      <PracticeAreasSection />
    </div>
  );
}
