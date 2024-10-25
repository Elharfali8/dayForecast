import climate from '@/app/images/climate.jpg'
import sever from '@/app/images/sever.jpg'
import forecast from '@/app/images/forecast.jpg'

type Cities = {
    id: number,
    name: string,
}

type Stories = {
    id: number,
    title: string,
    image: any,
    description: string
}

export const cities: Cities[] = [
    {
        id: 1,
        name: 'London'
    },
    {
        id: 2,
        name: 'New York'
    },
    {
        id: 3,
        name: 'Tokyo'
    },
    {
        id: 4,
        name: 'Paris'
    },
    {
        id: 5,
        name: 'Dubai'
    },
]

export const stories: Stories[] = [
    {
        id: 1,
        title: 'The Impact of Climate Change on Global Weather Patterns',
        description: 'Explore how climate change is affecting storms, floods, and droughts worldwide.',
        image: climate,
    },
    {
        id: 2,
        title: 'How to Stay Safe During Severe Weather Events',
        description: 'Get the essential safety tips for tornadoes, hurricanes, and floods.',
        image: sever,
    },
    {
        id: 3,
        title: 'The Science Behind Weather Forecasting',
        description: 'Discover how experts predict the weather and why forecasts change.',
        image: forecast,
    },
]