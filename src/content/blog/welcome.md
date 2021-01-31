---
title: Welcome to my brand new website!
description: "For being a web-developer, it's about time!"
date: 2020-02-01
image: /img/content/blog/welcome.jpg
tags:
    - front-end
layout:
    width: full
---

I have been postphoning a personal website for years in favor of other projects, but I finally found the time to create it. I hope you find the finishing result as stunning as I hope you do.

## The stack

Choosing a stack for this website wasn't actually as easy as I thought. The fact that the site will be mostely static, with a blog post or new project once in a while, I was looking for a great static framework to use. My main requirement was that it could be hosted on a static webhost like Github Pages or Netlify, since I don't want to spend a fortune and setup an entire webserver with CI/CD integration. I ended up with a few choices:

-   **VuePress**: orginally meant for documentation websites, VuePress is a solid tool for creating a static, markdown-based website. However, it can be a bit tedious to create a custom theme that fits 100% of my needs. I was looking for something with more freedom.

-   **Hugo**: I have seen some of my Zeus friends use Hugo for their personal websites. While it great for simple websites, and Javascript haters, creating custom styles/themes can be a learning curve, which is fine if you have time, but not that great if you only want to spend a day or 2 creating your website.

-   **Ruby on Rails**: while more meant for server-side rendered web-content, it also has options for staticly generating webpages. One problem, I don't know Ruby (on Rails), and to be quite frankly, it's not on my "Languages I want to learn"-list. It is still used by a lot of companies but it's popularity has been dropping over the years. Great option, but not for me.

-   **Nuxt.JS**: while mostely used for server-side rendering, Nuxt.JS offers a SSG build option and an amazing `@nuxt/content` plugin for integrating with markdown. It uses Vue, which is by far my personal favorite. It offers great hot-reloading in development, amazing SEO support and a lot of modules to use.

_Yes, there are a lot of great other alternatives, like Next.JS or Gatsby in React, but I haven't used those in a while and was looking for something that wouldn't take a lot of learning-time. I will definitly revisit those in the future_

After comparing these solid options, I ended up going with **Nuxt.JS**. Of all the options I have provided above, it is still the option I am most familiar with. Don't get me wrong, I love learning new frameworks/languages, but this project has a time-limit, so better fast then never :)

## The styling

I will admit, I do have a slight preference to using component frameworks over regular CSS, in particular those following the [Material Design](https://material.io/design) guidelines. I have used [Vuetify](https://vuetifyjs.com) for multiple projects, as it can be customized to something unique every time. It offers all the components you would ever need, but it is huge/bulky. The Vuetify team has done an amazing job with tools like `vuetify-loader`, which only includes the used components, automagically, but the CSS bundle is still huge and overal performance can sometimes be poor or require a lot of further optimalizations. For giant web-projects it's still a great fit, but for this personal site writing my own custom CSS & components is the way to go.

So I ended up writing all of the styles myself, in SCSS, except for certain flex-related things. I used the extracted "bootstrap-grid", which is quite small and is great for building responsive flex-related content. I also used the bootstrap values for breakpoints, as they are still my personal favorite. While I am not a big fan of utility CSS classes (yes I am looking at you Tailwind), it makes sence for responsive flex.

## CV

Multiple iterations of my CV have been created over the years. I have used Word & Publisher before but I wanted to try something new. Yes, I made my CV in HTML and CSS! And as a matter of fact, I found it easier to create it Word/Publisher. Maybe it's the fact that I have more experience in CSS than in Word/Publisher, but who knows. The big benefit is that it can be easily embedded inside my website and the web and print layout can be slightly different, using the `@media print`-CSS query.

## Conclusion

While it was long overdue, I am happy with the result, hence the limited time-frame. I hope you enjoy it and if you have any feedback be sure to Tweet me [@Maarten_VN](https://twitter.com/maarten_vn) or make an issue/pull-request on the [Github Repository](https://github.com/maartenvn/Website)
