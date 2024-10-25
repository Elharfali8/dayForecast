import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { cities } from "@/utils/data"
import CardGlobal from "./CardGlobal"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm sm:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]"
    >
      <CarouselContent>
              {cities.map((city) => {
                  const { id } = city
                  return (
                    <CarouselItem key={id} className=" md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1">
                              <CardGlobal {...city}  />
                    </div>
                  </CarouselItem>
                  )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
