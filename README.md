# [HiddenArcade][ha]

The [HiddenArcade][ha] is a catalog of web games.

## Games

[Minecart](https://www.hiddenarcade.net/games/minecart)

## Adding new games

 - create new branch from main with game name
 - create directory in `/games/`with game name
 - copy game template files from `/dev/gametemplate/` into game directory
 - build game
 - add game info to `/partials/appCards.js` appIndex
 - add game logo to `/img/${fileName from appIndex}.webp`
 - add game to README Games section above
 - add game page to `sitemap.xml`


[ha]: https://www.hiddenarcade.net