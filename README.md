# Tiny Conflict Fleet Creator
Version 0.2, 11/6/2025

This is a tool to help create fleets for the TTRP Tiny Conflict. It follows
a very simple drag and drop workflow with minimal automatic calculations.


## Important Issues!
This version is missing a few features and is intended to be printed and then
written on with pencil to complete your fleet. I developed this exclusivly on
a Windows 11 machine using Firefox and unexpected behavior may happen due to my
lack of cross-compatability testing. Below i've listed a few bugs and notes
to keep in mind when using the tool.

- __The page is not persistant__

If you were to make 90% of a fleet and then refresh your page, all
    of your progress will be lost!

- __There is no save/load__

Currently (although it is planned) there is no mechanism to export and 
    import fleets in progress for the purposes of modification. This is a very
    useful feature and it is at the top of my list for things to implement.

- __Obfuscation of slot amounts__

The current system uses placed image elements with some minor meta-data
    to track the RP. This system, while easy to implement, does not allow for
    the tracking of things like slot quantity, partial filling of slots, and
    equipping two different things in the same slot. This will render the RP
    estimate inaccurate and requires manual adjustment after printing.

- __Lack of admiral tracking__

The admiral system has additional things to spend RP on which is not
    currently represented in the tool, you will need to keep track of this
    on your own.

- __Bug with printing to PDF__

I encountered a bug when printing to PDF from firefox on my windows machine.
    When using the default print to PDF selection, the images for the items in
    slots appear horribly blurry to the point of un-readability. A solution to
    this is to use <u>Microsoft's</u> print to PDF option in the printer select dropdown
    menu.

- __Custom Factions and Yellow Cube__

I have not yet included the Yellow Cube faction or any of the custom faction
    info. These will be added in a later update when i can organize faction-specific
    items in a more elegent way.

## How to use
My purpose for this tool was rapid deployment of something passable in order to
play Tiny Conflict with a larger army sooner. As such, the tool is not deployed on 
the internet and requires a download and unzip. Updates will continue to be pushed
to the repo but manual updates will be required until i eventually add this to a
personal portfolio site.

Download main.zip found in the release and unzip in folder of choice. Open index.html
in a browser of your choosing. It is important to maintain the relationship of 
index.html and the other folders in main.zip as the image refrences use relative
addressing and will break if you move stuff around.

## Disclosure of AI
This project served as a testing ground for AI tools like Cursor and the VSCode
AI assistant. I almost entirely vibe-coded v0.1 and it didnt turn out the way
I wanted. I started v0.2 with AI but ran out of free credits after just the bare 
bones were put in place. The rest of v0.2 was accelerated with lesser AI chatbots for
things like CSS and rough implementation examples.