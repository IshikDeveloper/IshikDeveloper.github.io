dim letsseewhatthisloserwants
letsseewhatthisloserwants = InputBox("Please enter your question", "question")
Set objShell = WScript.CreateObject("WScript.Shell")

' Display the message box
objShell.Popup "loading... dont touch anything(even ok) for 40 seconds", 20, "information", 0

' Wait for 20 seconds
WScript.Sleep 20000
WScript.Sleep 01
' Close the message box
objShell.SendKeys "{ENTER}"
' Define an array of messages
Dim messages(19)
messages(0) = "your mouth is bigger than mount everest"
messages(1) = "if you were black, the only motivation you would need is KFC"
messages(2) = "your gyat is more than your iq"
messages(3) = "is it just me hallucinating, or that your SO stupid that you fall off a cliff"
messages(4) = "some people have abillitys that are really great, YOU HAVE THE BADDEST ABILLITIES ANYONE CAN THINK OF!"
messages(5) = "wish for being immortal"
messages(6) = "hey renember when i said wish for being immortal, cause you could see everyone die"
messages(7) = "i can cook, UNLIKE YOU"
messages(8) = "hey hey some bad slurs here are your generation"
messages(9) = "your face/ass is even worser than the grimace shake"
messages(10) = "hey this is for anyone whos name starts with letter l: you want to make yourself look more better than a banana and people wont do that for you cause they thinks its weird"
messages(11) = "you were better without that nose surgery, smurf"
messages(12) = "did one of these messages were old? speaking of old someone needs to shoot you with the 2023 gun"
messages(13) = "listen mr/ms no rizz, who in the smooth brained earth told you robots will take over the world?"
messages(14) = "retired people can rap better than you"
messages(15) = "stop listening to dumb people, or if there is a yapper here tell them they are the dumb people"
messages(16) = "yap yap yap like your old stupid a$$"
messages(17) = "can you say your personal stuff in your mind? or you dont have a mind"
messages(18) = "if you can do the skibidi ritrual, i would pay you 20 dollars"
messages(19) = "here is words, and i bet youve used two of them or more: rizz mid huggywuggy gyat digitalcircus grimaceshake pizzatower dm edge goon goofyahh sus baka eject imposter ligma pog griddy banban rainbowfriends roblox fapping yapping devious opps fanumtax rizzler nobi***es smurfcat skibiditoilet"
' Generate a random number between 0 and 19
Randomize
randomIndex = Int((20 * Rnd))

' Display the randomly selected message
MsgBox messages(randomIndex), vbInformation, ">:)"








