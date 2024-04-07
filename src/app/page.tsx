import { SectionHero } from '@/components/SectionHero';
import { SectionVideos } from '@/components/SectionVideos';
import { SectionVilao } from '@/components/SectionVilao';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SectionHero />
      <SectionVideos />
      <SectionVilao />
    </main>
  );
}
