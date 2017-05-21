# lol-riot-api
A configurable League of Legends API. It uses the official [developer's API](https://developer.riotgames.com/) offered by [Riot Games](https://www.riotgames.com), so you will need an API key to be able to use it. [Here](https://developer.riotgames.com/api/methods)'s the complete documentation of their API. In the documentation below there will be references to the official methods used for each route.

## Download
lol-riot-api is installable via:

- [GitHub](https://github.com/Pupix/lol-riot-api) `git clone https://github.com/Pupix/lol-riot-api.git`
- [npm](https://www.npmjs.com/): `npm install lol-riot-api`

## Getting started
To start the API server run the following command:
```js
node run start
```
You will have to do a **one time** configuration to be able to use the API. At the prompt you will be asked for the default API `key` to be used for the calls, the `port` on which the API will run, the default `region` to be used for the API calls and the caching strategy.

### Resetting the configuration
You can change the provided API configuration at any time, simply by running:
```js
npm run resetconfig
```

## Documentation

The API's calls are mapped to various API methods from [Riot Game's documentation](https://developer.riotgames.com/api/methods). All URLs can accept `apiKey` and `region` as **query string parameters**, if you want to do calls for a different **region** or with a **different key** than the specified defaults.

### Routes

* [`/account/:accountId`](#/account/:accountId)
* [`/account/:accountId/matchlist`](#/account/:accountId/matchlist)
* [`/account/:accountId/matchlist/recent`](#/account/:accountId/matchlist/recent)
* [`/champions`](#/champions)
* [`/champions/:id`](#/champions/:id)
* [`/featured-games`](#/featured-games)
* [`/leagues/challenger`](#/leagues/challenger)
* [`/leagues/master`](#/leagues/master)
* [`/matches/:id`](#/matches/:id)
* [`/matches/:matchId/timeline`](#/matches/:matchId/timeline)
* [`/static/champions`](#/static/champions)
* [`/static/champions/:id`](#/static/champions/:id)
* [`/static/items`](#/static/items)
* [`/static/items/:id`](#/static/items/:id)
* [`/static/languages`](#/static/languages)
* [`/static/language-strings`](#/static/language-strings)
* [`/static/maps`](#/static/maps)
* [`/static/masteries`](#/static/masteries)
* [`/static/masteries/:id`](#/static/masteries/:id)
* [`/static/profile-icons`](#/static/profile-icons)
* [`/static/realms`](#/static/realms)
* [`/static/runes`](#/static/runes)
* [`/static/runes/:id`](#/static/runes/:id)
* [`/static/spells`](#/static/spells)
* [`/static/spells/:id`](#/static/spells/:id)
* [`/static/versions`](#/static/versions)
* [`/status`](#/status)
* [`/summoner/:summonerId/activeGame`](#/summoner/:summonerId/activeGame)
* [`/summoner/:summonerId/championMastery`](#/summoner/:summonerId/championMastery)
* [`/summoner/:summonerId/championMastery/score`](#/summoner/:summonerId/championMastery/score)
* [`/summoner/:summonerId/championMastery/:championId`](#/summoner/:summonerId/championMastery/:championId)
* [`/summoner`](#/summoner)
* [`/summoner/:id`](#/summoner/:id)
* [`/summoner/:summonerId/leagues`](#/summoner/:summonerId/leagues)
* [`/summoner/:summonerId/leagues/positions`](#/summoner/:summonerId/leagues/positions)
* [`/summoner/:summonerId/masteries`](#/summoner/:summonerId/masteries)
* [`/summoner/:summonerId/runes`](#/summoner/:summonerId/runes)
* [`/clear-cache/account/:accountId`](#/clear-cache/account/:accountId)
* [`/clear-cache/summoner/:summonerId`](#/clear-cache/summoner/:summonerId)
---------------------------------------

<a name="/account/:accountId" />

### /account/:accountId

Retrieves a summoner by `accountId`.

---------------------------------------

<a name="/account/:accountId/matchlist" />

### /account/:accountId/matchlist

Retrieves matchlist by `accountId`.

**Querystring parameters**

* `season` - Comma-separated list of season ids to use for filtering matchlist.

* `queue` - Comma-separated list of ranked queue types to use for filtering matchlist.
  * *Possible values:* **RANKED_SOLO_5x5 | RANKED_FLEX_SR | RANKED_FLEX_TT**.

* `beginIndex` - The begin index to use for fetching games.
  * *Possible values:* **Any positive natural number**.

* `beginTime` - The begin time to use for fetching games specified as epoch milliseconds.
  * *Possible values:* **Any positive natural number**.

* `endTime` - The end time to use for fetching games specified as epoch milliseconds.
  * *Possible values:* **Any positive natural number**.

* `endIndex` - The end index to use for fetching games.
  * *Possible values:* **Any positive natural number**.

---------------------------------------

<a name="/account/:accountId/matchlist/recent" />

### /account/:accountId/matchlist/recent

Retrieves matchlist for last 20 matches played on given `accountId`.

---------------------------------------

<a name="/champions" />

### /champions

Retrieves the status of all champions.

**Querystring parameters**

* `freeToPlay` - Filter param to revireve only free to play champions.
    * *Possible values:* **Anything**

---------------------------------------

<a name="/champions/:id" />

### /champions/:id

Retrieves the status of given champion `id`.

---------------------------------------

<a name="/featured-games" />

### /featured-games

Retrieves a list of featured games.

---------------------------------------

<a name="/leagues/challenger" />

### /leagues/challenger

Retrieves the challenger tier leagues

**Querystring parameters**

* `queue` - The queue type.
  * Possible values: *"RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT"*

---------------------------------------

<a name="/leagues/master" />

### /leagues/master

Retrieves the master tier leagues

**Querystring parameters**

* `queue` - The queue type.
  * Possible values: *"RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT"*

---------------------------------------

<a name="/matches/:id" />

### /matches/:id

Retrieves a match by its `id`.

---------------------------------------

<a name="/matches/:matchId/timeline" />

### /matches/:matchId/timeline

Retrieves a match's timeline by `matchId`.

---------------------------------------

<a name="/static/champions" />

### /static/champions

Retrieves champion list.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `dataById` - If specified as true, the returned data map will use the champions' id as the keys. If not specified or specified as false, the returned data map will use the champions' keys instead.

* `champData` - Tags to return additional data. Only id, key, name, and title are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "allytips" | "altimages" | "blurb" | "enemytips" | "image" | "info" | "lore" | "partype" | "passive" | "recommended" | "skins" | "spells" | "stats" | "tags"*

---------------------------------------

<a name="/static/champions/:id" />

### /static/champions/:id

Retrieves a champion by its id.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `champData` - Tags to return additional data. Only id, key, name, and title are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "allytips" | "altimages" | "blurb" | "enemytips" | "image" | "info" | "lore" | "partype" | "passive" | "recommended" | "skins" | "spells" | "stats" | "tags"*

---------------------------------------

<a name="/static/items" />

### /static/items

Retrieves a list of all items in the game.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `itemData` - Tags to return additional data. Only id, name, plaintext, group, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "colloq" | "consumeOnFull" | "consumed" | "depth" | "effect" | "from" | "gold" | "hideFromAll" | "image" | "inStore" | "into" | "maps" | "requiredChampion" | "sanitizedDescription" | "specialRecipe" | "stacks" | "stats" | "tags"*

---------------------------------------

<a name="/static/items/:id" />

### /static/items/:id

Retrieves an item by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `itemData` - Tags to return additional data. Only id, name, plaintext, group, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "colloq" | "consumeOnFull" | "consumed" | "depth" | "effect" | "from" | "gold" | "hideFromAll" | "image" | "inStore" | "into" | "maps" | "requiredChampion" | "sanitizedDescription" | "specialRecipe" | "stacks" | "stats" | "tags"*

---------------------------------------

<a name="/static/languages" />

### /static/languages

Retrieves supported languages data.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

---------------------------------------

<a name="/static/language-strings" />

### /static/language-strings

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

* `masteryData` - Tags to return additional data. Only id, name, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'
  * Possible values: *"all" | "image" | "masteryTree" | "prereq" | "ranks" | "sanitizeDescription"*

---------------------------------------

<a name="/static/masteries/:id" />

### /static/masteries/:id

Retrieves a mastery item by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `masteryData` - Tags to return additional data. Only id, name, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'
  * Possible values: *"all" | "image" | "masteryTree" | "prereq" | "ranks" | "sanitizeDescription"*

---------------------------------------

<a name="/static/profile-icons" />

### /static/profile-icons

Retrieves profile icons data.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

---------------------------------------

<a name="/static/realms" />

### /static/realms

Retrieves realm data.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

---------------------------------------

<a name="/static/runes" />

### /static/runes

Retrieves all runes in game.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `runeData` - Tags to return additional data. Only id, name, rune, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "colloq" | "consumeOnFull" | "consumed" | "depth" | "from" | "gold" | "hideFromAll" | "image" | "inStore" | "into" | "maps" | "requiredChampion" | "sanitizedDescription" | "specialRecipe" | "stacks" | "stats" | "tags"*

---------------------------------------

<a name="/static/runes/:id" />

### /static/runes/:id

Retrieves a rune by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `runeData` - Tags to return additional data. Only id, name, rune, and description are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "colloq" | "consumeOnFull" | "consumed" | "depth" | "from" | "gold" | "hideFromAll" | "image" | "inStore" | "into" | "maps" | "requiredChampion" | "sanitizedDescription" | "specialRecipe" | "stacks" | "stats" | "tags"*

---------------------------------------

<a name="/static/spells" />

### /static/spells

Retrieves all summoner spells in game.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `dataById` - If specified, the returned data map will use the spells' id as the keys. If not specified or specified as false, the returned data map will use the spells' keys instead.
    * *Possible values:* **Anything**

* `spellData` - Tags to return additional data. Only type, version, data, id, key, name, description, and summonerLevel are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
  * Possible values: *"all" | "cooldown" | "cooldownBurn" | "cost" | "costBurn" | "costType" | "effect" | "effectBurn" | "image" | "key" | "leveltip" | "maxrank" | "modes" | "range" | "rangeBurn" | "resource" | "sanitizedDescription" | "sanitizedTooltip" | "tooltip" | "vars"*


---------------------------------------

<a name="/static/spells/:id" />

### /static/spells/:id

Retrieves a summoner spell by `id`.

**Querystring parameters**

* `locale` - Locale code for returned data (e.g., en_US, es_ES). If not specified, the default locale for the region is used.

* `version` - Data dragon version for returned data. If not specified, the latest version for the region is used. List of valid versions can be obtained from the /versions endpoint.

* `spellData` - Tags to return additional data. Only type, version, data, id, key, name, description, and summonerLevel are returned by default if this parameter isn't specified. To return all additional data, use the tag 'all'.
* Possible values: *"all" | "cooldown" | "cooldownBurn" | "cost" | "costBurn" | "costType" | "effect" | "effectBurn" | "image" | "key" | "leveltip" | "maxrank" | "modes" | "range" | "rangeBurn" | "resource" | "sanitizedDescription" | "sanitizedTooltip" | "tooltip" | "vars"*

---------------------------------------

<a name="/static/versions" />

### /static/versions

Retrieves version data.

---------------------------------------

<a name="/status" />

### /status

Retrieves the list of available regions.

---------------------------------------

<a name="/summoner" />

### /summoner

Retrieves a summoner  based on `name`, `id` or `accountId`.

**Querystring parameters**

* `name` - The name of the summoner

* `id` - The Id  of the summoner

* `accountId` - The account id  of the summoner

---------------------------------------

<a name="/summoner/:id" />

### /summoner/:id

Retrieves a summoner by `id`.

---------------------------------------

<a name="/summoner/:summonerId/activeGame" />

### /summoner/:summonerId/currentGame

Retrieves active game information for the given `summonerId`.

---------------------------------------

<a name="/summoner/:summonerId/championMastery" />

### /summoner/:summonerId/championMastery

Retrieves all champion mastery entries by `summonerId`.

---------------------------------------

<a name="/summoner/:summonerId/championMastery/:championId" />

### /summoner/:summonerId/championMastery/:championId

Retrieves a champion mastery entry by `summonerId` and `championId`.

---------------------------------------

<a name="/summoner/:summonerId/championMastery/score" />

### /summoner/:summonerId/championMastery/score

Retrieves the total champion mastery score by `summonerId`.

---------------------------------------

<a name="/summoner/:summonerId/league" />

### /summoner/:summonerId/leagues

Retrieves leagues in all queues for a given `summonerId`.

---------------------------------------

<a name="/summoner/:summonerId/league/entry" />

### /summoner/:summonerId/leagues/positions

Retrieves league positions in all queues for a given `summonerId`.

---------------------------------------

<a name="/summoner/:summonerId/masteries" />

### /summoner/:summonerId/masteries

Get mastery pages for a given `summonerId`.

---------------------------------------

<a name="/summoner/:summonerId/runes" />

### /summoner/:summonerId/runes

Get rune pages for a given `summonerId`.

---------------------------------------

<a name="/clear-cache/account/:accountId" />

### /clear-cache/account/:accountId

Clears the cache for a given `accountId`.

---------------------------------------

<a name="/clear-cache/summoner/:summonerId" />

### /clear-cache/summoner/:summonerId

Clears the cache for a given `summonerId`.

---------------------------------------
