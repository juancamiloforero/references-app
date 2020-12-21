import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { ReferenceModel } from '../shared/reference.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  referencia: ReferenceModel[] = undefined;
  
  constructor(private afs: AngularFirestore, private authSvc: AuthService) { }

  getReferences() {
    return this.authSvc.user$.pipe(
      take(1),
      map(usr => {
        const collection = this.afs.collection<ReferenceModel>('references', ref => ref.where('userId', '==', usr.uid));
        return collection.valueChanges({idField: 'id'});
      }))
  }

  getReference(id: string) {
    return this.authSvc.user$.pipe(
      take(1),
      map(usr => {
        const document = this.afs.collection<ReferenceModel>('references', ref => ref.where('userId', '==', usr.uid)).doc<ReferenceModel>(id);
        return document.valueChanges({idField: 'id'});
      }))
  }

  addReference(ref: ReferenceModel) {
    return this.afs.collection('references').add(ref);
  }
  
  updateReference(ref: ReferenceModel): Promise<void> {
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
