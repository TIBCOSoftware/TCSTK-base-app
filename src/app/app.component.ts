import {Component} from '@angular/core';
import {LogLevel, LogService} from '@tibco-tcstk/tc-core-lib';
import {TcAppDefinitionService} from "@tibco-tcstk/tc-liveapps-lib";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCSTK-Base-App';

  constructor(private logger: LogService, protected appDefinitionService: TcAppDefinitionService) {
    logger.level = LogLevel.Debug;
    logger.info('My Cloud Starter Online...');

    /* example to retrieve custom configuration from appConfig.json */
    /****************************************************************/
    /* note this can only be retrieved after a login since appDefinitionService wont be initialized until after a login */
    /* to add custom config, create a new model in the app for the customConfig structure (eg:) models/customConfig1.ts
     * then add your config in assets/appConfig.json under a new child object of config. eg)
     * {
     *   "config": {
     *      "customConfig1": {
     *        "configAttribute1": "sampleValue"
     *      }
     *    }
     *  }
     */
  }
}
