import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {

    const menus = [ 
        {
            label: 'Home',
            link: '/' 
        },
        {
            label: 'Products',
            link: '/products' 
        },
        {
            label: 'Carts',
            link: '/carts' 
        },
        {
            label: 'Login',
            link: '/login' 
        }
        

        

    ]
    const socialLinks = [
        {
            label: 'Facebook',
            link: 'https://www.facebook.com/iLink.digital/?locale=lv_LV',
            icon: "ri-facebook-circle-fill"
        },
        {
            label: 'Twitter',
            link: 'https://www.facebook.com/TwitterInc/',
            icon: "ri-twitter-fill"
        },
        {
            label: 'Twitter',
            link: 'https://www.facebook.com/TwitterInc/',
            icon: "ri-twitter-fill"
        },
        {
            label: 'Linkedin',
            link: 'https://www.linkedin.com/feed/',
            icon: "ri-linkedin-fill"
        },
        {
            label: 'Instagram',
            link: "https://www.instagram.com/",
            icon: "ri-instagram-fill"
        }


    ]
  return (
    <div>
        <div>
            <nav className='bg-blue-600 text-white py-6 lg:px-24 flex justify-between items-center'>
                <h1 className='text-white text-xl font-semibold '>Commerce</h1>
                <div className='space-x-16 lg:block hidden'>
                   {
                     menus.map((item , index) => (
                        <Link href={item.link} key={index} className='text-white'>{item.label}</Link>
                     ))
                   }
                   <Link href="/signup" className='bg-rose-600 px-10 py-4 rounded text-white hover:bg-black  '>Register Now</Link>
                </div>
                 <button className='bg-white text-xl w-12 h-12 rounded lg:hidden block'>
                    <i className='ri-menu-line'></i>
                 </button>
            </nav>

        </div>
        <div className='py-16  lg:px-24'>
            {children} 
        </div>
        <footer className="bg-slate-950 p-8 text-white lg:px-24 lg:py-16 grid gap-8 lg:grid-cols-4">
  {/* Column 1 */}
  <div>
    <h1 className="text-white text-xl font-semibold">Commerce</h1>
    <p className="text-gray-300 mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

  {/* Column 2 */}
  <div>
    <h1 className="text-white text-xl font-semibold">Useful Links</h1>
    <div className="text-gray-400 mt-3 flex flex-col gap-3">
      {menus.map((item, index) => (
        <Link href={item.link} key={index}>
          {item.label}
        </Link>
      ))}
      <Link href="/signup">Register Now</Link>
    </div>
  </div>

  {/* Column 3 */}
  <div>
    <h1 className="text-white text-xl font-semibold">Social Media</h1>
    <div className="text-gray-400 mt-3 flex flex-col gap-3">
      {socialLinks.map((item, index) => (
        <Link href={item.link} key={index}>
          <i className={`${item.icon} text-xl mt-2`}></i> {item.label}
        </Link>
      ))}
    </div>
  </div>

  {/* Column 4 */}
  <div>
    <h1 className="text-white text-xl font-semibold">Contact Us</h1>
    <form className="text-gray-400 mt-3 flex flex-col gap-5">
      <input
        required
        className="bg-white p-3 rounded"
        name="fullname"
        placeholder="Enter your name here"
      />
      <input
        required
        type="email"
        className="bg-white p-3 rounded"
        name="email"
        placeholder="mail@example.com"
      />
      <textarea
        required
        className="bg-white p-3 rounded"
        name="message"
        rows={3}
      />
      <button className="bg-rose-600 text-white rounded px-5 py-3 w-fit">
        Submit
      </button>
    </form>
  </div>
</footer>

    </div>
  )
}

export default Layout;

