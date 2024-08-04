import Link from "next/link"

const Header = () => {
  return (
    <header className="relative z-20 border-b">
      <div className="container mx-auto flex h-20 items-center py-5">
        <Link className="mr-12" href="">
          <img className="py-0" width="90" src="/static/hashbrowns.png" alt="Logo" />
        </Link>
        <nav className="nav-primary" aria-label="Nav Menu">
          <ul id="menu-nav-menu" className="hidden lg:flex lg:items-center lg:gap-10">
            <li className="mega menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="/projects">Porjects</Link>
            </li>
            <li className="mega_about menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/about">About</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/news">News</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
