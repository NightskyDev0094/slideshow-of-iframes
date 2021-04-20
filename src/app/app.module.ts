import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
