import { getEnv } from '../utils'

export function SocialLinks() {
  const github = getEnv ('NEXT_PUBLIC_GITHUB_URL')
  const twitter = getEnv ('NEXT_PUBLIC_TWITTER_URL')
  const discord = getEnv ('NEXT_PUBLIC_DISCORD_URL')

  return (
    <ul className="flex items-center justify-center sm:justify-start gap-x-6 sm:gap-x-3">
      <li className="inline-block size-[16px]">
        <a href={discord} className="size-full text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <img className="size-4" src="https://cdn.simpleicons.org/discord/black" alt="Discord" />
          <span className="sr-only">Discord community</span>
        </a>
      </li>
      <li className="inline-block size-[16px]">
        <a href={twitter} className="size-full text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <img className="size-4" src="https://cdn.simpleicons.org/x/black" alt="X" />
          <span className="sr-only">X page</span>
        </a>
      </li>
      <li className="inline-block size-[16px]">
        <a href={github} className="size-full text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <img className="size-4" src="https://cdn.simpleicons.org/github/black" alt="Github" />
          <span className="sr-only">GitHub account</span>
        </a>
      </li>
    </ul>
  )
}
