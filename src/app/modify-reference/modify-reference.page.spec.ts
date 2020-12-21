import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyReferencePage } from './modify-reference.page';

describe('ModifyReferencePage', () => {
  let component: ModifyReferencePage;
  let fixture: ComponentFixture<ModifyReferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyReferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyReferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
