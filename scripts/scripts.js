"use strict";angular.module("yoPortfolio",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("divanstudio",{url:"/",controller:"DivanStudioCtrl",templateUrl:"views/divanstudio.html"}).state("dmytro",{url:"/dmytro",controller:"DmytroCtrl",templateUrl:"views/dmytro.html"}).state("ivan",{url:"/ivan",controller:"IvanCtrl",templateUrl:"views/ivan.html"}).state("project",{url:"/p/:id",controller:"ProjectCtrl",templateUrl:"views/project.html"}),b.otherwise("/")}]).run(["$rootScope","$state","projects",function(a,b,c){a.$on("$stateChangeStart",function(a,d,e,f,g){"project"===d.name&&null===c.getProjectByPath(e.id)&&(a.preventDefault(),f["abstract"]?b.go("divansoft"):b.go(f.name,g))}),a.$on("$stateChangeSuccess",function(){$(window).scrollTop(0)})}]),angular.module("yoPortfolio").controller("DivanStudioCtrl",["$rootScope","$scope","projects",function(a,b,c){a.pageTitle="divanStudio",b.projects=c.getProjectsByAuthor("divanStudio")}]),angular.module("yoPortfolio").controller("DmytroCtrl",["$rootScope","$scope","projects",function(a,b,c){a.pageTitle="Dmytro Ovchar",b.projects=c.getProjectsByAuthor("dmytro")}]),angular.module("yoPortfolio").controller("IvanCtrl",["$rootScope","$scope","projects",function(a,b,c){a.pageTitle="Ivan Moskalenko",b.projects=c.getProjectsByAuthor("ivan")}]),angular.module("yoPortfolio").controller("ProjectCtrl",["$rootScope","$scope","$stateParams","projects",function(a,b,c,d){b.project=d.getProjectByPath(c.id),a.pageTitle=b.project.title}]),angular.module("yoPortfolio").factory("projects",function(){var a=[{id:0,title:"HeliCrane",type:"Flash game",path:"helicrane",view:"helicrane.html",iconClass:"icon-game",authors:["divanStudio","dmytro","ivan"]},{id:1,title:"HeliCrane 2: Bomber",type:"Flash game",path:"helibomber",view:"helibomber.html",iconClass:"icon-game",authors:["divanStudio","dmytro","ivan"]},{id:2,title:"Ballistica",type:"Flash game",path:"ballistica",view:"ballistica.html",iconClass:"icon-game",authors:["divanStudio","dmytro","ivan"]},{id:3,title:"VortexViewer",type:"Web app",path:"vortexviewer",view:"vortexviewer.html",iconClass:"icon-web",authors:["divanStudio","dmytro"]},{id:4,title:"HeliRunner",type:"Mobile app",path:"helirunner",view:"helirunner.html",iconClass:"icon-mobile",authors:["divanStudio","ivan"]},{id:5,title:"GAZ-13",type:"3D model",path:"gaz13",view:"gaz13.html",iconClass:"icon-design",authors:["divanStudio","ivan"]}];return{getProjectByPath:function(b){for(var c=null,d=0,e=a.length;e>d;++d)a[d].path===b&&(c=a[d]);return c},getProjectsByAuthor:function(b){for(var c=[],d=0,e=a.length;e>d;++d)-1!==a[d].authors.indexOf(b)&&c.push(a[d]);return c}}}),angular.module("yoPortfolio").directive("portfolio",function(){return{templateUrl:"views/portfolio.html",restrict:"C",replace:!0,scope:{projects:"="}}}),function(a,b){a("body").on("click",".navbar a[href^=#]",function(b){var c=a(".navbar").outerHeight(),d=a(this).attr("href"),e=a("html, body"),f=a(".navbar-toggle"),g=a(d),h=0;b.preventDefault(),g.length>0&&(h=g.offset().top-c),e.stop().animate({scrollTop:h},600),"true"===f.attr("aria-expanded")&&f.trigger("click.bs.collapse.data-api")})}(jQuery),angular.module("yoPortfolio").run(["$templateCache",function(a){a.put("views/ballistica.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <a class="navbar-brand" href="#page-top">Ballistica</a> </div> </div> </nav> <!-- Header --> <header class="project-header"> <div class="container"> <div class="row"> <div class="row-md-height"> <div class="col-md-5 col-md-height col-md-middle text-center"> <h1 class="header-title">Ballistica</h1> <p class="header-desc">Flash game</p> </div> <!-- Images --> <div id="images" class="col-md-7 col-md-height col-md-bottom"> <div id="carousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#carousel" data-slide-to="0" class="active"></li> <li data-target="#carousel" data-slide-to="1"></li> <li data-target="#carousel" data-slide-to="2"></li> <li data-target="#carousel" data-slide-to="3"></li> <li data-target="#carousel" data-slide-to="4"></li> <li data-target="#carousel" data-slide-to="5"></li> <li data-target="#carousel" data-slide-to="6"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="/images/screens_ballistica/ballistica_1.png" alt="Ballistica"> </div> <div class="item"> <img src="/images/screens_ballistica/ballistica_2.png" alt="Ballistica"> </div> <div class="item"> <img src="/images/screens_ballistica/ballistica_3.png" alt="Ballistica"> </div> <div class="item"> <img src="/images/screens_ballistica/ballistica_4.png" alt="Ballistica"> </div> <div class="item"> <img src="/images/screens_ballistica/ballistica_5.png" alt="Ballistica"> </div> <div class="item"> <img src="/images/screens_ballistica/ballistica_6.png" alt="Ballistica"> </div> <div class="item"> <img src="/images/screens_ballistica/ballistica_7.png" alt="Ballistica"> </div> </div> <!-- Controls --> <span class="left carousel-control" data-target="#carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </span> <span class="right carousel-control" data-target="#carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </span> </div> </div> </div> </div> </div> </header> <!-- Description --> <section id="description"> <div class="container"> <div class="page-header"> <h1>Description</h1> </div> <div class="row"> <div class="col-md-12"> <p><strong>Ballistica</strong> it\'s popular Flash game which developed in tanks battle simulation genre. Next tools such as Adobe Flash, FlashDevelop, ActionScript 3.0 were used for creation it. One of the most advantages is realistic trajectory of bullet flight and possibility of guidance system fine adjustment. The mathematical apparatus implements artificial intelligence of aiming which takes in account wind correction. Beautiful explosions are destroying mountain game landscapes. There is two available game modes: with human or PC competitor. In one year the game gained more than 1 800 000 views and entered to the top of most played games on the primary sponsor site <a href="flashgames247.com">flashgames247.com</a></p> <dl class="dl-horizontal"> <dt>Technologies</dt> <dd>Adobe Flash, ActionScript 3, Box2D, Greensock TweenLite.<br> </dd> <dt>Design</dt> <dd><a ui-sref="ivan">Ivan Moskalenko</a></dd> <dt>Code</dt> <dd><a ui-sref="dmytro">Dmytro Ovchar</a></dd> </dl> </div> </div> </div> </section> <!-- Promo --> <section id="promo"> <div class="container"> <div class="page-header"> <h1>Promo video</h1> </div> <div class="row"> <div class="col-xs-12 col-md-8 col-md-offset-2 video"> <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/B7dzMbMg9uI"></iframe> </div> </div> </div> </div> </section>'),a.put("views/divanstudio.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#page-top">divanStudio</a> </div> <div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav navbar-right"> <li class="hidden"> <a href="#page-top"></a> </li> <li class="page-scroll"> <a href="#portfolio">Portfolio</a> </li> <li class="page-scroll"> <a href="#about">About</a> </li> <li class="page-scroll"> <a href="#contact">Contact</a> </li> </ul> </div> <!--/.nav-collapse --> </div> </nav> <!-- Header --> <header> <div class="container text-center"> <h1 class="header-title">divanStudio</h1> <p class="header-desc">We make amazing flash games, web, desktop and mobile apps!</p> </div> </header> <!-- Portfolio --> <section class="portfolio" data-projects="projects"></section> <!-- About --> <section id="about"> <div class="container"> <div class="page-header"> <h1>About us</h1> </div> <div class="row"> <div class="col-sm-6 col-md-6"> <a ui-sref="dmytro" class="about-item text-center"> <img class="img-circle about-item-img" src="/images/dmytro.png" alt="Dmytro Ovchar"> <div> <h3 class="about-item-caption">Dmytro Ovchar</h3> <p class="about-item-desc">Developer</p> </div> </a> </div> <div class="col-sm-6 col-md-6"> <a ui-sref="ivan" class="about-item text-center"> <img class="img-circle about-item-img" src="/images/ivan.jpg" alt="Ivan Moskalenko"> <div> <h3 class="about-item-caption">Ivan Moskalenko</h3> <p class="about-item-desc">Developer, Designer</p> </div> </a> </div> </div> </div> </section> <!-- Contact --> <section id="contact"> <div class="container"> <div class="page-header"> <h1>Contact</h1> </div> <div class="row"> <div class="col-md-6"> <dl class="dl-horizontal"> <dt class="contact-name">Email</dt> <dd class="contact-item">ovchar.dmitriy@gmail.com</dd> <dd class="contact-item">ivan.moskalenko87@gmail.com</dd> </dl> </div> <div class="col-md-6"> <dl class="dl-horizontal"> <dt class="contact-name">Phone</dt> <dd class="contact-item">+380 66 335 0134</dd> <dd class="contact-item">+380 66 958 5580</dd> </dl> </div> </div> </div> </section>'),a.put("views/dmytro.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#page-top">Dmytro Ovchar</a> </div> <div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav navbar-right"> <li class="hidden"> <a href="#page-top"></a> </li> <li class="page-scroll"> <a href="#portfolio">Portfolio</a> </li> <li class="page-scroll"> <a href="#skills">Skills</a> </li> <li class="page-scroll"> <a href="#contact">Contact</a> </li> </ul> </div> <!--/.nav-collapse --> </div> </nav> <!-- Header --> <header> <div class="container text-center"> <h1 class="header-title">Dmytro Ovchar</h1> <p class="header-desc">Web / game developer</p> </div> </header> <!-- Portfolio --> <section class="portfolio" data-projects="projects"></section> <!-- Skills --> <section id="skills"> <div class="container"> <div class="page-header"> <h1>Skills</h1> </div> <div class="row"> <div class="col-md-12"> <dl class="dl-horizontal skill-item"> <dt class="skill-item-caption">JavaScript</dt> <dd class="skill-item-desc">jQuery, jQuery UI, Backbone.js, AngularJS, Three.js, QUnit+Sinon.js, Jasmine</dd> <dt class="skill-item-caption">HTML5, CSS3</dt> <dd class="skill-item-desc">Canvas API, WebGL, Bootstrap, Less</dd> <dt class="skill-item-caption">PHP</dt> <dd class="skill-item-desc">Yii2, Laravel 5, PHPUnit</dd> <dt class="skill-item-caption">Databases</dt> <dd class="skill-item-desc">MySQL, MongoDB</dd> <dt class="skill-item-caption">ActionScript 3</dt> <dd class="skill-item-desc">Adobe Flash, FlashDevelop, Box2D, Greensock TweenLite</dd> <dt class="skill-item-caption">C++</dt> <dd class="skill-item-desc">Qt, Eigen, OLE</dd> <dt class="skill-item-caption">Tools</dt> <dd class="skill-item-desc">Git, Grunt, Photoshop</dd> </dl> </div> </div> </div> </section> <!-- Contact --> <section id="contact"> <div class="container"> <div class="page-header"> <h1>Contact</h1> </div> <div class="row"> <div class="col-md-6"> <dl class="dl-horizontal"> <dt class="contact-name">Email</dt> <dd class="contact-item">ovchar.dmitriy@gmail.com</dd> </dl> </div> <div class="col-md-6"> <dl class="dl-horizontal"> <dt class="contact-name">Phone</dt> <dd class="contact-item">+380 66 335 0134</dd> </dl> </div> </div> </div> </section>'),a.put("views/footer.html",'<footer> <div class="container text-center"> <span>Copyright © divanStudio 2013-2015</span> </div> </footer>'),a.put("views/gaz13.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <a class="navbar-brand" href="#page-top">GAZ-13</a> </div> </div> </nav> <!-- Header --> <header class="project-header"> <div class="container"> <div class="row"> <div class="row-md-height"> <div class="col-md-5 col-md-height col-md-middle text-center"> <h1 class="header-title">GAZ-13 "Chayka"</h1> <p class="header-desc">3D model</p> </div> <!-- Images --> <div id="images" class="col-md-7 col-md-height col-md-bottom"> <div id="carousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#carousel" data-slide-to="0" class="active"></li> <li data-target="#carousel" data-slide-to="1"></li> <li data-target="#carousel" data-slide-to="2"></li> <li data-target="#carousel" data-slide-to="3"></li> <li data-target="#carousel" data-slide-to="4"></li> <li data-target="#carousel" data-slide-to="5"></li> <li data-target="#carousel" data-slide-to="6"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="/images/screens_gaz/gaz13_1.JPG" alt="GAZ-13"> </div> <div class="item"> <img src="/images/screens_gaz/gaz13_2.JPG" alt="GAZ-13"> </div> <div class="item"> <img src="/images/screens_gaz/gaz13_3.JPG" alt="GAZ-13"> </div> <div class="item"> <img src="/images/screens_gaz/gaz13_4.JPG" alt="GAZ-13"> </div> <div class="item"> <img src="/images/screens_gaz/gaz13_5.JPG" alt="GAZ-13"> </div> <div class="item"> <img src="/images/screens_gaz/gaz13_6.jpg" alt="GAZ-13"> </div> <div class="item"> <img src="/images/screens_gaz/gaz13_7.JPG" alt="GAZ-13"> </div> </div> <!-- Controls --> <span class="left carousel-control" data-target="#carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </span> <span class="right carousel-control" data-target="#carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </span> </div> </div> </div> </div> </div> </header> <!-- Description --> <section id="description"> <div class="container"> <div class="page-header"> <h1>Description</h1> </div> <div class="row"> <div class="col-md-12"> <p>GAZ-13 "Chayka" - 3d model of the Soviet passenger car of representative class. Model was created and rendered at SolidWorks 2010.</p> <dl class="dl-horizontal"> <dt>Technologies</dt> <dd>SolidWorks 2010<br> </dd> <dt>Design</dt> <dd><a ui-sref="ivan">Ivan Moskalenko</a></dd> </dl> </div> </div> </div> </section>'),a.put("views/helibomber.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <a class="navbar-brand" href="#page-top">HeliCrane2: Bomber</a> </div> </div> </nav> <!-- Header --> <header class="project-header"> <div class="container"> <div class="row"> <div class="row-md-height"> <div class="col-md-5 col-md-height col-md-middle text-center"> <h1 class="header-title">HeliCrane2: Bomber</h1> <p class="header-desc">Flash game</p> </div> <!-- Images --> <div id="images" class="col-md-7 col-md-height col-md-bottom"> <div id="carousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#carousel" data-slide-to="0" class="active"></li> <li data-target="#carousel" data-slide-to="1"></li> <li data-target="#carousel" data-slide-to="2"></li> <li data-target="#carousel" data-slide-to="3"></li> <li data-target="#carousel" data-slide-to="4"></li> <li data-target="#carousel" data-slide-to="5"></li> <li data-target="#carousel" data-slide-to="6"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="/images/screens_helibomber/helibomber_1.png" alt="HeliCrane2. Bomber"> </div> <div class="item"> <img src="/images/screens_helibomber/helibomber_2.png" alt="HeliCrane2. Bomber"> </div> <div class="item"> <img src="/images/screens_helibomber/helibomber_3.png" alt="HeliCrane2. Bomber"> </div> <div class="item"> <img src="/images/screens_helibomber/helibomber_4.png" alt="HeliCrane2. Bomber"> </div> <div class="item"> <img src="/images/screens_helibomber/helibomber_5.png" alt="HeliCrane2. Bomber"> </div> <div class="item"> <img src="/images/screens_helibomber/helibomber_6.png" alt="HeliCrane2. Bomber"> </div> <div class="item"> <img src="/images/screens_helibomber/helibomber_7.png" alt="HeliCrane2. Bomber"> </div> </div> <!-- Controls --> <span class="left carousel-control" data-target="#carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </span> <span class="right carousel-control" data-target="#carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </span> </div> </div> </div> </div> </div> </header> <!-- Description --> <section id="description"> <div class="container"> <div class="page-header"> <h1>Description</h1> </div> <div class="row"> <div class="col-md-12"> <p><strong>HeliCrane2:Bomber</strong> it\'s a military version of popular Flash game <a ui-sref="project({ id: \'helicrane\'})">HeliCrane</a>. Next tools such as Adobe Flash, FlashDevelop, ActionScript 3.0 were used for creation it. The unique game engine based on Box2d provides dynamic load/unload and rasteriazation levels to minimize the resources consumed by the computer. Automatic parsing of game objects geometry directly from the graphic resources are significantly accelerated the development process. Vector graphics, made in a military-cartoon style with discrete gradient fills, creates a pleasant atmosphere for the players and has received many positive feedbacks. In nearest future game will be published on the primary sponsor site <a href="kiz10.com">kiz10.com</a>.</p> <dl class="dl-horizontal"> <dt>Technologies</dt> <dd>Adobe Flash, ActionScript 3, Box2D, Greensock TweenLite.<br> </dd> <dt>Design</dt> <dd><a ui-sref="ivan">Ivan Moskalenko</a></dd> <dt>Code</dt> <dd><a ui-sref="dmytro">Dmytro Ovchar</a></dd> </dl> </div> </div> </div> </section> <!-- Promo --> <section id="promo"> <div class="container"> <div class="page-header"> <h1>Promo video</h1> </div> <div class="row"> <div class="col-xs-12 col-md-8 col-md-offset-2 video"> <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/RrmKZSXFQzk"></iframe> </div> </div> </div> </div> </section>'),a.put("views/helicrane.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <a class="navbar-brand" href="#page-top">HeliCrane</a> </div> </div> </nav> <!-- Header --> <header class="project-header"> <div class="container"> <div class="row"> <div class="row-md-height"> <div class="col-md-5 col-md-height col-md-middle text-center"> <h1 class="header-title">HeliCrane</h1> <p class="header-desc">Flash game</p> </div> <!-- Images --> <div id="images" class="col-md-7 col-md-height col-md-bottom"> <div id="carousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#carousel" data-slide-to="0" class="active"></li> <li data-target="#carousel" data-slide-to="1"></li> <li data-target="#carousel" data-slide-to="2"></li> <li data-target="#carousel" data-slide-to="3"></li> <li data-target="#carousel" data-slide-to="4"></li> <li data-target="#carousel" data-slide-to="5"></li> <li data-target="#carousel" data-slide-to="6"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="/images/screens_helicrane/helicrane_1.png" alt="HeliCrane"> </div> <div class="item"> <img src="/images/screens_helicrane/helicrane_2.png" alt="HeliCrane"> </div> <div class="item"> <img src="/images/screens_helicrane/helicrane_3.png" alt="HeliCrane"> </div> <div class="item"> <img src="/images/screens_helicrane/helicrane_4.png" alt="HeliCrane"> </div> <div class="item"> <img src="/images/screens_helicrane/helicrane_5.png" alt="HeliCrane"> </div> <div class="item"> <img src="/images/screens_helicrane/helicrane_6.png" alt="HeliCrane"> </div> <div class="item"> <img src="/images/screens_helicrane/helicrane_7.png" alt="HeliCrane"> </div> </div> <!-- Controls --> <span class="left carousel-control" data-target="#carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </span> <span class="right carousel-control" data-target="#carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </span> </div> </div> </div> </div> </div> </header> <!-- Description --> <section id="description"> <div class="container"> <div class="page-header"> <h1>Description</h1> </div> <div class="row"> <div class="col-md-12"> <p><strong>HeliCrane</strong> it\'s a popular Flash game in helicopter genre. Next tools such as Adobe Flash, FlashDevelop, ActionScript 3.0 were used for creation it. The unique game engine based on Box2d provides dynamic load/unload levels to minimize the resources consumed by the computer. Automatic parsing of game objects geometry directly from the graphic resources are significantly accelerated the development process. Vector graphics, made in a tech-cartoon style with discrete gradient fills, creates a pleasant atmosphere for the players and has received many positive feedbacks. In just six months the game gained more than 1 million views and entered to the top 10 popular games on the primary sponsor site <a href="kiz10.com">kiz10.com.</a></p> <dl class="dl-horizontal"> <dt>Technologies</dt> <dd>Adobe Flash, ActionScript 3, Box2D, Greensock TweenLite, Google Analytics.<br> </dd> <dt>Design</dt> <dd><a ui-sref="ivan">Ivan Moskalenko</a></dd> <dt>Code</dt> <dd><a ui-sref="dmytro">Dmytro Ovchar</a></dd> </dl> </div> </div> </div> </section> <!-- Promo --> <section id="promo"> <div class="container"> <div class="page-header"> <h1>Promo video</h1> </div> <div class="row"> <div class="col-xs-12 col-md-8 col-md-offset-2 video"> <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2AUYnUXd2hQ"></iframe> </div> </div> </div> </div> </section>'),a.put("views/helirunner.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <a class="navbar-brand" href="#page-top">HeliRunner</a> </div> </div> </nav> <!-- Header --> <header class="project-header"> <div class="container"> <div class="row"> <div class="row-md-height"> <div class="col-md-5 col-md-height col-md-middle text-center"> <h1 class="header-title">HeliRunner</h1> <p class="header-desc">Android game</p> </div> <!-- Images --> <div id="images" class="col-md-7 col-md-height col-md-bottom"> <div id="carousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#carousel" data-slide-to="0" class="active"></li> <li data-target="#carousel" data-slide-to="1"></li> <li data-target="#carousel" data-slide-to="2"></li> <li data-target="#carousel" data-slide-to="3"></li> <li data-target="#carousel" data-slide-to="4"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="/images/screens_helirunner/helirunner_1.png" alt="HeliRunner"> </div> <div class="item"> <img src="/images/screens_helirunner/helirunner_2.png" alt="HeliRunner"> </div> <div class="item"> <img src="/images/screens_helirunner/helirunner_3.png" alt="HeliRunner"> </div> <div class="item"> <img src="/images/screens_helirunner/helirunner_4.png" alt="HeliRunner"> </div> <div class="item"> <img src="/images/screens_helirunner/helirunner_5.png" alt="HeliRunner"> </div> </div> <!-- Controls --> <span class="left carousel-control" data-target="#carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </span> <span class="right carousel-control" data-target="#carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </span> </div> </div> </div> </div> </div> </header> <!-- Description --> <section id="description"> <div class="container"> <div class="page-header"> <h1>Description</h1> </div> <div class="row"> <div class="col-md-12"> <p><strong>HeliRunner</strong> it\'s mobile Android/iOS game which developed in runner genre. Next tools such as Java, AndroidStudio, LibGDX, Universal Java Tween Engine, Google Services were used for creation it. The unique game engine based on Box2d provides realistic physics and collisions for game objects. Control over main game personages is very simply and performed by two display buttons. Beautiful graphics, made in a minimal-tech-cartoon style with discrete gradient fills, creates a pleasant atmosphere for the players and has received many positive feedbacks. In nearest future the game will be published on the Google PlayMarket.</p> <dl class="dl-horizontal"> <dt>Technologies</dt> <dd>Java, AndroidStudio, LibGDX, Universal Java Tween Engine, Google Services</dd> <dt>Design &amp; code</dt> <dd><a ui-sref="ivan">Ivan Moskalenko</a></dd> </dl> </div> </div> </div> </section>'),a.put("views/ivan.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#page-top">Ivan Moskalenko</a> </div> <div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav navbar-right"> <li class="hidden"> <a href="#page-top"></a> </li> <li class="page-scroll"> <a href="#portfolio">Portfolio</a> </li> <li class="page-scroll"> <a href="#skills">Skills</a> </li> <li class="page-scroll"> <a href="#contact">Contact</a> </li> </ul> </div> <!--/.nav-collapse --> </div> </nav> <!-- Header --> <header> <div class="container text-center"> <h1 class="header-title">Ivan Moskalenko</h1> <p class="header-desc">Flash and Android developer, Designer</p> </div> </header> <!-- Portfolio --> <section class="portfolio" data-projects="projects"></section> <!-- Skills --> <section id="skills"> <div class="container"> <div class="page-header"> <h1>Skills</h1> </div> <div class="row"> <div class="col-md-12"> <dl class="dl-horizontal skill-item"> <dt class="skill-item-caption">Java</dt> <dd class="skill-item-desc">Android, LibGdx, Box2d, Java Universal Tween Engine, AndroidStudio, NetBeans, Eclipse</dd> <dt class="skill-item-caption">ActionScript 2.0-3.0</dt> <dd class="skill-item-desc">Adobe Flash, FlashDevelop, Box2D, Greensock TweenLite</dd> <dt class="skill-item-caption">Databases</dt> <dd class="skill-item-desc">MySQL</dd> <dt class="skill-item-caption">CAD/CAE/Design</dt> <dd class="skill-item-desc">SolidWorks, NX, ANSYS, MSC SoftWare Patran/Nastran</dd> </dl> </div> </div> </div> </section> <!-- Contact --> <section id="contact"> <div class="container"> <div class="page-header"> <h1>Contact</h1> </div> <div class="row"> <div class="col-md-6"> <dl class="dl-horizontal"> <dt class="contact-name">Email</dt> <dd class="contact-item">ivan.moskalenko87@gmail.com</dd> </dl> </div> <div class="col-md-6"> <dl class="dl-horizontal"> <dt class="contact-name">Phone</dt> <dd class="contact-item">+380 66 958 5580</dd> </dl> </div> </div> </div> </section>'),a.put("views/portfolio.html",'<section id="portfolio"> <div class="container"> <div class="page-header"> <h1>Portfolio</h1> </div> <div class="row"> <div class="col-md-12 col-lg-10 col-lg-offset-1"> <div class="row"> <div ng-repeat="project in projects" class="col-xs-12 col-sm-4 col-md-3 col-lg-3 portfolio-item-container"> <a ui-sref="project({id: project.path})" class="portfolio-item"> <div class="portfolio-item-header text-center"> <div class="portfolio-item-icon" ng-class="project.iconClass"></div> <p class="portfolio-item-type">{{ project.type }}</p> </div> <div class="portfolio-item-content"> <h3>{{ project.title }}</h3> </div> </a> </div> </div> </div> </div> </div> </section>'),a.put("views/project.html","<div ng-include=\"'views/' + project.view\"></div>"),a.put("views/vortexviewer.html",'<!-- Fixed navbar --> <nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <div class="navbar-header page-scroll"> <a class="navbar-brand" href="#page-top">VortexViewer</a> </div> </div> </nav> <!-- Header --> <header class="project-header"> <div class="container"> <div class="row"> <div class="row-md-height"> <div class="col-md-5 col-md-height col-md-middle text-center"> <h1 class="header-title">VortexViewer</h1> <p class="header-desc">Web app</p> </div> <!-- Images --> <div id="images" class="col-md-7 col-md-height col-md-bottom"> <div id="carousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#carousel" data-slide-to="0" class="active"></li> <li data-target="#carousel" data-slide-to="1"></li> <li data-target="#carousel" data-slide-to="2"></li> <li data-target="#carousel" data-slide-to="3"></li> <li data-target="#carousel" data-slide-to="4"></li> <li data-target="#carousel" data-slide-to="5"></li> <li data-target="#carousel" data-slide-to="6"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="/images/screens_vv/vv_1.png" alt="VortexViewer"> </div> <div class="item"> <img src="/images/screens_vv/vv_2.png" alt="VortexViewer"> </div> <div class="item"> <img src="/images/screens_vv/vv_3.png" alt="VortexViewer"> </div> <div class="item"> <img src="/images/screens_vv/vv_4.png" alt="VortexViewer"> </div> <div class="item"> <img src="/images/screens_vv/vv_5.png" alt="VortexViewer"> </div> <div class="item"> <img src="/images/screens_vv/vv_6.png" alt="VortexViewer"> </div> <div class="item"> <img src="/images/screens_vv/vv_7.png" alt="VortexViewer"> </div> </div> <!-- Controls --> <span class="left carousel-control" data-target="#carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </span> <span class="right carousel-control" data-target="#carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </span> </div> </div> </div> </div> </div> </header> <!-- Description --> <section id="description"> <div class="container"> <div class="page-header"> <h1>Description</h1> </div> <div class="row"> <div class="col-md-12"> <p><strong>VortexViewer</strong> is web app for visualization of aerodynamic calculations results. The application displays aircrafts surfaces and vortex wakes in 3D. User can hide/show separate lifting surfaces and their vortex wakes and manipulate with camera. It works with files in local file system. The application was developed by JavaScript with usage of libraries jQuery, Underscore.js, Backbone.js and Three.js. For unit testing QUnit and Sinon.js was used (and Jasmine for latest versions). Bootstrap 3 was used for UI part.</p> <dl class="dl-horizontal"> <dt>Technologies</dt> <dd>HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, Underscore.js, Backbone.js, Three.js, QUnit, Sinon.js, Jasmine<br> </dd> <dt>Code &amp; design</dt> <dd><a ui-sref="dmytro">Dmytro Ovchar</a></dd> </dl> </div> </div> </div> </section>')}]);