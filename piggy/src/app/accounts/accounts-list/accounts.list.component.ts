import { Component, Input } from "@angular/core";

@Component({
  selector: 'accounts-list'
})
export class AccountsListComponent {

  @Input()
  public accounts: Account[];


}