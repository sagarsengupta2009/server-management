import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: { id: number, name: string, status: string };
  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // const id = Number(this.route.snapshot.params['id']);
    // this.server = this.serverService.getServer(id);
    // this.route.params.subscribe(
    //   (param: Params) => {
    //     this.server = this.serverService.getServer(Number(param['id']));
    // });

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
