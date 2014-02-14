App = Ember.Application.create();

App.Router.map(function() {
  this.resource('teams', function() {
    this.resource('team', { path: '/:team_id' }, function() {
      this.resource('player', { path: '/:player_id' });
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
