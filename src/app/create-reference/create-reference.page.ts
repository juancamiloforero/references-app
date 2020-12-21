import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferencesService } from '../service/references.service';
import { ReferenceModel } from '../shared/reference.interface';

@Component({
  selector: 'app-create-reference',
  templateUrl: './create-reference.page.html',
  styleUrls: ['./create-reference.page.scss'],
})
export class CreateReferencePage implements OnInit {

  constructor(private refSvc: ReferencesService, private router: Router) { }

  ngOnInit() {
  }

  async onCreateReference(data: ReferenceModel) {
    await this.refSvc.addReference(data).then(() => {
      this.router.navigate(['home']);
    });
  }
}
