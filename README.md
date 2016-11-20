# lol-riot-api
A configurable League of Legends API. It uses the official [developer's API](https://developer.riotgames.com/) offered by [Riot Games](https://www.riotgames.com), so you will need an API key to be able to use it. [Here](https://developer.riotgames.com/api/methods)'s the complete documentation of their API. In the documentation below there will be references to the official methods used for each route.

[![NSPStatus](https://nodesecurity.io/orgs/mytech/projects/74d09c99-2ca8-4029-b96a-268e35ff2796/badge)](https://nodesecurity.io/orgs/mytech/projects/74d09c99-2ca8-4029-b96a-268e35ff2796)
[![npm version](https://badge.fury.io/js/lol-riot-api.svg)](https://badge.fury.io/js/lol-riot-api)

## Download
lol-riot-api is installable via:

- [GitHub](https://github.com/Pupix/lol-riot-api) `git clone https://github.com/Pupix/lol-riot-api.git`
- [npm](https://www.npmjs.com/): `npm install lol-riot-api`


## Getting started
To start the API server run the following command:
```js
node app.js
```
You will have to do a **one time** configuration to be able to use the API. At the prompt you will be asked for the default API `key` to be used for the calls, the `port` on which the API will run and the default `region` to be used for the API calls.

### Resetting the configuration
You can change the provided API configuration at any time, simply by running:
```js
npm run resetconfig
```

## Documentation

The API's calls are mapped to various API methods from [Riot Game's documentation](https://developer.riotgames.com/api/methods). All URLs can accept `apiKey` and `region` as **query string parameters**, if you want to do calls for a different **region** or with a **different key** than the specified defaults.

### Routes

* [`/champions`](#/champions)
* [`/champions/:id`](#/champions/:id)
* [`/featuredGames`](#/featuredGames)
* [`/leagues/challenger`](#/leagues/challenger)
* [`/leagues/master`](#/leagues/master)
* [`/match/:id`](#/match/:id)
* [`/static/champions`](#/static/champions)
* [`/static/champions/:id`](#/static/champions/:id)
* [`/static/items`](#/static/items)
* [`/static/items/:id`](#/static/items/:id)
* [`/static/languages`](#/static/languages)
* [`/static/languageStrings`](#/static/languageStrings)
* [`/static/maps`](#/static/maps)
* [`/static/masteries`](#/static/masteries)
* [`/static/masteries/:id`](#/static/masteries/:id)
* [`/static/realms`](#/static/realms)
* [`/static/runes`](#/static/runes)
* [`/static/runes/:id`](#/static/runes/:id)
* [`/static/spells`](#/static/spells)
* [`/static/spells/:id`](#/static/spells/:id)
* [`/static/versions`](#/static/versions)
* [`/status`](#/status)
* [`/status/:region`](#/status/:region)
* [`/summoner/:id/currentGame`](#/summoner/:id/currentGame)
* [`/summoner/:id/matchList`](#/summoner/:id/matchList)
* [`/summoner/:id/rankedStats`](#/summoner/:id/rankedStats)
* [`/summoner/:id/recentGames`](#/summoner/:id/recentGames)
* [`/summoner/:id/statsSummary`](#/summoner/:id/statsSummary)
* [`/summoner/:id/championMastery`](#/summoner/:id/championMastery)
* [`/summoner/:id/championMastery/score`](#/summoner/:id/championMastery/score)
* [`/summoner/:id/championMastery/top`](#/summoner/:id/championMastery/top)
* [`/summoner/:id/championMastery/:champId`](#/summoner/:id/championMastery/:champId)
* [`/summoner/:ids`](#/summoner/:ids)
* [`/summoner/:ids/league`](#/summoner/:ids/league)
* [`/summoner/:ids/league/entry`](#/summoner/:ids/league/entry)
* [`/summoner/:ids/masteries`](#/summoner/:ids/masteries)
* [`/summoner/:ids/name`](#/summoner/:ids/name)
* [`/summoner/:ids/runes`](#/summoner/:ids/runes)
* [`/summoner/:ids/teams`](#/summoner/:ids/teams)
* [`/summoner/by-name/:names`](#/summoner/by-name/:names)
* [`/team/:ids`](#/team/:ids)
* [`/team/:ids/league`](#/team/:ids/league)
* [`/team/:ids/league/entry`](#/team/:ids/league/entry)

---------------------------------------

<a name="/champions" />
### /champions

Retrieves basic information about all the champions available in the game.

**Querystring parameters**

* `freeToPlay` - Optional filter param to retrieve only free to play champions.
  * *Possible values:* **Anything**.

---------------------------------------

<a name="/champions/:id" />
### /champions/:id

Retrieves basic information about a champion available in the game by its id.

---------------------------------------

<a name="/featuredGames" />
### /featuredGames

Retrieves a list of featured games.

---------------------------------------

<a name="/leagues/challenger" />
### /leagues/challenger

Retrieves the challenger tier leagues

**Querystring parameters**

* `type` - The queue type.
  * *Possible values:* **RANKED_SOLO_5x5 | RANKED_TEAM_3x3 | RANKED_TEAM_5x5**.

---------------------------------------

<a name="/leagues/master" />
### /leagues/master

Retrieves the master tier leagues

**Querystring parameters**

* `type` - The queue type.
  * *Possible values:* **RANKED_SOLO_5x5 | RANKED_TEAM_3x3 | RANKED_TEAM_5x5**.

---------------------------------------

<a name="/match/:id" />
### /match/:id

Retrieves a match by its id.

**Querystring parameters**

* `includeTimeline` - Flag indicating whether or not to include match timeline data.
    * *Possible values:* **Anything**.
    *
---------------------------------------

<a name="/static/champions" />
### /static/champions

Retrieves champion list.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `dataById` - If specified as true, the returned data map will use the champions' IDs as the keys. If not specified or specified as false, the returned data map will use the champions' keys instead.

* `champData` - Tags to return additional data. Only *type*, *version*, *data*, *id*, *key*, *name*, and *title* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all** | **allytips** | **altimages** | **blurb** | **enemytips** | **image** | **info** | **lore** | **partype** | **passive** | **recommended** | **skins** | **spells** | **stats** | **tags**.

---------------------------------------

<a name="/static/champions/:id" />
### /static/champions/:id

Retrieves a champion by its id.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `champData` - Tags to return additional data. Only *id*, *key*, *name*, and *title* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all** | **allytips** | **altimages** | **blurb** | **enemytips** | **image** | **info** | **lore** | **partype** | **passive** | **recommended** | **skins** | **spells** | **stats** | **tags**.

---------------------------------------

<a name="/static/items" />
### /static/items

Retrieves a list of all items in the game.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `itemListData` - Tags to return additional data. Only *type*, *version*, *basic*, *data*, *id*, *name*, *plaintext*, *group*, and *description* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* ***all | colloq | consumeOnFull | consumed | depth | from | gold | groups | hideFromAll | image | inStore | into | maps | requiredChampion | sanitizedDescription | specialRecipe | stacks | stats | tags | tree**.

---------------------------------------

<a name="/static/items/:id" />
### /static/items/:id

Retrieves an item by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `itemData` - Tags to return additional data. Only id, name, plaintext, group, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | colloq | consumeOnFull | consumed | depth | from | gold | hideFromAll | image | inStore | into | maps | requiredChampion | sanitizedDescription | specialRecipe | stacks | stats | tags**.

---------------------------------------

<a name="/static/languages" />
### /static/languages

Retrieves supported languages data.

---------------------------------------

<a name="/static/languageStrings" />
### /static/languageStrings

Retrieves language string data.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

---------------------------------------

<a name="/static/maps" />
### /static/maps

Retrieves map data.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

---------------------------------------

<a name="/static/masteries" />
### /static/masteries

Retrieves the masteries list.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `masteryListData` - Tags to return additional data. Only type, version, data, id, name, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | image | masteryTree | prereq | ranks | sanitizedDescription | tree**.

---------------------------------------

<a name="/static/masteries/:id" />
### /static/masteries/:id

Retrieves a mastery item by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `masteryData` - Tags to return additional data. Only id, name, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | image | masteryTree | prereq | ranks | sanitizedDescription**.

---------------------------------------

<a name="/static/realms" />
### /static/realms

Retrieves realm data.

---------------------------------------

<a name="/static/runes" />
### /static/runes

Retrieves all runes in game.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `runeListData` - Tags to return additional data. Only *id*, *key*, *name*, *description*, and *summonerLevel* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | basic | colloq | consumeOnFull | consumed | depth | from | gold | hideFromAll | image | inStore | into | maps | requiredChampion | sanitizedDescription | specialRecipe | stacks | stats | tags**.

---------------------------------------

<a name="/static/runes/:id" />
### /static/runes/:id

Retrieves a rune by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `runeData` - Tags to return additional data. Only *id*, *key*, *name*, *description*, and *summonerLevel* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | colloq | consumeOnFull | consumed | depth | from | gold | hideFromAll | image | inStore | into | maps | requiredChampion | sanitizedDescription | specialRecipe | stacks | stats | tags**.

---------------------------------------

<a name="/static/spells" />
### /static/spells

Retrieves all summoner spells in game.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `dataById` - If specified, the returned data map will use the spells' IDs as the keys. If not specified or specified as false, the returned data map will use the spells' keys instead.
    * *Possible values:* **Anything**

* `spellData` - Tags to return additional data. Only *id*, *key*, *name*, *description*, and *summonerLevel* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | cooldown | cooldownBurn | cost | costBurn | costType | effect | effectBurn | image | key | leveltip | maxrnk | modes | range | rangeBurn | resource | sanitizedDescription | sanitizedTooltip | tooltip | vars**.


---------------------------------------

<a name="/static/spells/:id" />
### /static/spells/:id

Retrieves a summoner spell by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `spellData` - Tags to return additional data. Only *id*, *key*, *name*, *description*, and *summonerLevel* are returned by default if this parameter isn't specified. To return all additional data, use the tag **all**.
  * *Possible values:* **all | cooldown | cooldownBurn | cost | costBurn | costType | effect | effectBurn | image | key | leveltip | maxrnk | modes | range | rangeBurn | resource | sanitizedDescription | sanitizedTooltip | tooltip | vars**.

---------------------------------------

<a name="/static/versions" />
### /static/versions

Retrieves version data.

---------------------------------------

<a name="/status" />
### /status

Retrieves the list of available regions.

---------------------------------------

<a name="/status/:region" />
### /status/:region

Retrieves the data available on the status.leagueoflegends.com website for the given `region`.

---------------------------------------

<a name="/summoner/:id/currentGame" />
### /summoner/:id/currentGame

Retrieves current game information for the given summoner `id`.

---------------------------------------

<a name="/summoner/:id/matchList" />
### /summoner/:id/matchList

Retrieves match history by summoner `id`.

**Querystring parameters**

* `championIds` - Comma-separated list of champion IDs to use for fetching games.

* `rankedQueues` - Comma-separated list of ranked queue types to use for fetching games. Non-ranked queue types will be ignored.
  * *Possible values:* **RANKED_SOLO_5x5 | RANKED_TEAM_3x3 | RANKED_TEAM_5x5**.

* `beginTime` - The begin time to use for fetching games specified as epoch milliseconds.
  * *Possible values:* **Any positive natural number**.

* `endTime` - The end time to use for fetching games specified as epoch milliseconds.
  * *Possible values:* **Any positive natural number**.

* `beginIndex` - The begin index to use for fetching games.
  * *Possible values:* **Any positive natural number**.

* `endIndex` - The end index to use for fetching games.
  * *Possible values:* **Any positive natural number**.

---------------------------------------

<a name="/summoner/:id/rankedStats" />
### /summoner/:id/rankedStats

Retrieves ranked stats by summoner `id`.

**Querystring parameters**

* `season` - If specified, stats for the given season are returned. Otherwise, stats for the current season are returned.
  * *Possible values:* **SEASON3 | SEASON2014 | SEASON2015**.

---------------------------------------

<a name="/summoner/:id/recentGames" />
### /summoner/:id/recentGames

Retrieves player stats summaries by summoner `id`.

**Querystring parameters**

* `season` - If specified, stats for the given season are returned. Otherwise, stats for the current season are returned.
  * *Possible values:* **SEASON3 | SEASON2014 | SEASON2015**.

---------------------------------------

<a name="/summoner/:id/statsSummary" />
### /summoner/:id/statsSummary

Retrieves player stats summaries by summoner `id`.

---------------------------------------

<a name="/summoner/:id/championMastery" />
### /summoner/:id/championMastery

Retrieves all champion mastery entries by summoner `id`.

---------------------------------------

<a name="/summoner/:id/championMastery/score" />
### /summoner/:id/championMastery/score

Retrieves the total champion mastery score by summoner `id`.

---------------------------------------

<a name="/summoner/:id/championMastery/top" />
### /summoner/:id/championMastery/top

Retrieves the top champion mastery entries by summoner `id`.

**Querystring parameters**

* `count` - The number of entries to retrieve.
  * *Possible values:* **Any positive natural number**.

---------------------------------------

<a name="/summoner/:id/championMastery/:champId" />
### /summoner/:id/championMastery/:champId

Retrieves a champion mastery entry by summoner `id` and `champId`.

---------------------------------------

<a name="/summoner/:ids" />
### /summoner/:ids

Retrieves summoner objects mapped by summoner *id* for a given list of summoner `ids`.

The `ids` passed must be comma-separated. Maximum allowed at once is 40.

---------------------------------------

<a name="/summoner/:ids/league" />
### /summoner/:ids/league

Retrieves leagues mapped by summoner *id* for a given list of summoner `ids`.

The `ids` passed must be comma-separated. Maximum allowed at once is 10.

---------------------------------------

<a name="/summoner/:ids/league/entry" />
### /summoner/:ids/league/entry

Retrieves league entries mapped by summoner *id* for a given list of summoner `ids`.

The `ids` passed must be comma-separated. Maximum allowed at once is 10.

---------------------------------------

<a name="/summoner/:ids/masteries" />
### /summoner/:ids/masteries

Retrieves mastery pages mapped by summoner *id* for a given list of summoner `ids`.

The `ids` must be comma-separated. Maximum allowed at once is 40.

---------------------------------------

<a name="/summoner/:ids/name" />
### /summoner/:ids/name

Retrieves summmoner names mapped by summoner *id* for a given list of summoner `ids`.

The `ids` must be comma-separated. Maximum allowed at once is 40.

---------------------------------------

<a name="/summoner/:ids/runes" />
### /summoner/:ids/runes

Retrieves rune pages mapped by summoner *id* for a given list of summoner `ids`.

The `ids` must be comma-separated. Maximum allowed at once is 40.

---------------------------------------

<a name="/summoner/:ids/teams" />
### /summoner/:ids/teams

Retrieves teams mapped by summoner *id* for a given list of summoner `ids`.

The `ids` must be comma-separated. Maximum allowed at once is 10.

---------------------------------------

<a name="/summoner/by-name/:names" />
### /summoner/by-name/:names

Retrieves summoner objects mapped by **standardized summoner name** for a given list of summoner `names`.

A **standardized summoner name** is the summoner name in all lower case and with spaces removed. The API will also accept **standardized summoner names** as valid parameters, although they are not required.

The `names` or `standardized summoner names` passed must be comma-separated. Maximum allowed at once is 40.

---------------------------------------

<a name="/team/:ids" />
### /team/:ids

Retrieves teams mapped by team *id* for a given list of team `ids`.

The `ids` passed must be comma-separated. Maximum allowed at once is 10.

---------------------------------------

<a name="/team/:ids/league" />
### /team/:ids/league

Retrieves leagues mapped by team *id* for a given list of team `ids`.

The `ids` passed must be comma-separated. Maximum allowed at once is 10.

---------------------------------------

<a name="/team/:ids/league/entry" />
### /team/:ids/league/entry

Retrieves league entries mapped by team *id* for a given list of team `ids`.

The `ids` passed must be comma-separated. Maximum allowed at once is 10.
