import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string): Promise<{}> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((userData => resolve(userData)), err => reject(err));
    });
  }

  register(email: string, password: string): Promise<{}> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((userData => resolve(userData)), err => reject(err));
    });
  }

  getAuth(): Observable<firebase.User> {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
