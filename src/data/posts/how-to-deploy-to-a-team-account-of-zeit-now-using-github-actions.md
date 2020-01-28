---
title: How to deploy to a team account of ZEIT Now using GitHub Actions
slug: deploy-team-zeit-now
excerpt: If you need to deploy to a team account of ZEIT Now by committing changes
  to your repo, you'll find out that standard integration of Now and GitHub tied to
  your private account won't work.
date: 2020-01-27T21:00:00Z
tags:
- GitHub
- ZEIT Now
category: ''
action: ''

---
So you'll need to make another integration of your team account on Now and a _private_ GitHub team _which is a paid feature unlike your personal account on GitHub if you want your team account to be private as well_.

You have two options — either subscribe to a private team account on GitHub with a monthly fee or use GitHub Actions which is designed to automate deployment processes on your own.

If you are ready to pay for a private team account, you just have to make a one-click configuration of your Now team and your team on GitHub. If you are not, you can use a third-party package [ZEIT Now Deployment](https://github.com/amondnet/now-deployment) from GitHub Actions Marketplace.

## How to configure deployment using the third-party package

### Step 1

Go to [ZEIT Now > Account > Tokens](https://zeit.co/account/tokens) and create an access token. Copy it, go to GitHub > YOUR__EPO > Settings > Secrets, and create a new secret named ZEIT_OKEN with the access token from ZEIT Now you have just create_

### Step 2

Go to your repo and click _Actions_. Then click _Set up workflow yourself_ and paste the code below:

```yaml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: amondnet/now-deployment@v1
      with:
        zeit-token: ${{ secrets.ZEIT_TOKEN }}
        now-args: '--prod'
```

Click _Start commit_ and then _Commit new file_. This is going to create a new file named `main.yml` (you can rename it as you like) in `.github/workflows/` inside of your repo. The commit will start the proccess of deploying your app to ZEIT Now. To check it go to Actions again.