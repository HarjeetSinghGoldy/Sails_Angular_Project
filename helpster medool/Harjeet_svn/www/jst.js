this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/sideMenu/schedular/calendarControls.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n      <br>\n      <div class="row">\n\n        <div class="col-md-6 text-center">\n          <div class="btn-group">\n\n            <button\n              class="btn btn-primary"\n              mwl-date-modifier\n              date="vm.viewDate"\n              decrement="vm.calendarView">\n              Previous\n            </button>\n            <button\n              class="btn btn-default"\n              mwl-date-modifier\n              date="vm.viewDate"\n              set-to-today>\n              Today\n            </button>\n            <button\n              class="btn btn-primary"\n              mwl-date-modifier\n              date="vm.viewDate"\n              increment="vm.calendarView">\n              Next\n            </button>\n          </div>\n        </div>\n\n        <br class="visible-xs visible-sm">\n\n        <div class="col-md-6 text-center">\n          <div class="btn-group">\n            <label class="btn btn-primary" ng-model="vm.calendarView" uib-btn-radio="\'year\'">Year</label>\n            <label class="btn btn-primary" ng-model="vm.calendarView" uib-btn-radio="\'month\'">Month</label>\n            <label class="btn btn-primary" ng-model="vm.calendarView" uib-btn-radio="\'week\'">Week</label>\n            <label class="btn btn-primary" ng-model="vm.calendarView" uib-btn-radio="\'day\'">Day</label>\n          </div>\n        </div>\n\n      </div>\n      <br>\n    ';

}
return __p
};

this["JST"]["assets/templates/sideMenu/schedular/modalContent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n      <div class="modal-header">\n        <h3 class="modal-title">Event action occurred!</h3>\n      </div>\n      <div class="modal-body">\n        <p>Action:\n        <pre>{{ vm.action }}</pre>\n        </p>\n        <p>Event:\n        <pre>{{ vm.event | json }}</pre>\n        </p>\n      </div>\n      <div class="modal-footer">\n        <button class="btn btn-primary" ng-click="$close()">OK</button>\n      </div>\n    ';

}
return __p
};