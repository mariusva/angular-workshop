import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  private componentRef: ComponentRef<AddFormComponent>;

  constructor(private compFactory: ComponentFactoryResolver) { }

  private attach(component) {
    this.detach();

    const componentFactory = this.compFactory.resolveComponentFactory(component);
    this.componentRef = <any> this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.detach = this.detach.bind(this);
  }

  private detach() {
    if (this.componentRef) {
      this.viewContainerRef.detach();
      this.componentRef.destroy();
    }
  }

  public addProductClickHandler() {
    this.attach(AddFormComponent);
  }
}
