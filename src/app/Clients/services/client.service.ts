import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Client } from '../models/Client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = afs.collection<Client>('clients');
  }

  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.clients;
  }

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.valueChanges();
    return this.client;
  }

  newClient(client: Client) {
    this.clientsCollection.add(client);
  }

  updateClient(id: string, client: Client) {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.clientDoc.update(client);
  }

  deleteClient(id: string) {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.clientDoc.delete();
  }

}
