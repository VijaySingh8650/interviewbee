import { authOptions } from "@/utils/constants";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"; // Use 'import { NextResponse } from "next/server"' for Next.js 13+ API routes

type  Session =  {
    accessToken?: string;
}

type CalendarEvent =  {
    id: string;
    summary: string;
    start: {
        dateTime?: string;
        date?: string;
    };
    end: {
        dateTime?: string;
        date?: string;
    };
  
 
}

interface CalendarResponse {
    items: CalendarEvent[];
}

export async function GET(): Promise<Response> {
    const session: Session | null = await getServerSession(authOptions);
  
    if (!session || !session.accessToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
            {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }

        const data: CalendarResponse = await response.json();
        return NextResponse.json(data.items, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
    }
}
