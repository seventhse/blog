import Link from 'next/link'
import { SocialLinks } from '../components/social-links.tsx'

export function Footer() {
  return (
    <footer className="max-w-[1024px] container mt-auto mx-auto mb-3 rounded-lg">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024&nbsp;
          <Link
            href="/"
            className="hover:underline"
          >
            Seventhse
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
