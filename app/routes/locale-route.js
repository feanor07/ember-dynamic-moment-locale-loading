import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model() {
    let localeToLoad = this.getLocaleToLoad();
    let alreadyLoadedLocales = moment.locales();
    let isLocaleAlreadyLoaded = alreadyLoadedLocales.filter((item)=> {
      return item === localeToLoad;
    }).length > 0;

    if (isLocaleAlreadyLoaded) {
      console.log(`locale ${localeToLoad} already loaded, no need to make remote call; just switch and return short 
        months immediately`);
      moment.locale(localeToLoad);
      return moment.monthsShort();
    } else {
      console.log(`locale ${localeToLoad} will be loaded from the server; hence we need to return a promise; and 
        resolve short months after data arrives!`);
      return Ember.$.getScript(`/assets/moment-locales/${localeToLoad}.js`).then(() => {
        return moment.monthsShort();
      });
    }
  },

  getLocaleToLoad() {
    throw 'Routes extending this one must provide a locale name to load!';
  }
});
