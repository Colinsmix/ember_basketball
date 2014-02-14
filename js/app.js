App = Ember.Application.create();

App.Router.map(function() {
  this.resource('nbas', function(){
    this.resource('nbateams', function() {
      this.resource('nbateam', { path: '/:team_id' });
    });
    this.resource('nbaplayers', function() {
      this.resource('nbaplayer', { path: '/:player_id' });
    });
  });
  this.resource('mlbs', function(){
    this.resource('mlbteams', function() {
      this.resource('mlbteam', { path: '/:team_id' });
    });
    this.resource('mlbplayers', function() {
      this.resource('mlbplayer', { path: '/:player_id' });
    });
  });
  this.resource('nfls', function(){
    this.resource('nflteams', function() {
      this.resource('nflteam', { path: '/:team_id' });
    });
    this.resource('nflplayers', function() {
      this.resource('nflplayer', { path: '/:player_id' });
    });
  });
});


// Routes
App.IndexRoute = Ember.Route.extend({

});

// NBA Routes
App.NbateamsRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/teams?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data.sports[0].leagues[0].teams;
    });
  }
});

App.NbateamRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/teams/' + params.team_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

App.NbaplayersRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/athletes?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data.sports[0].leagues[0].athletes;
    });
  }
});

App.NbaplayerRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/athletes/' + params.player_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

// MLB Routes
App.MlbteamsRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/baseball/mlb/teams?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data.sports[0].leagues[0].teams;
    });
  }
});

App.MlbteamRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/baseball/mlb/teams/' + params.team_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

App.MlbplayersRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/baseball/mlb/athletes?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data.sports[0].leagues[0].athletes;
    });
  }
});

App.MlbplayerRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/baseball/mlb/athletes/' + params.player_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

// NFL Routes
App.NflteamsRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/football/nfl/teams?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data.sports[0].leagues[0].teams;
    });
  }
});

App.NflteamRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/football/nfl/teams/' + params.team_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

App.NflplayersRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/football/nfl/athletes?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data.sports[0].leagues[0].athletes;
    });
  }
});

App.NflplayerRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/football/nfl/athletes/' + params.player_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

// NBA Controllers
App.NbateamsController = Ember.ArrayController.extend({
  sortProperties: ['location']
});

App.NbaplayersController = Ember.ArrayController.extend({
  sortProperties: ['lastName']
});

// MLB Controllers
App.MlbteamsController = Ember.ArrayController.extend({
  sortProperties: ['location']
});

App.MlbplayersController = Ember.ArrayController.extend({
  sortProperties: ['lastName']
});

// NFL Controllers
App.NflteamsController = Ember.ArrayController.extend({
  sortProperties: ['location']
});

App.NflplayersController = Ember.ArrayController.extend({
  sortProperties: ['lastName']
});
