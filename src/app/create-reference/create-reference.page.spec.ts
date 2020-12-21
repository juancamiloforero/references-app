import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateReferencePage } from './create-reference.page';

describe('CreateReferencePage', () => {
  let component: CreateReferencePage;
  let fixture: ComponentFixture<CreateReferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateReferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
