![GitHub repo size](https://img.shields.io/github/repo-size/Smerly/Manga-LIVE)
![GitHub issues](https://img.shields.io/github/issues/Smerly/Manga-LIVE)
![Manga-LIVE Logo](https://cdn.discordapp.com/attachments/584882522211483754/899097291644862464/Manga-LIVE2.png)

WIP | A prototype website for posting manga and collaborating with others to create the highest quality manga possible.

Posting feature is implemented with a database!

## Live Deployed on CapRover

[Deployed Link](https://www.manga-live.org/)

## FreshPing Monitoring

Status: [FreshPing Status](https://statuspage.freshping.io/63558-MangaLIVE)

## How to Run Docker Container

Navigate to project directory

```bash
cd Manga-LIVE
```

Build Dockerfile image

```bash
docker build . -t mangalive
```

Create and run Docker container with image

```bash
docker run -p 3030:3030 mangalive
```


## How to use

Since the current WIP version of Manga-LIVE has posting services and the use of a database, you can post!

### How to see posts

From the landing page, navigate to "explore" at the top navbar, then, navigate to "search" in the navbar below the main navbar

### How to make a post

From the landing page, navigate to "create" at the top navbar. The current filter gather data, but do not function with the creation of your post. So you can skip the filter info and go straight to submit the form. After submitting the form, Fill out the post details and submit it!

## How to run Manga-LIVE

### 1. Run with Github pages

You can run Manga-LIVE with the github-pages link [here](https://smerly.github.io/Manga-LIVE/)

### 2. Run on your local machine

Step 1: Git clone the repository

Step 2: Navigate to the project directory

```bash
... cd Manga-LIVE
```

Step 3: Install project dependencies

```bash
npm install
```

Step 4: Start the project with Npm or Yarn

If yarn:

```bash
yarn start
```

If npm:

```bash
npm start
```
