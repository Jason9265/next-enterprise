import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto flex justify-between px-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold">
            <Link href="http://localhost:3000/projects">Projects</Link>
          </h2>
          <ul className="space-y-2">
            <li>Project A</li>
            <li>Project B</li>
            <li>Project C</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold">About</h2>
          <ul className="space-y-2">
            <li>
              <Link href="http://localhost:3000/about">Company</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold">Contact</h2>
          <ul className="space-y-2">
            <li>
              <Link href="http://localhost:3000/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="/static/hashbrowns.png" alt="Logo" className="mr-2 h-10 w-10" />
          <span>Mad HashBrowns</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-75">
            <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/images/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/images/instagram-icon.svg" alt="Instagram" />
          </a>
        </div>
        <div>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
