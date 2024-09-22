import { getEnv } from '../utils'
import { SocialLinks } from './social-links.tsx'

export function AboutMe() {
  const name = getEnv ('NEXT_PUBLIC_NAME')
  const avatar = getEnv ('NEXT_PUBLIC_AVATAR')

  return (
    <section className="sm:mt-[360px] mt-[120px] flex flex-col sm:flex-row items-center justify-center gap-x-0 gap-y-12 sm:gap-x-48">
      <div className="order-2 sm:order-1">
        <h1 className="text-2xl font-mono leading-normal">
          <p>
            Hi,I'm&nbsp;
            <span className="font-bold text-3xl underline">
              {name}
            </span>
            ,
          </p>
          <p className="text-xl">
            I am a&nbsp;
            <span className="font-bold text-3xl underline">&lt;Developer&gt;</span>
            .
          </p>
        </h1>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
      <div className="order-1 sm:order-2 size-[120px] rounded-full">
        <img className="size-full rounded-full" src={avatar} alt="avatar" />
      </div>
    </section>
  )
}
