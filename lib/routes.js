/**
 * Map of routes and their corresponding lol-riot-api-module handlers
 */
module.exports = {
    '/account/:accountId': {
        method: 'getSummoner',
        cache: '1 day'
    },

    '/account/:accountId/matchlist': {
        method: 'getAccountMatchlist',
        cache: '1 day'
    },

    '/account/:accountId/matchlist/recent': {
        method: 'getAccountRecentMatchlist',
        cache: '1 day'
    },

    '/champions': {
        method: 'getChampionsStatus',
        cache: '1 day'
    },

    '/champions/:id': {
        method: 'getChampionsStatus',
        cache: '1 day'
    },

    '/featured-games': {
        method: 'getFeaturedGames',
        cache: 0
    },

    '/leagues/challenger': {
        method: 'getChallengerLeague',
        cache: '12 hours'
    },

    '/leagues/master': {
        method: 'getMasterLeague',
        cache: '12 hours'
    },

    '/matches/:id': {
        method: 'getMatch',
        cache: '12 hours'
    },

    '/matches/:matchId/timeline': {
        method: 'getMatchTimeline',
        cache: '12 hours'
    },

    '/static/champions': {
        method: 'getChampionsStaticData',
        cache: '12 hours'
    },

    '/static/champions/:id': {
        method: 'getChampionsStaticData',
        cache: '12 hours'
    },

    '/static/items': {
        method: 'getItemsStaticData',
        cache: '12 hours'
    },

    '/static/items/:id': {
        method: 'getItemsStaticData',
        cache: '12 hours'
    },
    '/static/languages': {
        method: 'getLanguagesStaticData',
        cache: '12 hours'
    },

    '/static/language-strings': {
        method: 'getLanguageStringsStaticData',
        cache: '12 hours'
    },

    '/static/maps': {
        method: 'getMapsStaticData',
        cache: '12 hours'
    },

    '/static/masteries': {
        method: 'getMasteriesStaticData',
        cache: '12 hours'
    },

    '/static/masteries/:id': {
        method: 'getMasteriesStaticData',
        cache: '12 hours'
    },

    '/static/profile-icons': {
        method: 'getProfileIconsStaticData',
        cache: '12 hours'
    },

    '/static/realms': {
        method: 'getRealmsStaticData',
        cache: '12 hours'
    },

    '/static/runes': {
        method: 'getRunesStaticData',
        cache: '12 hours'
    },

    '/static/runes/:id': {
        method: 'getRunesStaticData',
        cache: '12 hours'
    },
    '/static/spells': {
        method: 'getSummonerSpellsStaticData',
        cache: '12 hours'
    },

    '/static/spells/:id': {
        method: 'getSummonerSpellsStaticData',
        cache: '12 hours'
    },

    '/static/versions': {
        method: 'getVersionsStaticData',
        cache: '12 hours'
    },

    '/status': {
        method: 'getStatus',
        cache: 0
    },

    '/summoner/:summonerId/activeGame': {
        method: 'getSummonerActiveGame',
        cache: 0
    },

    '/summoner/:summonerId/championMastery': {
        method: 'getSummonerChampionMastery',
        cache: '1 day'
    },

    '/summoner/:summonerId/championMastery/score': {
        method: 'getSummonerChampionMasteryScore',
        cache: '1 day'
    },

    '/summoner/:summonerId/championMastery/:championId': {
        method: 'getChampionMastery',
        cache: '1 day'
    },

    '/summoner': {
        method: 'getSummoner',
        cache: '1 day'
    },

    '/summoner/:id': {
        method: 'getSummoner',
        cache: '1 day'
    },

    '/summoner/:summonerId/leagues': {
        method: 'getSummonerLeagues',
        cache: '1 day'
    },

    '/summoner/:summonerId/leagues/positions': {
        method: 'getSummonerLeaguePositions',
        cache: '1 day'
    },

    '/summoner/:summonerId/masteries': {
        method: 'getSummonerMasteries',
        cache: '1 day'
    },

    '/summoner/:summonerId/runes': {
        method: 'getSummonerRunes',
        cache: '1 day'
    }
};
