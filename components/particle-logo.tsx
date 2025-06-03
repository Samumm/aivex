"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  opacity: number
  color: string
  hoverColor: string
}

export default function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create text particles
    const createTextParticles = () => {
      const particles: Particle[] = []

      // Create temporary canvas for text measurement
      const tempCanvas = document.createElement("canvas")
      const tempCtx = tempCanvas.getContext("2d")
      if (!tempCtx) return particles

      tempCanvas.width = canvas.offsetWidth
      tempCanvas.height = canvas.offsetHeight

      // Set font for VEX
      tempCtx.font = "bold 120px Arial"
      tempCtx.fillStyle = "white"
      tempCtx.textAlign = "center"
      tempCtx.textBaseline = "middle"

      // Draw VEX
      const vexText = "VEX"
      const vexY = canvas.offsetHeight / 2 - 60
      tempCtx.fillText(vexText, canvas.offsetWidth / 2, vexY)

      // Set font for MARKETING LTDA
      tempCtx.font = "bold 40px Arial"
      const marketingText = "MARKETING LTDA"
      const marketingY = canvas.offsetHeight / 2 + 40
      tempCtx.fillText(marketingText, canvas.offsetWidth / 2, marketingY)

      // Get image data and create particles
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
      const data = imageData.data

      for (let y = 0; y < tempCanvas.height; y += 4) {
        for (let x = 0; x < tempCanvas.width; x += 4) {
          const index = (y * tempCanvas.width + x) * 4
          const alpha = data[index + 3]

          if (alpha > 128) {
            particles.push({
              x: Math.random() * canvas.offsetWidth,
              y: Math.random() * canvas.offsetHeight,
              targetX: x,
              targetY: y,
              size: Math.random() * 2 + 1,
              opacity: Math.random() * 0.8 + 0.2,
              color: `rgba(156, 163, 175, ${Math.random() * 0.8 + 0.2})`, // gray-400
              hoverColor: `rgba(147, 51, 234, ${Math.random() * 0.8 + 0.2})`, // purple-600
            })
          }
        }
      }

      return particles
    }

    particlesRef.current = createTextParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particlesRef.current.forEach((particle) => {
        // Move towards target position
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.x += dx * 0.05
        particle.y += dy * 0.05

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = isHovered ? particle.hoverColor : particle.color
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  return (
    <div className="relative w-full h-96 bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm mb-2">
          Transforme seu negócio com <span className="text-purple-400 font-semibold">Inteligência Artificial</span>
        </p>
        <p className="text-gray-500 text-xs">(passe o mouse sobre o logo)</p>
      </div>
    </div>
  )
}
