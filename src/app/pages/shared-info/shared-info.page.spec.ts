import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedInfoPage } from './shared-info.page';

describe('SharedInfoPage', () => {
  let component: SharedInfoPage;
  let fixture: ComponentFixture<SharedInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
