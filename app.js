/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
  "use strict";

  // Vars
  var prompt = require('prompt'),
  fs = require('fs'),
  exp = require('express'),
  cors = require('cors'),
  apicache = require('apicache'),
  cache = apicache.middleware,
  RateLimit = require('express-rate-limit'),
  helmet = require('helmet'),
  XP  = require('expandjs'),
  API = require('lol-riot-api-module'),
  app = exp(),
  api,

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
    '/summoner/:id/matchList': 'getMatchListBySummonerId',
    '/summoner/:id/rankedStats': 'getRankedStatsBySummonerId',
    '/summoner/:id/recentGames': 'getRecentGamesBySummonerId',
    '/summoner/:id/statsSummary': 'getStatsSummaryBySummonerId',
    '/summoner/:id/championMastery': 'getChampionMastery',
    '/summoner/:id/championMastery/score': 'getChampionMasteryScore',
    '/summoner/:id/championMastery/top': 'getChampionMasteryTop',
    '/summoner/:id/championMastery/:champId': 'getChampionMasteryById',
    '/summoner/:ids': 'getSummonersByIds',
    '/summoner/:ids/league': 'getLeagueBySummonerIds',
    '/summoner/:ids/league/entry': 'getLeagueEntryBySummonerIds',
    '/summoner/:ids/masteries': 'getMasteriesBySummonerIds',
    '/summoner/:ids/name': 'getSummonerNamesByIds',
    '/summoner/:ids/runes': 'getRunesBySummonerIds',
    '/summoner/:ids/teams': 'getTeamsBySummonerIds',
    '/summoner/by-name/:names': 'getSummonersByNames',
    '/team/:ids': 'getTeamsByIds',
    '/team/:ids/league': 'getLeagueByTeamIds',
    '/team/:ids/league/entry': 'getLeagueEntryByTeamIds'
  },

  // Handler for the request received from the client
  requestHandler = function (req, res) {
    // Create cache groups
    if ((req.url.startsWith('/summoner') || req.url.startsWith('/team')) && !req.url.endsWith('/currentGame')){
      if(req.params.ids != null)
        req.apicacheGroup = req.params.ids;
      else if(req.params.id != null)
        req.apicacheGroup = req.params.id;
    }

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

  // Main function of the API
  function init() {

    require('dotenv').load();
    app.use(cors()); // use CORS
    app.use(helmet()); // Secure the API with helmet. Readmore: https://expressjs.com/en/advanced/best-practice-security.html
    app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

    // Ratelimiter
    var limiter = new RateLimit({
      windowMs: 10*60*1000, // 10 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    });
    //  apply to all requests
    app.use(limiter);

    api = new API({
      key: process.env.KEY || null,
      region: process.env.REGION || null
    });

    app.port = process.env.PORT || 3001;

    // Default route
    app.get('/', function (req, res) {
      res.json({
        name: 'League of Legends API',
        version: "1.3.0",
        author: "Robert Manolea <manolea.robert@gmail.com> and Daniel Sogl <mytechde@outlook.com>",
        repository: "https://github.com/Pupix/lol-riot-api"
      });
    });

    // Chache Clear for update the data
    app.get('/summoner/:id/clear', function (req, res) {
      apicache.clear(req.params.id);
      res.status(404).json({message: "Cache cleared"});
    });

    // Dynamic API routes with cache
    XP.forEach(routes, function (func, route) {
      if(route.startsWith('/summoner') && route.endsWith('/currentGame')){
        app.get(route, requestHandler);
      }  else if (route.startsWith('/summoner') || route.startsWith('/team')) {
        app.get(route, cache('1 hour'), requestHandler);
      } else if (route.startsWith('/static') || route.startsWith('/champions') || route.startsWith('/leagues') || route.startsWith('/match')) {
        app.get(route, cache('12 hours'), requestHandler);
      } else {
        app.get(route, requestHandler);
      }
    });

    //Error Handling
    app.use(function (req, res) { res.status(404).json({error: 404, message: "Not Found"}); });
    app.use(function (req, res) { res.status(500).json({error: 500, message: 'Internal Server Error'}); });
    app.use(function (req, res) { res.status(429).json({error: 429, message: 'Too many requests'}); });

    // Listening
    app.listen(app.port, function () { console.log('League of Legends API is listening on port ' + app.port); });
  }

  // Check if environment variables are already present or not
  fs.stat('.env', function (err) {
    if (err) {
      prompt.start();
      prompt.message = '';
      prompt.delimiter = '';

      console.log('Config your API');

      prompt.get([
        {
          name: 'key',
          description: 'API key:'.white
        },
        {
          name: 'port',
          description: 'API port:'.white
        },
        {
          name: 'region',
          description: 'API region:'.white
        }
      ], function (err, res) {
        if (!err) {

          var text = '';
          text += 'KEY=' + res.key + '\n';
          text += 'PORT=' + res.port + '\n';
          text += 'REGION=' + res.region + '\n';

          fs.writeFile('.env', text, function (err) {
            if (!err) {
              console.log('Config file created successfully');
              init();
            } else {
              console.log('Couldn\'t create the config file');
            }
          });
        }
      });
    } else {
      init();
    }
  });

}());
