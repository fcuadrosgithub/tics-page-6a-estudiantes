"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface EventDetailDialogProps {
  title: string
  description: string
  date?: string
  time?: string
  location?: string
  category?: string
  image?: string
}

export default function EventDetailDialog({
  title,
  description,
  date,
  time,
  location,
  category,
  image,
}: EventDetailDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-blue-700 hover:underline p-0 h-auto">
          Leer más
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
        </DialogHeader>

        {image && (
          <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {date && (
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="mr-2 h-4 w-4 text-blue-700" />
                <span>
                  {date}
                  {time && ` | ${time}`}
                </span>
              </div>
            )}

            {location && (
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4 text-blue-700" />
                <span>{location}</span>
              </div>
            )}

            {category && <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{category}</Badge>}
          </div>

          <div className="text-gray-700 whitespace-pre-line">{description}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
