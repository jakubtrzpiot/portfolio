---
  title: What is Rendering? How Server Side Rendering works in Next.js
  description:
    With server-side rendering, the HTML of the page is generated on a server for each request. The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.
  image : /assets/blog/ssr/cover.png
  date: September 26, 2022
---

## What is Rendering?

There is an unavoidable unit of work to convert the code you write in React into the HTML representation of your UI. This process is called rendering.
Rendering can take place on the server or on the client. It can happen either ahead of time at build time, or on every request at runtime.

With Next.js, three types of rendering methods are available: Server-Side Rendering, Static Site Generation, and Client-Side Rendering

## Pre-Rendering

Server-Side Rendering and Static Site Generation are also referred to as Pre-Rendering because the fetching of external data and transformation of React components into HTML happens before the result is sent to the client.

## Client-Side Rendering vs. Pre-Rendering

In a standard React application, the browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. This is called client-side rendering because the initial rendering work happens on the user's device.

In contrast, Next.js pre-renders every page by default. Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.
In practice, this means that for a fully client-side rendered app, the user will see a blank page while the rendering work is being done. Compared to a pre-rendered app, where the user will see the constructed HTML:

## Server-Side Rendering

With server-side rendering, the HTML of the page is generated on a server for each request. The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.
On the client, the HTML is used to show a fast non-interactive page, while React uses the JSON data and JavaScript instructions to make components interactive (for example, attaching event handlers to a button). This process is called hydration.
In Next.js, you can opt to server-side render pages by using getServerSideProps.
