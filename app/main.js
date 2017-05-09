System.register(['@angular/platform-browser-dynamic', '@angular/common', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, common_1, app_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                common_1.FORM_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map