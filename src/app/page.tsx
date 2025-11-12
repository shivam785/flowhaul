import { Footer } from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NavbarHome from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <NavbarHome />
      <main className='flex min-h-screen flex-col'>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
