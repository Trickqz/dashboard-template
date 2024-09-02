import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function Navigation({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    return (
        <div>
            <div className="flex sm:justify-between flex-col sm:flex-row items-center">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className={cn("grid gap-2", className)}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="h-10 bg-[hsl(var(--muted))] mt-10 max-w-[400px] rounded-lg p-1 flex flex-row gap-2">
                <div className="p-1 w-24 flex justify-center cursor-pointer items-center rounded-lg  bg-[hsl(var(--background))]">
                    <h1 className="text-sm font-medium">Overview</h1>
                </div>
                <div className="p-1 w-24 flex justify-center items-center rounded-lg">
                    <h1 className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Analytics</h1>
                </div>
                <div className="p-1 w-24 flex justify-center items-center rounded-lg">
                    <h1 className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Reports</h1>
                </div>
                <div className="p-1 w-24 flex justify-center items-center rounded-lg">
                    <h1 className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Notifications</h1>
                </div>
            </div>
        </div>
    )
}