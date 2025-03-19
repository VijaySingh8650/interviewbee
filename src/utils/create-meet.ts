import { authOptions } from "@/utils/constants";
import { getServerSession } from "next-auth";

export async function createGoogleMeet(startDateTime: string) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    throw new Error("Unauthorized: No access token");
  }

  try {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: "Scheduled Google Meet",
          start: { dateTime: startDateTime, timeZone: "UTC" },
          end: { dateTime: new Date(new Date(startDateTime).getTime() + 60 * 60 * 1000).toISOString(), timeZone: "UTC" }, // 1-hour meeting
          conferenceData: { createRequest: { requestId: "unique-request-id" } },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) throw new Error(data.error?.message || "Failed to create event");

    return data.conferenceData?.entryPoints?.[0]?.uri || "No Meet Link Available";
  } catch (error) {
    console.error("Google Meet API Error:", error);
    throw new Error("Failed to create Google Meet link");
  }
}