import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
  .online {
    color:white
  }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number=10
  serverStatus: string
  constructor() {
    this.serverStatus = Math.random()>0.5? "Server online": "Server offline"
   }

  ngOnInit() {

  }

  getServerStatus () {
    return this.serverStatus
  }

  getColor () {
    return this.serverStatus === 'Server online'? 'green' : 'red'
  }

}