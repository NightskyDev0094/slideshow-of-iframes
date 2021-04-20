import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TemplateComponent } from "./sidebar/template/template.component";
import { ContentComponent } from "./sidebar/content/content.component";
import { OptionsComponent } from "./sidebar/options/options.component";
import { DesignComponent } from "./sidebar/design/design.component";
import { SideshowPanelComponent } from "./sideshow-panel/sideshow-panel.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TemplateComponent,
    ContentComponent,
    OptionsComponent,
    DesignComponent,
    SideshowPanelComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
