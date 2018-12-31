import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UnidadmedidaModel } from 'src/app/modulo-sistema-config/tablas/unidadmedida/unidadmedida-model';
import { CrudHttpClientServiceShared } from '../../shared/servicio/crudHttpClient.service.shared';


@Component({
  selector: 'app-comp-find-unidad-medida',
  templateUrl: './comp-find-unidad-medida.component.html',
  styleUrls: ['./comp-find-unidad-medida.component.scss']
})
export class CompFindUnidadMedidaComponent implements OnInit {

  @Input()
  myControl = new FormControl();

  @Input()
  _formControlName: FormControl;

  @Output()
  getObject: EventEmitter<UnidadmedidaModel> = new EventEmitter();

  public ListUnidadMedida: UnidadmedidaModel[] = [];

  constructor(private crudSevice: CrudHttpClientServiceShared) { }

  ngOnInit() {
    if (this._formControlName == undefined) {
      this._formControlName = this.myControl;
    }

    this.loadUnidadMedida();
  }

  private loadUnidadMedida(): void {
    this.crudSevice.getall('unidadmedida', 'getall').subscribe((res: any) => this.ListUnidadMedida = <UnidadmedidaModel[]>res.data);
  }

  _onSelectionChange(a, b) {
    this.getObject.emit(a.value);
  }

  compareUndMedida(c1: UnidadmedidaModel, c2: UnidadmedidaModel): boolean {
    return c1 && c2 ? c1.idunidadmedida === c2.idunidadmedida : c1 === c2;
  }

}
