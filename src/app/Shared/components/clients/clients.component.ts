import { Component, OnInit } from '@angular/core';
import { Client } from '../../../Clients/models/Client';
import { ClientService } from '../../../Clients/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  totalOwed: number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    let total = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += Number(this.clients[i].balance);
    }
    this.totalOwed = total;
  }

}
