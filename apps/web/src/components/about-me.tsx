import { getEnv } from '../utils'
import { SocialLinks } from './social-links.tsx'

export function AboutMe() {
  const name = getEnv ('NEXT_PUBLIC_NAME')
  const avatar = getEnv ('NEXT_PUBLIC_AVATAR')

  return (
    <section className="sm:mt-[calc(100vh/4)] mt-[120px] flex items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col sm:flex-row items-center sm:justify-between gap-y-6 gap-x-0 px-0 sm:px-12 md:px-24 lg:px-48">
        <div className="order-2 sm:order-1">
          <h1 className="text-xl sm:text-2xl font-mono leading-normal">
            <p>
              Hi,I'm&nbsp;
              <span className="font-bold text-2xl sm:text-2xl underline">
                {name}
              </span>
              ,
            </p>
            <p className="text-xl">
              I am a&nbsp;
              <span className="font-bold text-2xl sm:text-2xl underline">&lt;Web Developer&gt;</span>
              .
            </p>
          </h1>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div className="sm:ml-auto order-1 sm:order-2 size-[120px] rounded-full">
          <img className="size-full rounded-full" src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  )
}
