import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"

const About: React.FC = () => {
  return (
    <>
      <Header />
        <div>
          <h1 className="mb-5 text-4xl font-bold">About Us</h1>
          <p className="text-lg">我是谁 我在哪</p>
          <p className="text-lg">我要吃Hash Browns</p>
        </div>
      <Footer />
    </>
  )
}

export default About
