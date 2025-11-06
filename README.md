# Tiny Conflict Fleet Creator
Version 2.0, 11/6/2025

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

## How to use
My purpose for this tool was rapid deployment of something passable in order to
play Tiny Conflict with a larger army sooner. As such, the tool is not deployed on 
the internet and requires a download and unzip. Updates will continue to be pushed
to the repo but manual updates will be required until i eventually add this to a
personal portfolio site.

Download the .zip found in the release