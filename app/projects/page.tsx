import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import { LP_ITEMS } from "components/project-items"

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="mb-5 text-4xl font-bold">Projects的展示页面</h1>
        <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
