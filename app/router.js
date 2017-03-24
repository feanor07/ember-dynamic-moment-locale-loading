import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ru');
  this.route('es');
  this.route('en');
  this.route('fr');
  this.route('tr');
});

export default Router;
