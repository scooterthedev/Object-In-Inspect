# Object In Inspect

Watch this magic by stacking different types of request to start making shapes in the netwrok tab in the inspect tool! This is still a huge work in progress, but the fondation has been laid out on how request stacking in the network tab works, and a working proof of concept.
 
![image](https://github.com/user-attachments/assets/f522714c-389e-4b4d-994c-cc2749d95eb8)

## How does it work?
In short - it works when you send more than one request with a different type of contentType at the exact same time. When this happens, Chrome stacks the request and by adjusting the requests to send a different times, you can start making shapes like a 2D shark in the network tab!

## Setup

1. Run `npm install`
2. Go to /public and run `index.html`
3. Click "Start Drawing", and watch the requests come through in the netwrok tab
