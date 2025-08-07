import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import Hero from '@/components/Hero/Hero'
import Attributes from '@/components/Attributes/Attributes'
import Newsletter from '@/components/Newsletter/Newsletter'
import Footer from '@/components/Footer/Footer'
import BlogArticles from '@/components/BlogArticles/BlogArticles'
import About from '@/components/About/About'
import Partners from '@/components/Partners/Partners'
import Services from '@/components/Services/Services'

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Attributes />
    <About />
    <Partners />
    <Services />
    <BlogArticles />
    <Newsletter />
    <Footer />
   </div>
  );
}
