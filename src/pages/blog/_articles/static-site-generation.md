---
  title: How does static site generation work in Next.js?
  description:
    Static websites are as old as the web itself. But the rise of JavaScript has opened the door to make those static sites more dynamic. Static websites are as old as the web itself. But the rise of JavaScript has opened the door to make those static sites more dynamic. Static websites are as old as the web itself. But the rise of JavaScript has opened the door to make those static sites more dynamic.
  image : /blog/ssg/cover.png
  date: September 28, 2022
---

### Static websites are as old as the web itself. But the rise of JavaScript has opened the door to make those static sites more dynamic.

While that can include building an HTML file by hand, how can we leverage static generation to build apps with modern tools?

## What is Static Generation?

Static Generation describes the process of compiling and rendering a website or app at build time. The output is a bunch of static files, including the HTML file itself and assets like JavaScript and CSS.

If you haven’t heard of Static Generation but that concept sounds familiar, you might have heard of it by its longer name Static Site Generation or its acronym SSG.

## What happens during Static Generation?

JavaScript-based web apps as we traditionally know them work by running libraries like React or scripts at run time in the browser.

When the browser receives the page, it’s usually simple HTML without a lot of content. This then loads the scripts to pull the content into the page, a process also known as hydration.

With Static Generation, tools like Next.js try to render that page mostly like it would in the browser but at compile time. This gives us the ability to serve the entire content on first load. The scripts still hydrate the page during this process, but ideally with fewer changes or no changes at all.

## How does Next.js use Static Generation?

Out of the box, Next.js will attempt to statically generate any pages that it can. It does this by detecting how an app is fetching its data.

Next.js provides a few different APIs to fetch data including getStaticProps and getServerSideProps, which, depending on how they’re used, determines how Next.js will build your app.

If you only use getStaticProps to fetch data, Next.js will fetch that data at build time, leaving you with a completely static page.

If you use getServerSideProps, Next.js will know that the app requires a server to render those pages.

Alongside a deployment solution like Vercel that will automatically handle configuring a server, Next.js will load any of the data when someone requests the page from the server.

While it doesn’t do it by default, Next.js also provides the ability to export the app into static files into a separate directory after the app has been built.

First, you would run the next build command to build the app, then you would run next export which, by default, makes the app available as static files in the out directory.
