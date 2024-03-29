import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import IconNextjs from "@/public/icons/next-logo"
import IconReactjsFill from "@/public//icons/react"
import IconTailwindcss from "@/public//icons/tailwind"
import IconTypescript from "@/public/icons/ts"
import IconJs from "@/public/icons/js"
import IconBxlCss3 from "@/public/icons/css3"
import IconHtml5 from "@/public/icons/html5"

const skills = [
  {
    name: "React",
    Icon: IconReactjsFill,
  },
  {
    name: "Next.js",
    Icon: IconNextjs,
  },
  {
    name: "Tailwind CSS",
    Icon: IconTailwindcss,
  },
  {
    name: "TypeScript",
    Icon: IconTypescript,
  },
  {
    name: "JavaScript",
    Icon: IconJs,
  },
  {
    name: "CSS",
    Icon: IconBxlCss3,
  },
  {
    name: "HTML",
    Icon: IconHtml5,
  },
]

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm self-center xl:self-start sm:max-w-md md:max-w-xl"
      opts={{loop: true}}
    >
      <CarouselContent className="items-center">
        {skills.map((skill, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 xl:basis-1/3">
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex gap-3 items-center justify-center p-2 text-xl">
                  <skill.Icon width="40px" height="40px" />{skill.name}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
