import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { ReferenceModel } from '../shared/reference.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  
  constructor(private afs: AngularFirestore, private authSvc: AuthService) { }

  async getReferences() {
    return await this.authSvc.user$.pipe(
      take(1),
      map(usr => {
        return this.afs.collection('references', ref => ref.where('userId', '==', usr.uid)).snapshotChanges()
      })
    )
  }

  async getReference(id: string) {
    return this.authSvc.user$.pipe(
      take(1),
      map(usr => {
        return this.afs.collection('references', ref => ref.where('userId', '==', usr.uid)).doc(id).snapshotChanges()
      })
    )
  }

  async addReference(ref: ReferenceModel) {
    this.afs.collection('references').add(ref).catch(e => {
      console.log(e);
    })
  }
  
  updateReference(ref: ReferenceModel): Promise<void> {
    console.log("Referencia modificar->", ref);
    return this.afs.collection('references').doc(ref.id).update({
      titulo: ref.titulo,
      autores: ref.autores,
      doi: ref.doi,
      anioPub: ref.anioPub,
      tipoPub: ref.tipoPub,
      evento: ref.evento
    });
  }

  deleteReference(id: string) {
    return this.afs.collection('references').doc(id).delete();
  }
}
