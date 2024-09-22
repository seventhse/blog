declare interface LocalProcessEnv extends NodeJS.ProcessEnv {
  readonly NEXT_PUBLIC_TITLE: string
  readonly NEXT_PUBLIC_NAME: string
  readonly NEXT_PUBLIC_AVATAR: string
  readonly NEXT_PUBLIC_GITHUB_URL: string
  readonly NEXT_PUBLIC_TWITTER_URL: string
  readonly NEXT_PUBLIC_DISCORD_URL: string
}

declare namespace NodeJS {
  export interface ProgressEnv extends LocalProcessEnv {

  }
}
