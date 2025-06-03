"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const socialPlatforms = [
  {
    name: "WhatsApp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    color: "hover:bg-green-500/20 hover:border-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    color: "hover:bg-pink-500/20 hover:border-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    color: "hover:bg-blue-500/20 hover:border-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Messenger",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg",
    color: "hover:bg-blue-400/20 hover:border-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "Telegram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    color: "hover:bg-cyan-500/20 hover:border-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    color: "hover:bg-red-500/20 hover:border-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    color: "hover:bg-gray-500/20 hover:border-gray-500",
    bgColor: "bg-gray-500/10",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    color: "hover:bg-blue-600/20 hover:border-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    name: "TikTok",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    color: "hover:bg-pink-600/20 hover:border-pink-600",
    bgColor: "bg-pink-600/10",
  },
  {
    name: "Discord",
    logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    color: "hover:bg-indigo-500/20 hover:border-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    color: "hover:bg-purple-500/20 hover:border-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Snapchat",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    color: "hover:bg-yellow-500/20 hover:border-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
]

export default function SocialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % socialPlatforms.length)
    }, 2500) // Muda a cada 2.5 segundos

    return () => clearInterval(interval)
  }, [isPaused])

  const getVisiblePlatforms = () => {
    const visible = []
    for (let i = 0; i < 7; i++) {
      const index = (currentIndex + i) % socialPlatforms.length
      visible.push({ ...socialPlatforms[index], position: i })
    }
    return visible
  }

  const handlePlatformClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleImageError = (platformName: string) => {
    setImageErrors((prev) => ({ ...prev, [platformName]: true }))
  }

  const getIconFallback = (platformName: string) => {
    const iconMap: { [key: string]: string } = {
      WhatsApp: "💬",
      Instagram: "📷",
      Facebook: "👥",
      Messenger: "💬",
      Telegram: "✈️",
      YouTube: "📺",
      Twitter: "🐦",
      LinkedIn: "💼",
      TikTok: "🎵",
      Discord: "🎮",
      Slack: "💼",
      Snapchat: "👻",
    }
    return iconMap[platformName] || "📱"
  }

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm mb-2">Automatize o atendimento em todas as principais plataformas</p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
      </div>

      <div
        className="flex justify-center items-center space-x-4 overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {getVisiblePlatforms().map((platform, index) => {
          const isCenter = index === 3
          const isNearCenter = index === 2 || index === 4
          const isVisible = index >= 1 && index <= 5
          const hasImageError = imageErrors[platform.name]

          return (
            <div
              key={`${platform.name}-${currentIndex}-${index}`}
              className={`
                flex flex-col items-center space-y-3 transition-all duration-700 ease-out cursor-pointer
                ${isCenter ? "scale-125 opacity-100 z-10" : ""}
                ${isNearCenter ? "scale-110 opacity-90" : ""}
                ${!isCenter && !isNearCenter && isVisible ? "scale-95 opacity-60" : ""}
                ${!isVisible ? "scale-75 opacity-30" : ""}
                ${index === 0 || index === 6 ? "hidden lg:flex" : ""}
                ${index === 1 || index === 5 ? "hidden md:flex" : "flex"}
              `}
              onClick={() => handlePlatformClick((currentIndex + index) % socialPlatforms.length)}
            >
              <div
                className={`
                  relative w-16 h-16 rounded-2xl border-2 border-gray-700 
                  flex items-center justify-center transition-all duration-500
                  ${platform.bgColor} ${platform.color}
                  ${isCenter ? "ring-2 ring-purple-500 ring-opacity-50 shadow-lg shadow-purple-500/25" : ""}
                  ${isCenter ? "bg-gray-800" : "bg-gray-800/50"}
                  hover:scale-110 hover:shadow-xl
                `}
              >
                {!hasImageError ? (
                  <div className="relative w-8 h-8">
                    <Image
                      src={platform.logo || "/placeholder.svg"}
                      alt={`${platform.name} logo`}
                      fill
                      className="object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                      crossOrigin="anonymous"
                      onError={() => handleImageError(platform.name)}
                      unoptimized
                    />
                  </div>
                ) : (
                  <span className="text-2xl">{getIconFallback(platform.name)}</span>
                )}

                {/* Glow effect for center item */}
                {isCenter && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 animate-pulse"></div>
                )}
              </div>

              <span
                className={`
                  text-xs font-medium transition-all duration-500 text-center
                  ${isCenter ? "text-white font-semibold" : "text-gray-400"}
                  ${isNearCenter ? "text-gray-300" : ""}
                `}
              >
                {platform.name}
              </span>
            </div>
          )
        })}
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {socialPlatforms.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePlatformClick(index)}
            className={`
              h-2 rounded-full transition-all duration-300 hover:scale-110
              ${index === currentIndex ? "bg-purple-500 w-8" : "bg-gray-600 w-2"}
            `}
          />
        ))}
      </div>

      {/* Platform counter */}
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
          {currentIndex + 1} de {socialPlatforms.length} plataformas
        </p>
      </div>
    </div>
  )
}
