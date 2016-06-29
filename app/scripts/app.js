'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
/*angular
  .module('projectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

angular.module('projectApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/photos', {
        templateUrl:'views/photos.html',
        controller: 'photosController'
      })
      .when('/projects', {
        templateUrl:'views/projects.html',
        controller: 'ProjectsController'
      })
      .when('/videos', {
        templateUrl:'views/videos.html',
        controller: 'VideosController'
      })
      .otherwise({
        templateUrl:'views/main.html',
        controller: 'HeaderTextController'
      });
  })
;



/*$('#fullpage').fullpage({
  //Navigation
  menu: false,
  lockAnchors: false,
  anchors:['firstPage', 'secondPage'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor : false,
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  //events
  onLeave: function(index, nextIndex, direction){
  },
  afterLoad: function(anchorLink, index){
    if (index === 2)
    {
      $('#menuHeader').css("background-color","#2d2c33");
    }
    if (index === 1)
    {
      $('#menuHeader').css("background-color","transparent");
    }

  },
  afterRender: function(){},
  afterResize: function(){},
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
});*/


