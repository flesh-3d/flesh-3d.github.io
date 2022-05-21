First off, the bones of this project are available here: https://github.com/briancodex/nextjs-crypto-api

This was my first ever React app, so I spent several hours making sure I understood how React works, and based this project off of the project above.

I would like to give briancodex credit here, because his tutorial was a massive help!! 

I had to completely reconstruct it without using next.js to be able to deploy it on github, which also helped me learn a lot more about next js 
along with react.


1) What is the URL to your GitHub-Pages site?

-- https://flesh-3d.github.io/ 

2) What API did you use and why?

-- I used coingecko because it seemed thorough, free, and simple to use. The largest motivator was that it seems reliable for data, as well as being 
reliable for API calls. I went with creating a crypto app, because it is something I've been following since late 2016, and because there is just a 
plethora of data involved which is constantly moving.

3) What are some other applications for your API other than searching? Name a few and describe how an app using it for that purpose might work.

-- I decided to add the USD conversion functionality because it seemed like a useful tool for people who are just starting their journey with crypto, 
or want to better understand its worth. A practical application for the app would be incorporating a link to a crypto exchange to buy the amount of 
the coin returned from the USD conversion. 

For example, the user enters $500 and searches a cryptocurrency they've heard about (let's say 'Eth'). This will return Ethereum, Tether, and maybe 
Ethereum Classic (depending on the day).

The user would likely see that $500 will get a larger fraction of the cheaper coins, and decide which of the three results they want to spend $500 on.

If the link to buy the coin was right next to each result, I would make sure it corresponds with an exchange that sells the coin (not all exchanges 
sell the same things). This may be beyond the scope, but passing that dollar value to an exchange to then buy the corresponding coin would be very 
convenient.

4) Explain the considerations you needed to make for the website to be responsive & mobile-friendly.

-- The user accessing this app is not someone who needs excessive data and charts, but might want to see more information about a coin, at least out 
of curiosity. The main function of the app is to check out some of the top cryptocurrencies, see how they're doing, sort, and see how much you could 
buy with a number you have in mind.

The user is not looking for something complicated, and might just look at it in the elevator - so the mobile user likely only wants to see a couple 
things - the coin, the price, and the percentage it's changed in the last little while (24 hours in this app). 

This is all to say that the mobile version of the app would hide all the rest of the data, because the average user will most likely just want the 
basics on a mobile device.

5) How can you make your app accessible to people with disabilities such as blindness or colorblindness?

-- For colorblindness, I think it would be helpful for the green and red percentages to be accompanied by an up or down arrow.
Depending on the level of sight available, more options for higher contrast or an easily-accessible way to enlarge all of the text (aside from ctrl +).
Also, re-creating the Logo in a vector, so that it would remain crisp when zooming in. I believe most of the data is accessible to screen readers, but 
it might not be readily apparent that the user controls function how someone would expect, so an alt text or something to make that more clear would be 
good!

6) If you could make further changes to your project to improve/expand the experience, what would they be and how would you go about implementing them?

-- I took a lot of time on this project, because I was dying to know how to better implement my ideas! React is brand new to me as of 6 days ago, and I did
run into a lot of issues trying to make things work how I would expect them to. 

First, I wish I could have creating a better loading screen (my current loading screen is... not ideal, to be perfectly honest!). 
I also had a surprisingly hard time figuring out how to handle errors and communicate them to the user, and would like to better understand how to do that.
(In retrospect, removing next js from the project seems to make this easier).

I would love to have more animations - I've been really excited about the idea of incorporating interactive 3D elements for visual appeal/user engagement.
I was imaginging the header image being an actual 3D head that follows your mouse around the page - maybe there could be some sort of animation triggered 
when you use the controls... things along these lines. It would be great to see something visually interesting and interactive.

This assessment has given me a lot of ideas about what is possible in react! And I'm very excited to spend time with React at home, to better understand it,
but also to hopefully make some things that are more and more visually impressive and interactive! Thanks for sending this challenge my way!
