import type { Meetup } from "./types";

export const meetups: Meetup[] = [
  {
    title: "Web Development Meetup",
    url: "https://example.com/web-dev-meetup",
    date: new Date("2023-11-15"),
    description: [
      "This meetup will cover topics such as React, Vue, and responsive design.",
      "Don't miss out on the opportunity to network with fellow developers.",
    ],
  },
  {
    title: "Data Science Workshop",
    url: "https://example.com/data-science-workshop",
    date: new Date("2023-12-10"),
    description: [
      "Learn about machine learning, data analysis, and more.",
      "Hands-on sessions and expert speakers will guide you through the journey.",
    ],
  },
  {
    title: "Design and UX Forum",
    url: "https://example.com/design-ux-forum",
    date: new Date("2024-01-20"),
    upComing: true,
    location: "Steelcase, Maestro Business Center, Cluj-Napoca",
    description: [
      "Discuss the latest design trends, usability, and user research.",
      "Join us for interactive workshops and gain insights from industry leaders.",
    ],
  },
];
