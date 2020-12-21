import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReferencesService } from '../service/references.service';
import { ReferenceModel } from '../shared/reference.interface';

@Component({
  selector: 'app-modify-reference',
  templateUrl: './modify-reference.page.html',
  styleUrls: ['./modify-reference.page.scss'],
})
export class ModifyReferencePage implements OnInit {

  private reference: ReferenceModel = {
    id: '',
    titulo: '',
    autores: '',
    tipoPub: 0,
    evento: '',
    doi: '',
    anioPub: 0,
    userId: ''
  };

  constructor(private refSvc: ReferencesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const refId = this.route.snapshot.paramMap.get('refId');
    this.refSvc.getReference(refId)
    .then(value => {
      value.subscribe(value => {
        value.subscribe(a => {
          this.reference.id = a.payload.id,
          this.reference.titulo = a.payload.get('titulo'),
          this.reference.autores = a.payload.get('autores'),
          this.reference.tipoPub = a.payload.get('tipoPub'),
          this.reference.evento = a.payload.get('evento'),
          this.reference.doi = a.payload.get('doi'),
          this.reference.anioPub = a.payload.get('anioPub'),
          this.reference.userId = a.payload.get('userId')
        })
      })
    });
  }

  async onModifyReference(data: ReferenceModel) {
    await this.refSvc.updateReference(data).then(() => {
      this.router.navigate(['home']);
    });
  }

}
