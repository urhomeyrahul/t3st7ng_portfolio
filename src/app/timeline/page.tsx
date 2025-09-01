"use client"

import {
    Timeline,
} from "@/components/ui/timeline"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

import { experienceData, educationData, type TimeLineEntry } from "../maindata"

const mergedTimeline: TimeLineEntry[] = [
    ...experienceData.map((item) => ({ ...item, type: "experience" as const })),
    ...educationData.map((item) => ({ ...item, type: "education" as const })),
].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
});

function createTimelineItems(data: TimeLineEntry[]) {
    return data.map((item) => ({
        title: (
            <p className="text-4xl sm:text-4xl">
                {item.title}
            </p>
        ),
        content: (
            <div className="space-y-2 text-md text-muted-foreground">
                <div className="flex items-center gap-3">

                    <span className="text-3xl sm:text-xl scale-90 sm:scale-100">
                        {item.name}
                    </span>

                    <Link href={item.link2Web} target="_blank">
                        <Avatar className="rounded-sm h-16 w-16 sm:h-14 sm:w-14">
                            <AvatarImage src={item.imgSrc} alt={item.name} />
                        </Avatar>
                    </Link>

                    {item.banner && (
                        <iframe
                            src={item.banner}
                            className="rounded-lg border-0 w-[400px] h-[120px] overflow-hidden  hidden lg:block"
                            scrolling="no"
                        />
                    )}
                </div>

                <p className="text-xl text-muted-foreground">
                    {new Date(item.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                    })}{" "}
                    –{" "}
                    {item.endDate
                        ? new Date(item.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                        })
                        : "Present"}
                    &nbsp;&nbsp;{item.location}
                </p>

                <p className="text-md">{item.description}</p>
            </div>
        ),
    }))
}

export default function Experience() {

    const items = createTimelineItems(mergedTimeline)

    return (

        <main className="flex flex-col justify-center px-15 py-20 space-y-32 z-10">
            <section className="max-w-3xl py-45 scale-90 sm:scale-100 ">
                <h1 className="font-bold text-5xl sm:text-6xl mb-4">RoadMap | TimeLine</h1>

                <p className="text-lg text-gray-600 dark:text-gray-300">
                    My professional career, experiences, and skills.
                </p> <br />
            </section>

            <div className="space-y-18 scale-90 sm:scale-100 sm:py-1 ">

                <Timeline data={items} />

            </div>
        </main>

    )
}