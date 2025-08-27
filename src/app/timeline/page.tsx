"use client"

import {
    Timeline,
} from "@/components/ui/timeline"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

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
        title: item.title,
        content: (
            <div className="space-y-2 text-sm text-muted-foreground">
                <p className="text-xl">
                    {item.type === "experience" ? item.name : item.name}
                    {/* {<Avatar className="rounded-lg">
                        <AvatarImage
                            src={item.imgSrc}
                        >
                        </AvatarImage>
                    </Avatar>} */}
                </p>

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
        icon: item.type === "experience" ? "💼" : "🎓",
    }))
}

export default function Experience() {

    const items = createTimelineItems(mergedTimeline)

    return (

        <main className="flex flex-col justify-center px-15 py-20 space-y-32 z-10">
            <section className="max-w-3xl py-45 scale-90 sm:scale-100 ">
                <h1 className="font-bold text-6xl mb-4">RoadMap | TimeLine</h1>

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