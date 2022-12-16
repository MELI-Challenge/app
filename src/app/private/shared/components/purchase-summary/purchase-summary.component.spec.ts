import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseSummaryComponent } from './purchase-summary.component';
import { mockPurchase } from '../../../../../../tests/utils/purchase';

describe('PurchaseSummaryComponent', () => {
  let component: PurchaseSummaryComponent;
  let fixture: ComponentFixture<PurchaseSummaryComponent>;

  const modalMock = {
    open: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseSummaryComponent],
      providers: [{ provide: NgbModal, useValue: modalMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseSummaryComponent);
    component = fixture.componentInstance;
    component.purchase = mockPurchase;
    component.content = {} as TemplateRef<ElementRef>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit', () => {
    jest.spyOn(component.purchaseEmitter, 'emit');
    jest.spyOn(modalMock, 'open');

    component.open(mockPurchase);

    expect(modalMock.open).toHaveBeenCalled();
    expect(component.purchaseEmitter.emit).toHaveBeenCalledTimes(1);
  });
});
