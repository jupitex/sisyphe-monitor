
## Sisyphe-monitor
![sisyphe](./logo-sisyphe.jpg)

Sisyphe-monitor is an Electron app for the [Sisyphe](https://github.com/jupitex/sisyphe) application. It displays information about the progress of the analysis.

Sisyphe-monitor comes with a bundled redis version & his own sisyphe version.


### [TRY the new bundled Siyphe for your os](https://github.com/jupitex/sisyphe-monitor/releases/tag/2.0.0) nothing to install!


![sisyphe](./flow.gif)

### Requirements
Test with NodeJS@8.1, Redis@3.2.6


### Install it

 - Download the lastest [Sisyphe](https://github.com/jupitex/sisyphe)  version and refer to the Readme to install it
 - Download the lastest Sisyphe-monitor [release](https://github.com/jupitex/sisyphe-monitor/releases/latest)
 - Execute Sisyphe-monitor
 - ... that's it.
 
If the server is not running on Sisyphe, you can not control it. Sisyphe-monitor asks you to start the server to access certain actions. 
But you can use it without server, sisyphe-monitor watch redis to display progressions

### Features

 - View global progression
 - View modules progression
 - View time of analyse
 - View Sisyphe status
 - View logs
 - Launch analyse with parameters 
 - Manipulate modules (activate/desactivate)
 - Download latest analyse 
 - Stop analyse
 - Activate debug mode on server
