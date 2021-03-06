const request = require("request-promise");
function ControlController(
  $scope,
  $interval,
  $state,
  WorkersService,
  ConfigService,
  NotificationService,
  DownloadService
) {
  const inputs = ConfigService.get("inputs");
  if (inputs) $scope[inputs.model] = JSON.parse(inputs.value);
  $scope.launchCommand = async function(command) {
    if (!command || !command.name || !command.path)
      return NotificationService.add("warning", "Please set a name and a path");
    const workers = ConfigService.get("workers")
      .filter(worker => !worker.disable)
      .map(worker=>worker.name);
    const debug = ConfigService.get("debug");
    const bundle = ConfigService.get("bundle")
    const url = ConfigService.get("serverUrl") + "launch";
    const commandJson = {
      debug,
      name: command.name,
      workers: workers.join(','),
      config: command.config,
      path: command.path,
      bundle
    };
    var options = {
      method: "POST",
      url,
      body: { command: commandJson },
      json: true
    };
    await request(options);
  };
  $scope.stop = async function() {
    const url = ConfigService.get("serverUrl") + "stop";
    var options = { method: "POST", url };
    await request(options);
  };
  $scope.getstatus = _ => WorkersService.status;
  $scope.downloadFiles = async _ => {
    const url = ConfigService.get("serverUrl") + "download/latest";
    let latestSession = await request(url);
    $scope.downloadError = undefined;
    const { dialog } = require("electron").remote;
    let pathToSave = dialog.showOpenDialog({ properties: ["openDirectory"] });
    if (!pathToSave) return ($scope.downloadError = "No path specified");
    pathToSave = pathToSave.pop();
    latestSession = JSON.parse(latestSession);
    latestSession.map(fileOnServer => {
      DownloadService.add(fileOnServer.path, pathToSave);
    });
    $state.go("Download");
    DownloadService.launch();
  };

  $scope.readdirServer = async function(path) {
    const url = ConfigService.get("serverUrl") + "readdir";
    var options = { method: "POST", url, body: { path }, json: true };
    const readdir = await request(options);
    return readdir;
  };
}

module.exports = ControlController;
