export const isBrowser = () => typeof window !== 'undefined' && window

const userAgent = () => isBrowser() ? window.navigator.userAgent : ''

export const isMobile = () => /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|webOS/i.test(userAgent())
