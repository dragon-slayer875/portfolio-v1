import * as React from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

type ProjectCardProps = {
  title: string
  description: string
  github_link: string
  live_link: string | null
  image: string
}

export function ProjectCard( ProjectCardProps: any ) {
  return (
    <Card className="flex flex-col justify-between h-full w-[85dvw] sm:w-[70dvw] md:w-[60dvw] lg:w-[35dvw] lg:max-w-[35dvw] 2xl:max-w-[34dvw]">
      <CardHeader>
        <CardTitle>{ProjectCardProps.title}</CardTitle>
        <CardDescription>{ProjectCardProps.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={ProjectCardProps.image}
          alt="Next.js Logo"
          width={500}
          height={500}
          className=" object-contain w-full"
        />
        </CardContent>
      <CardFooter className="flex justify-between">
        {ProjectCardProps.github_link && (
          <Link href={ProjectCardProps.github_link}>
            <Button
            variant={"secondary"}
            >
              <span>Github</span>
              <Github className="ml-2" size={16} />
            </Button>
          </Link>
        )}
        {ProjectCardProps.live_link && (
          <Link href={ProjectCardProps.live_link}>
            <Button
            >
              <span>Live</span>
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </Link>
        )}
        
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
