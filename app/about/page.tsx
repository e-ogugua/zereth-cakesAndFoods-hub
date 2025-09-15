import { HeroSection } from '@/components/hero-section';
import { OurStory } from '@/components/our-story';
import { AboutStats } from '@/components/about-stats';
import { MeetJoshua } from '@/components/meet-joshua';
import { FinalCTA } from '@/components/final-cta';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurStory />
      <AboutStats />
      <MeetJoshua />
      <FinalCTA />
    </div>
  );
}
