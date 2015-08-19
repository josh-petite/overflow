(function(module) {
try { module = angular.module("overflow.templates"); }
catch(err) { module = angular.module("overflow.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/modules/character/character.html",
    "<h1>{{ vm.greeting }}</h1>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-lg-2\">{{ vm.name }}</div>\n" +
    "    <div class=\"col-lg-2\">{{ vm.job }}</div>\n" +
    "    <div class=\"col-lg-2\">{{ vm.level }}</div>\n" +
    "    <div class=\"col-lg-2\">{{ vm.hp }}</div>\n" +
    "</div>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "<div class=\"table-responsive\">\n" +
    "    <table class=\"table table-bordered table-striped table-hover\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th>Name</th>\n" +
    "            <th>Quantity</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tr ng-repeat=\"i in vm.items\">\n" +
    "            <td>{{i.name}}</td>\n" +
    "            <td>{{i.quantity}}</td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("overflow.templates"); }
catch(err) { module = angular.module("overflow.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/modules/dashboard/dashboard.html",
    "<div class=\"jumbotron\">\n" +
    "    <h1>Dashboard</h1>\n" +
    "    <p>Overflow's dashboard is here</p>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        {{ vm.greeting }}\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<a ui-sref=\"character\">View Character</a>");
}]);
})();

(function(module) {
try { module = angular.module("overflow.templates"); }
catch(err) { module = angular.module("overflow.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/modules/core/directives/templates/nav.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"dashboard\">\n" +
    "                Overflow\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>");
}]);
})();
