Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function(){
    return Meteor.subscribe('menu');
  }
});

Router.route('/', {
  name: 'home',
  data: {
    menu: function(){
      return Menu.find();
    }
  }
});

Router.route('/indicadores', {name: 'indicadores'});
Router.route('/comparacion', {name: 'comparacion'});
