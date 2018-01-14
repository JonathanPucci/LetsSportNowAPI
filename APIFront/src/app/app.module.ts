import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsModalModule } from "ng2-bs3-modal/ng2-bs3-modal";

import { AppComponent } from "./app.component";
import { DbmanagerComponent } from "./dbmanager/dbmanager.component";
import { EntityComponent } from "./dbmanager/entity/entity.component";
import { EntityService } from "./dbmanager/entity/entity-service.service";
@NgModule({
  declarations: [AppComponent, DbmanagerComponent, EntityComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsModalModule
  ],
  providers: [EntityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
