"use client"

import { useEffect, useState } from "react"

interface Shape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  color: string
  speed: number
  type: "circle" | "square" | "triangle"
}

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    // Generate random shapes
    const colors = [
      "rgba(59, 130, 246, 0.1)", // blue-500
      "rgba(96, 165, 250, 0.1)", // blue-400
      "rgba(147, 197, 253, 0.1)", // blue-300
      "rgba(191, 219, 254, 0.1)", // blue-200
    ]

    const types: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"]

    const newShapes: Shape[] = []

    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: (Math.random() * 0.5 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    setShapes(newShapes)

    // Animation loop
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({
          ...shape,
          y: (((shape.y + shape.speed * 0.1) % 100) + 100) % 100,
          rotation: (shape.rotation + shape.speed * 0.5) % 360,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-in-out"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: shape.color,
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="rounded-md"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: shape.color,
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
