import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Projects  from './components/Projects'
import Education from './components/Education'
import Hobbies   from './components/Hobbies'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </>
  )
}
