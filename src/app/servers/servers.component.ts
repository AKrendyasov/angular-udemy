import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No server was created'
  serverName: string
  serverCreated: boolean = false
  servers: Array<string> =['test1', 'test2']
  constructor() {
     setTimeout(()=>this.allowNewServer=true, 2000)
   }
   
  ngOnInit() {
  }

  onCreateServer(e: Event) {
    this.serverCreated = true
    this.servers.push((<string>this.serverName))
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}