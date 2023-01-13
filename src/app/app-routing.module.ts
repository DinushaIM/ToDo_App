import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HistoryComponent} from "./components/history/history.component";
import {TodosComponent} from "./components/todos/todos.component";


const routes: Routes = [
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
