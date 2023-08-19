import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  servers: { id: number, name: string, status: string }[] = [
    {id: 1, name: 'Production Server', status: 'Inactive'},
    {id: 2, name: 'Dev Server', status: 'Active'},
    {id: 3, name: 'QA Server', status: 'Active'},
  ];

  constructor() { }

  getServers(): { id: number, name: string, status: string }[] {
    return this.servers;
  }

  getServer(id: number) {
    const server: any = this.servers.find(item => {
      return item.id === id;
    });
    return server; 
  }

  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(item => {
      return item.id === id;
    });
    if(server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
