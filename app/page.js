import Navbar       from '@/components/Navbar/Navbar';
import Hero         from '@/components/Hero/Hero';
import Ticker       from '@/components/Ticker/Ticker';
import Gallery      from '@/components/Gallery/Gallery';
import About        from '@/components/About/About';
import CEO          from '@/components/CEO/CEO';
import Ambassador   from '@/components/Ambassador/Ambassador';
import Partners     from '@/components/Partners/Partners';
import Products     from '@/components/Products/Products';
import WhyUs        from '@/components/WhyUs/WhyUs';
import Services     from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact      from '@/components/Contact/Contact';
import Footer       from '@/components/Footer/Footer';
import WhatsAppBtn  from '@/components/WhatsAppBtn/WhatsAppBtn';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Gallery />
        <About />
        <CEO />
        <Ambassador />
        <Partners />
        <Products />
        <WhyUs />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  );
}
