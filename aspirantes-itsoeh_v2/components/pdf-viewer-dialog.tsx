"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText, X } from "lucide-react"
import { useState } from "react"

interface PdfViewerDialogProps {
  title: string
  pdfPath: string
  buttonText: string
  buttonVariant?: "default" | "outline"
}

export default function PdfViewerDialog({
  title,
  pdfPath,
  buttonText,
  buttonVariant = "default",
}: PdfViewerDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          className={buttonVariant === "outline" ? "border-blue-700 text-blue-700 hover:bg-blue-50" : ""}
        >
          <FileText className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <DialogTitle>{title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full h-8 w-8 p-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
        <div className="h-full p-0">
          <iframe src={pdfPath} className="w-full h-[calc(80vh-60px)]" title={title} frameBorder="0" allowFullScreen />
        </div>
      </DialogContent>
    </Dialog>
  )
}
