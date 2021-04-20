import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./sidebar/content/content.component";
import { TemplateComponent } from "./sidebar/template/template.component";
import { OptionsComponent } from "./sidebar/options/options.component";
import { DesignComponent } from "./sidebar/design/design.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TemplateComponent,
    OptionsComponent,
    DesignComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
