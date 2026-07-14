import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Experience from './components/Experience'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Education  from './components/Education'
import Contact    from './components/Contact'
// import Hobbies from './components/Hobbies'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr style={{ border: 'none', borderTop: '1px solid #E2EAF0', margin: 0 }} />
        <Experience />
        <hr style={{ border: 'none', borderTop: '1px solid #E2EAF0', margin: 0 }} />
        <Projects />
        <hr style={{ border: 'none', borderTop: '1px solid #E2EAF0', margin: 0 }} />
        <Education />
        <hr style={{ border: 'none', borderTop: '1px solid #E2EAF0', margin: 0 }} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
