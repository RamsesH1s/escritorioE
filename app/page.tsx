import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PillarsSection />
      <PracticeAreasSection />
    </div>
  );
}
