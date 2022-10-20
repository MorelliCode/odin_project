# A very common website feature

The goal of this exercise is to recreate a section that is found on many informational websites.

For this one you will need to edit the HTML a little bit too. We can't be making things _too_ easy for you. You'll want to add containers around the various elements so that you can flex them. Good luck!

## Desired outcome

![desired outcome](./desired-outcome.png)

### Self Check

- (Phew! This was a doozy. Not hard, per-se, but very finicky until I got the correct idea)
- All items are centered on the page (horizontally, not vertically).
  - Yes. This was done by wrapping all plants (img and text) in a div (class="plants") and setting justify-content to center
- The title is centered on the page.
  - Yes. Title to flex, justify-content to center
- There is 32px between the title and the 'items.'
  - Yes. Add bottom margin of 32px to title
- There is 52px between each item.
  - Yes. Added a gap of 52px to .plants
- The items are arranged horizontally on the page.
  - Yes. This happened automatically by setting .plants to flex
- The items are only 200px wide and the text wraps.
  - Yes. Set width of each child div of .plants to 200px. Set .text to text-align center
- The item text is centered.
  - Yes. THIS WAS HARD. I did it by setting each child div of .plants to flex-direction column
- (now looking at the solution I can see that I overengineered my solution. However, I don't understand why setting text-align: center on the body modifies the pictures too)