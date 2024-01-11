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
  github_href: string
  live_href: string
}

export function ProjectCard( ProjectCardProps: any ) {
  return (
    <Card className="w-[85dvw] md:w-[35dvw]">
      <CardHeader>
        <CardTitle>{ProjectCardProps.title+ "cde"}</CardTitle>
        <CardDescription>{ProjectCardProps.description + "abe"}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="/images/nextjs.svg"
          alt="Next.js Logo"
          width={120}
          height={120}
          className=""
        />
        </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={ProjectCardProps.github_href+"b"}>
        <Button variant="outline">Github
          <Github className="ml-2" size={16} />
        </Button>
        </Link>
        <Link href={ProjectCardProps.live_href+"a"}>
        <Button>Live
          <ExternalLink className="ml-2" size={16} />
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
