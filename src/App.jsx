import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Review from './components/Review'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Review />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
