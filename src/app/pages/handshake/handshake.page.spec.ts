import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HandshakePage } from './handshake.page';

describe('HandshakePage', () => {
  let component: HandshakePage;
  let fixture: ComponentFixture<HandshakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandshakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandshakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
