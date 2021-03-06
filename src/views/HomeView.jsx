import React from 'react'
// Components
import Nav from '../components/organisms/Nav'
import Header from '../components/organisms/Header'
import Situation from '../components/organisms/Situation'
import Alert from '../components/organisms/Alert'
import Vaccine from '../components/organisms/Vaccine'
import UCI from '../components/organisms/UCI'
import Footer from '../components/organisms/Footer'

const HomeView = () => {
  return (
    <div className="HomeView">
      <Nav />
      <Header />
      <Situation />
      <Alert />
      <Vaccine />
      <UCI />
      <Footer />
    </div>
  )
}

export default HomeView