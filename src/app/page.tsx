import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Attributes from '@/components/Attributes/Attributes'
import Newsletter from '@/components/Newsletter/Newsletter'
import Footer from '@/components/Footer/Footer'
import BlogArticles from '@/components/BlogArticles/BlogArticles'
import About from '@/components/About/About'

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Attributes />
    <About />
    <BlogArticles />
    <Newsletter />
    <Footer />
   </div>
  );
}
