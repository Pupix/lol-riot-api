/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
    "use strict";

    //Load environment variables
    require('dotenv').load();

    // Vars
    var exp = require('express'),
        XP  = require('expandjs'),
        API = require('lol-riot-api'),
        app = exp(),
        api = new API({
            key: process.env.KEY || null,
            region: process.env.REGION || null
        }),

        // Route map for the relative API methods
        routes = {
            '/champions': 'getChampions',
            '/champions/:id': 'getChampionById',
            '/featuredGames': 'getFeaturedGames',
            '/leagues/challenger': 'getChallengerLeague',
            '/leagues/master': 'getMasterLeague',
            '/match/:id': 'getMatchById',
            '/static/champions': 'getChampionData',
            '/static/champions/:id': 'getChampionDataById',
            '/static/items': 'getItemData',
            '/static/items/:id': 'getItemDataById',
            '/static/languages': 'getLanguages',
            '/static/languageStrings': 'getLanguageStrings',
            '/static/maps': 'getMaps',
            '/static/masteries': 'getMasteryData',
            '/static/masteries/:id': 'getMasteryDataById',
            '/static/realms': 'getRealms',
            '/static/runes': 'getRuneData',
            '/static/runes/:id': 'getRuneDataById',
            '/static/spells': 'getSummonerSpellData',
            '/static/spells/:id': 'getSummonerSpellDataById',
            '/static/versions': 'getVersions',
            '/status': 'getStatus',
            '/status/:region': 'getStatusByRegion',
            '/summoner/:id/currentGame': 'getCurrentGameBySummonerId',
            '/summoner/:id/matchHistory': 'getMatchHistoryBySummonerId',
            '/summoner/:id/rankedStats': 'getRankedStatsBySummonerId',
            '/summoner/:id/recentGames': 'getRecentGamesBySummonerId',
            '/summoner/:id/statsSummary': 'getStatsSummaryBySummonerId',
            '/summoner/:ids/league': 'getLeagueBySummonerIds',
            '/summoner/:ids/league/entry': 'getLeagueEntryBySummonerIds',
            '/summoner/:ids/masteries': 'getMasteriesBySummonerIds',
            '/summoner/:ids/name': 'getSummonerNamesByIds',
            '/summoner/:ids/runes': 'getRunesBySummonerId',
            '/summoner/:ids/teams': 'getTeamsBySummonerIds',
            '/summoner/by-id/:ids': 'getSummonersByIds',
            '/summoner/by-name/:names': 'getSummonersByNames',
            '/team/:ids': 'getTeamsByIds',
            '/team/:ids/league': 'getLeagueByTeamIds',
            '/team/:ids/league/entry': 'getLeagueEntryByTeamIds'
        },

        // Handler for the request received from the client
        requestHandler = function (req, res) {
            var opt = XP.merge({}, req.query, req.params),
                method = routes[req.route.path],

                //RegExp used to identify methods that don't need an `opt` as first parameter
                noOptRegExp = /^\/status\/?$/,
                noOpt = !!req.route.path.match(noOptRegExp),
                cb = function (err, data) {
                    res.json(err || data);
                };

            opt = noOpt ? cb : opt;
            cb  = noOpt ? null : cb;

            api[method](opt, cb);
        };

    app.port = process.env.PORT || 3001;

    // Default route
    app.get('/', function (req, res) {
        res.json({
            name: 'League of Legends API',
            version: "1.0.0",
            author: "Robert Manolea <manolea.robert@gmail.com>",
            repository: "https://github.com/Pupix/lol-riot-api"
        });
    });

    // Dynamic API routes
    XP.forEach(routes, function (func, route) {
        app.get(route, requestHandler);
    });

    //Error Handling
    app.use(function (req, res) { res.status(404).json({error: 404, message: "Not Found"}); });
    app.use(function (req, res) { res.status(500).json({error: 500, message: 'Internal Server Error'}); });

    // Listening
    app.listen(app.port, function () { console.log('League of Legends API is listening on port ' + app.port); });

}());
