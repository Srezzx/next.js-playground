import fs from "fs";
import { Feed } from "feed";

const GenerateRssFeed = () => {
  const siteURL = process.env.VERCEL_URL;
  const date = new Date();
  const author = {
    name: "John Doe",
    email: "example@gmail.com",
    link: "https://twitter.com/<username>",
  };

  const feed = new Feed({
    title: "Example Name",
    description: "Example Description",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved Sriesh Agrawal`,
    updated: date,
    generator: "Feed for Node.js, with next.js by srezz ",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
  });

  feed.addItem({
    title: "Sriesh Try for next.js 12",
    id: "TRY ID",
    link: "https://srieshag.com",
    description: "Example post description",
    content: "This is an example rss feed for next.js 13",
    author: [author],
    contributor: [author],
    date: date,
  });
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};

export default GenerateRssFeed;
