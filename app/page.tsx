import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Clients from '@/components/Clients';
import BigStats from '@/components/BigStats';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <Projects />
      <Process />
      <Clients />
      <BigStats />
      <ContactCTA />
    </>
  );
}
