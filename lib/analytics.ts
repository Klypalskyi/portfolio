type UmamiWindow = Window & {
  umami?: { track: (name: string, data?: Record<string, string>) => void }
}

export function track(name: string, data?: Record<string, string>) {
  ;(window as UmamiWindow).umami?.track(name, data)
}
