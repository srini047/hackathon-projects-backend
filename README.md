# HackProInit

<!-- Insert thumbnail here -->

## Video Demo

<!-- Insert file here directly -->

*Submitted to [MLH Workathon](https://work-a-thon.devpost.com)*

## Elevator Pitch
**A one-stop platform to help build your next hackathon project**

## Landing Page

Gives a clear overview of the project built and its functionalities using Ant design.

[URL](https://github.com/srini047/hackathon-projects-landing)

## Backend🔙

[URL](https://github.com/srini047/hackathon-projects-backend)

### Endpoints

#### Project idea generator (genreric)
Made use of Cohere (Genreate)

- /projectIdeas ✅

#### Project idea generator (specific)
Made use of Cohere (Genreate with constraints)

- /projectIdea`?topic=""` ✅

#### Project description generator
Made use of Cohere (Genreate)
- /projectDescription`?name=""` ✅

#### Project title generator
Made use of Cohere (Genreate)

- /projectTitle`?desc=""` ✅

#### Project comparsion (P1 vs P2)
Made use of Cohere (Genreate / Classify)
- /projectCompare`? ❌

#### Project implementation
Made use of OpenAI API
- /projectImplement`?name=""` { Need some more working and fine tuning... } ❌



## Frontend➬

[URL](https://github.com/srini047/hackathon-projects-frontend)

### Endpoints

#### Get Ideas
- `/ideas` ✅

#### Get Ideas
- `/idea` ✅

#### Get Ideas
- `/description` ✅

#### Get Ideas
- `/title` ✅

#### Get Ideas
- `/compare` ❌

#### Get Ideas
- /projectImplement`?name=""` { Need some more working and fine tuning... } ❗️


## Authentication
- Using Twilio Verify (to be integrated)

## Inspiration
*When I decided to participate in Work-a-thon, initially nothing struck my mind interesting. So I felt many others would once in a while be in such a situation. Hence, I decided to build my own Hackathon project initiator that provides the initial breakthrough kickstart your project.*

## What it does
As the title suggests, `Hack => Hackathon` & `Pro => Project` & `Init => Initializer` means it acts as a platform to generate project **Ideas, Description, Title**. These are the bare minimum requirements for any hackathon project submission including devpost. 

## How we built it
- Cohere (Generate project title, description, comparison)
- Twilio Verify (Authentication)
- GitHub (Most obvious)
- OpenAI (Generate project implementation)
- GoDaddy Registry (Domain)
- React.js (Frontend)
- Node.js (Backend)
- Ant Design & Bootstrap (CSS)

## Challenges we ran into
- While building the backend, get the response in the desired format `JSON` and truncate unwanted stuff.
- After fetching the data from the server and overcoming the CORS error was very hectic and the most time-consuming. I tried all the stuff google, StackOverflow, chatGPT, etc. at last a basic `CORS Unblocked` chrome extension came to the rescue.
- Building a Landing was something important as most of us don't give much attention to it. Hence I spent some time building it and faced lots of issues while building. Finally, thanks to AntD that came to the revival.

## Accomplishments that we're proud of
- How to query the prompt or interpret the NLP models to get the best possible results possible.
- Overcoming the CORS error while fetching the data from the server was like getting a college degree I felt like floating in the air.
- Then building a response UI was something cool in a short span of time.
- A desperate, responsive landing page to showcase every bit of my Project was a nice thing.

## What we learned
- First of all, never hack alone since I had a long break with hackathons and thought of working solo but never going to attempt it.
- Dealing with CORS and how to break down the errors to get the right solution.

## What's next for HackProInit
- Integrate Authentication (the code exists)
- Work on tech stack thing for project implementation.
- Also provide a comparison of projects while choosing the best out of the two.
