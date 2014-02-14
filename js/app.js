App = Ember.Application.create();

App.Router.map(function() {
  this.resource('teams', function() {
    this.resource('team', { path: '/:team_id' });
  });
  this.resource('players', function() {
    this.resource('player', { path: '/:player_id' });
  });
});


// Routes
App.IndexRoute = Ember.Route.extend({

});

App.TeamsRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/teams?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

App.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/teams/' + params.team_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

App.PlayersRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/athletes?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});

App.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.espn.com/v1/sports/basketball/nba/athletes/' + params.player_id + '?apikey=dekwsxn4ux9feuvbw5keun2e').then(function(data) {
      return data;
    });
  }
});
