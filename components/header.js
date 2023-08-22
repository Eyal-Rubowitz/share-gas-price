
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HeaderNavLinks from '../public/app.routing.link.list/header.nav.rout.list'
import '@styles/globals.css'

export default function Header({}) {
    // const router = useRouter();
    const pathname = usePathname();
    const routHeaderLinks = HeaderNavLinks;
    // console.log('routHeaderLinks: ', routHeaderLinks)
    return (<>
        <nav className="container flex justify-around py-8 mx-auto bg-white">
            <div>
                <h3 className='text-2xl font-medume text-blue-600'>
                    App Name
                </h3>
                <div className='flex space-x-8'>
                    {routHeaderLinks.map(({path, lable}) => (
                        <Link key={path} href={path} passHref>
                            <div class={`text-sm font-medium ${
                                         pathname === path
                                           ? "border-b-8 border-blue-800"
                                           : "text-gray-700"}`}>
                                {lable}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    </>);
}

 {/* <Link className={'text-green'} href={'/'}>
                Home
          </Link>
          &nbsp; &nbsp;
          <Link className={''}>
                About demo
          </Link>
          &nbsp; &nbsp;
          <Link className={''} href={'/home'} key={"/about-demo"}>
                Home demo
          </Link>
          &nbsp; &nbsp;
          <Link className={''} href={'/about'}>
                About
          </Link> */}