import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import IconNextjs from "@/public/next-logo"
import IconReactjsFill from "@/public/react"
import IconTailwindcss from "@/public/tailwind"
import IconTypescript from "@/public/ts"
import IconJs from "@/public/js"
import IconBxlCss3 from "@/public/css3"
import IconHtml5 from "@/public/html5"

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
    Autoplay({ delay: 1000, stopOnInteraction: false })
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
              <Card>
                <CardContent className="flex gap-3 items-center justify-center p-2 text-xl">
                  <skill.Icon width="2em" height="2em" />{skill.name}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
