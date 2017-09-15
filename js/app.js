const ModuleService = require('./js/Modules/ModuleService');
const ConfigService = require('./js/ConfigService');
const ModulesController = require('./js/Modules/ModulesController');
const HomeController = require('./js/HomeController');
const LogsController = require('./js/Logs/LogsController');
const NavbarController = require("./js/NavbarController");
const InfoController = require("./js/InfoController");
const config = require('./js/config');
let app = angular
  .module("sisyphe", ["ui.router"])
  .service("Modules", ModuleService)
  .service("ConfigService", ConfigService)
  .controller("HomeCtrl", HomeController)
  .controller("LogsCtrl", LogsController)
  .controller("ModulesCtrl", ModulesController)
  .controller("NavbarCtrl", NavbarController)
  .controller("InfoController", InfoController)
  .config(config);
