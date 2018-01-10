import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styles: []
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance = false;
  showBalanceUpdateInput = false;

  constructor(
    private clientService: ClientService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      if (client === null) return;
      if (client.balance > 0) this.hasBalance = true;
      this.client = client;
    });
  }

  updateBalance(id: string) {
    if (this.client.balance <= 0) this.hasBalance = false;
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Balance Updated', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate([`/client/${this.id}`]);
  }

  onDeleteClick() {
    if (confirm('Are you sure to delete?')) {
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client removed', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }

}
