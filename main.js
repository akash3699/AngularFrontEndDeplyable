(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n}\n\ninput[type=text],\ninput[type=password] {\n  width: 285px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  border-radius: 5px;\n}\n\nbutton {\n  background-color: rgb(63, 98, 255);\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  width: 285px;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn {\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  width: 285px;\n  background-color: #f44336;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: left;\n  padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  span.psw {\n      display: block;\n      float: none;\n  }\n\n  .cancelbtn {\n      width: 300px;\n  }\n}\n\n.box {\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  height: 500px;\n  width: 400px;\n  padding: 40px;\n  padding-top: 25px;\n  box-sizing: border-box;\n  box-shadow: 0 15px 25px rgb(23, 25, 26);\n  border-radius: 10px;\n  margin-top: 70px;\n}\n\n.copyright\n{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  color:black;\n  padding: 1.4em;\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center;\"><b>About Online Insurance Management System</b></h1>\n\n\n\n\n<div class=\"card\" style=\"width: fit-content;\">\n  <img src=\"/src/assets/p1.jpg\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">The Online Policy Management System Project Manages The Activities Related to\n        Insurance of People And There Information And Data to The Insurance Company. The Insurance\n        can Be For The Any Company,any Human Being or Any Other Product Such As Vehicle,mobile,etc.</p>\n    <p class=\"card-text\">Adding to It This System Contains Policy Details That can Be Accessible By Customer And\n        Handled By The Administrator. The User can Add New Policy And Paid Premium By Calculating It\n        on Premium Calculator. And The Admin can View All The Details of The User And Manage It By\n        Using Admin Dashboard. The User can Track on There Policy By Using Claim Tracker.\n      <p class=\"card-text\">Furthermore,the Insurance Holder can View Details of There Policies And Manage There\n          Profile Whereas Administrator or Insurance Company can Manage or View All Details of\n          Customers There Policies And can Track There Valuable Customers. Also They can View The\n          Customer’s Inactive Policies. With This Information They can Reach Out to The Customer.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/add-policy/add-policy.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-policy/add-policy.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-policy/add-policy.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-policy/add-policy.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n      <th>Policy ID</th>\n      <th>Policy Name</th>\n      <th>Policy Decription</th>\n      <th>Years</th>\n      <th>Amount</th>\n      <th>Buy</th>\n      \n      \n  </tr>\n  <tbody >\n         \n         <tr *ngFor=\"let policy of AllPolicyData\">\n             \n          <td>{{policy.policyid}}</td>\n          <td>{{policy.policyname}}</td>\n          <td>{{policy.policydescription}}</td>\n          \n          <td>{{policy.policyduration}}</td>\n          \n          <td>{{policy.totalinsuranceamount}}</td>\n          \n             <td><input type=\"button\" id=\"btnBUY\" class=\"btn btn-info\" name=\"btnBUY\" routerLink=\"/PremiumCalculator/{{policy.policyid}}\" value=\"BUY\" policyID=\"\" ></td>\n             \n        </tr>\n   \n\n      </tbody>\n</table>"

/***/ }),

/***/ "./src/app/add-policy/add-policy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-policy/add-policy.component.ts ***!
  \****************************************************/
/*! exports provided: AddPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPolicyComponent", function() { return AddPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPolicyComponent = /** @class */ (function () {
    function AddPolicyComponent(DataService, router) {
        this.DataService = DataService;
        this.router = router;
    }
    AddPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var StatusOfUserSearched = this.DataService.GetAllPolicyData();
        StatusOfUserSearched.subscribe(function (result) {
            // result.dob= new DatePipe(result.dob);
            _this.AllPolicyData = result;
            console.log(_this.AllPolicyData);
        });
    };
    AddPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-policy',
            template: __webpack_require__(/*! ./add-policy.component.html */ "./src/app/add-policy/add-policy.component.html"),
            styles: [__webpack_require__(/*! ./add-policy.component.css */ "./src/app/add-policy/add-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddPolicyComponent);
    return AddPolicyComponent;
}());



/***/ }),

/***/ "./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Add Claim Tracker</h2>\n\n    <form #myForm=\"ngForm\" (ngSubmit)=\"FormValidation(myForm)\">\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            <tr>\n    \n                <td><b> UserId</b></td>\n                <td>\n                    <input ngModel type=\"number\" placeholder=\"Enter UserId\" name=\"userId\" required>\n                </td>\n            </tr>\n    \n            <tr>\n    \n                <td><b>Remarks:</b></td>\n                <td>\n                    \n                    <textarea ngModel name=\"remarks\" placeholder=\"Enter Remark for Claim\" id=\"remarks\" cols=\"30\" rows=\"5\"></textarea>\n                </td>~\n            </tr>\n\n            <tr>\n    \n                <td><b>Claim Status:</b></td>\n                <td>\n                  <select style=\"background-color: aliceblue;\" ngModel name=\"claimstatus\"  placeholder=\"Select Claim Status\" required id=\"claimstatus\" class=\"form-control\">\n                    <!-- <option value=\"\" style=\"color:black;\" disabled selected hidden>Select your option</option>  -->\n                <option value=\"APPROVED\" >APPROVED</option>\n                 <option value=\"PROCESSING\">PROCESSING</option>\n                 <option value=\"REJECTED\">REJECTED</option>\n               </select>\n                </td>\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"submit\" name=\"addpolicytbtn\" class=\"btn btn-info\" value=\"Add Claim Tracker\">\n                    <label style=\"position: absolute; left: 150px; \"><b>{{msg}}</b></label>\n                           \n                </td>\n            </tr>\n            \n        </table>\n\n\n    </form>"

/***/ }),

/***/ "./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminAddClaimTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddClaimTrackerComponent", function() { return AdminAddClaimTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAddClaimTrackerComponent = /** @class */ (function () {
    function AdminAddClaimTrackerComponent(AuthService, service, router) {
        this.AuthService = AuthService;
        this.service = service;
        this.router = router;
    }
    AdminAddClaimTrackerComponent.prototype.ngOnInit = function () {
    };
    AdminAddClaimTrackerComponent.prototype.FormValidation = function (ClaimTrackerData) {
        var _this = this;
        if (ClaimTrackerData.form.value.policyname == "" ||
            ClaimTrackerData.form.value.policydescription == "" ||
            ClaimTrackerData.form.value.policyduration == "") {
            this.msg = "All fields are compulsory!!";
        }
        else {
            var resultstate = this.service.AddClaimTrackerById(sessionStorage.userId, ClaimTrackerData.form.value);
            console.log(ClaimTrackerData.form.value);
            resultstate.subscribe(function (data) {
                // if (data.error == null) {
                _this.msg = "Successfully Added Up!!" + data;
                window.alert(_this.msg);
                _this.router.navigate(['/Admin/AllClaimTrackers']);
                // }
                // else {
                //   // console.log(data);
                //   // this.msg = "Somthing went Wrong!!";
                //   // this.num = 0;
                // }
            }, function (error) {
                console.log(error);
                _this.msg = "Somthing went Wrong!!";
            });
        }
    };
    AdminAddClaimTrackerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-add-claim-tracker',
            template: __webpack_require__(/*! ./admin-add-claim-tracker.component.html */ "./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-claim-tracker.component.css */ "./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminAddClaimTrackerComponent);
    return AdminAddClaimTrackerComponent;
}());



/***/ }),

/***/ "./src/app/admin-add-policy/admin-add-policy.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-add-policy/admin-add-policy.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-add-policy/admin-add-policy.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-add-policy/admin-add-policy.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Add Policy</h2>\n\n    <form #myForm=\"ngForm\" (ngSubmit)=\"FormValidation(myForm)\">\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            <tr>\n    \n                <td><b> Policy Name:</b></td>\n                <td>\n                    <input ngModel type=\"text\" placeholder=\"Enter Policy Name\" name=\"policyname\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n    \n                <td><b>Benefits:</b></td>\n                <td>\n                    \n                    <textarea ngModel name=\"policydescription\" placeholder=\"Enter Policy Description\" id=\"policydescription\" cols=\"30\" rows=\"5\"></textarea>\n                </td>\n            </tr>\n\n            <tr>\n    \n                <td><b>Years:</b></td>\n                <td>\n                    <input ngModel type=\"Number\" placeholder=\"Enter Policy Duration\" name=\"policyduration\" required=\"required\">\n                </td>\n            </tr>\n\n            <tr>\n    \n                <td><b>Amount for Insurance:</b></td>\n                <td>\n                    <input ngModel type=\"Number\" placeholder=\"Total Insurance Amount \" name=\"totalinsuranceamount\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"submit\" name=\"addpolicytbtn\" class=\"btn btn-info\" value=\"Add Policy\">\n                    <label style=\"position: absolute; left: 150px; \"><b>{{msg}}</b></label>\n                           \n                </td>\n            </tr>\n            \n        </table>\n\n\n    </form>"

/***/ }),

/***/ "./src/app/admin-add-policy/admin-add-policy.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-add-policy/admin-add-policy.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminAddPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddPolicyComponent", function() { return AdminAddPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAddPolicyComponent = /** @class */ (function () {
    function AdminAddPolicyComponent(AuthService, service, router) {
        this.AuthService = AuthService;
        this.service = service;
        this.router = router;
        if (sessionStorage.roleID != 0) {
            delete sessionStorage["email"];
            delete sessionStorage["userid"];
            delete sessionStorage["roleID"];
            delete sessionStorage["userdata"];
            delete sessionStorage["isLoggedIn"];
            this.router.navigate(['Login']);
        }
    }
    AdminAddPolicyComponent.prototype.ngOnInit = function () {
    };
    AdminAddPolicyComponent.prototype.FormValidation = function (PolicyData) {
        var _this = this;
        if (PolicyData.form.value.policyname == "" ||
            PolicyData.form.value.policydescription == "" ||
            PolicyData.form.value.policyduration == "" ||
            PolicyData.form.value.totalinsuranceamount == "") {
            this.msg = "All fields are compulsory!!";
        }
        else {
            var resultstate = this.service.AddPolicyData(PolicyData.form.value);
            console.log(PolicyData.form.value);
            resultstate.subscribe(function (data) {
                // if (data.error == null) {
                _this.msg = "Successfully Added Up!!";
                window.alert(_this.msg);
                _this.router.navigate(['Admin']);
                // }
                // else {
                //   // console.log(data);
                //   // this.msg = "Somthing went Wrong!!";
                //   // this.num = 0;
                // }
            }, function (error) {
                console.log(error);
                _this.msg = "Somthing went Wrong!!";
            });
        }
    };
    AdminAddPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-add-policy',
            template: __webpack_require__(/*! ./admin-add-policy.component.html */ "./src/app/admin-add-policy/admin-add-policy.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-policy.component.css */ "./src/app/admin-add-policy/admin-add-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminAddPolicyComponent);
    return AdminAddPolicyComponent;
}());



/***/ }),

/***/ "./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <h1 style=\"text-align: center;\">Online Insurance Management System</h1>\n\n  \n<marquee>New updates:Insurance Policy</marquee>       \n<button type=\"button\" routerLink=\"/Admin/AddClaimTracker\" class=\"btn btn-info\">Add New Tracker</button><br>\n<table class=\"table\">\n<tr>\n<th>Claim Tracker ID</th>\n<th>Claim Status</th>\n<th>Claim Remarks</th>\n<th></th>\n\n</tr>\n   \n   <tr *ngFor=\"let ClaimTracker of AllClaimTrackers\"  routerLink=\"/Admin/EditClaimTracker/{{this.ClaimTracker.ctid}}\">\n       \n       <td>{{this.ClaimTracker.ctid}}</td>\n       <td>{{this.ClaimTracker.claimstatus}}</td>\n       <td>{{this.ClaimTracker.remarks}}</td>\n       \n       <td><input type=\"button\" class=\"btn btn-info\" routerLink=\"/Admin/EditClaimTracker/{{this.ClaimTracker.ctid}}\" value=\"Update Claim Details\" /></td>\n       \n      \n  </tr>\n\n\n\n</table>\n\n\n  \n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminAllClaimTrackersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAllClaimTrackersComponent", function() { return AdminAllClaimTrackersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminAllClaimTrackersComponent = /** @class */ (function () {
    function AdminAllClaimTrackersComponent(DataService) {
        this.DataService = DataService;
    }
    AdminAllClaimTrackersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var StatusOfPremiumSearch = this.DataService.GetAllClaimTrackers();
        StatusOfPremiumSearch.subscribe(function (result) {
            console.log(result);
            //  let id =element.cpid;
            //  this.PremiumScheduleData.push(result);
            // element.premiumschedule=result
            _this.AllClaimTrackers = result;
            console.log(_this.AllClaimTrackers);
        }, function (error) {
            console.log(error);
        });
    };
    AdminAllClaimTrackersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-all-claim-trackers',
            template: __webpack_require__(/*! ./admin-all-claim-trackers.component.html */ "./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.html"),
            styles: [__webpack_require__(/*! ./admin-all-claim-trackers.component.css */ "./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AdminAllClaimTrackersComponent);
    return AdminAllClaimTrackersComponent;
}());



/***/ }),

/***/ "./src/app/admin-customer-policy-details/admin-customer-policy-details.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin-customer-policy-details/admin-customer-policy-details.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-customer-policy-details/admin-customer-policy-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin-customer-policy-details/admin-customer-policy-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <h1 style=\"text-align: center;\">Admin - Online Insurance Management System</h1>\n\n  \n  \n<button type=\"button\" routerLink=\"/Admin/AddPolicy\" class=\"btn btn-info\">Add New Policy</button><br>\n<table class=\"table\">\n<tr>\n<th>Customer Policy ID</th>\n<!-- <th>Customer Name</th> -->\n<th>Policy ID</th>\n<th>Policy Name</th>\n<th>Years</th>\n<th>Buy Date</th>\n<th>Premium Amount</th>\n<th>Paid Premium Count</th>\n<th>Total Premium Count </th>\n<th></th>\n\n</tr>\n   \n   <tr routerLink=\"/Admin/ManagePolicy/1\" *ngFor=\"let cpdetails of AllCustPolicyData\" >\n    <td>{{cpdetails.cpid}}</td>\n    <!-- <td>Customer Name</td> -->\n       <td>{{cpdetails.policyid.policyid}}</td>\n       <td>{{cpdetails.policyid.policyname}}</td>\n       \n       <td>{{cpdetails.policyid.policyduration}}</td>\n\n       <td>{{cpdetails.buydate |  date:'yyyy-MM-dd'}}</td>\n       <td>{{cpdetails.premiumamout}}</td>\n       <td>{{cpdetails.paidpremiumcount}}</td>\n       <td>{{cpdetails.totalpremiumcount}}</td>\n       \n       \n  </tr>\n\n\n\n</table>\n\n\n  <div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\n    <p>Footer</p>\n  </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/admin-customer-policy-details/admin-customer-policy-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-customer-policy-details/admin-customer-policy-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AdminCustomerPolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCustomerPolicyDetailsComponent", function() { return AdminCustomerPolicyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCustomerPolicyDetailsComponent = /** @class */ (function () {
    function AdminCustomerPolicyDetailsComponent(DataService, AuthService, router) {
        this.DataService = DataService;
        this.AuthService = AuthService;
        this.router = router;
        if (sessionStorage.roleID != 0) {
            delete sessionStorage["email"];
            delete sessionStorage["userid"];
            delete sessionStorage["roleID"];
            delete sessionStorage["userdata"];
            delete sessionStorage["isLoggedIn"];
            this.router.navigate(['Login']);
        }
    }
    AdminCustomerPolicyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resultstate = this.DataService.GetAllUsersPolicyData();
        // console.log(PolicyData.form.value)
        resultstate.subscribe(function (data) {
            // if (data.error == null) {
            // this.msg = "Successfully Added Up!!";
            console.log(data);
            _this.AllCustPolicyData = data;
            // }
            // else {
            //   // console.log(data);
            //   // this.msg = "Somthing went Wrong!!";
            //   // this.num = 0;
            // }
        }, function (error) {
            console.log(error);
            // this.msg = "Somthing went Wrong!!";
        });
    };
    AdminCustomerPolicyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-customer-policy-details',
            template: __webpack_require__(/*! ./admin-customer-policy-details.component.html */ "./src/app/admin-customer-policy-details/admin-customer-policy-details.component.html"),
            styles: [__webpack_require__(/*! ./admin-customer-policy-details.component.css */ "./src/app/admin-customer-policy-details/admin-customer-policy-details.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminCustomerPolicyDetailsComponent);
    return AdminCustomerPolicyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Update Claim Tracker</h2>\n\n    <form >\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            \n    \n            <tr>\n    \n                <td><b>Remarks:</b></td>\n                <td>\n                    \n                    <textarea [(ngModel)]=\"ClaimTrackerData.remarks\" name=\"remarks\" placeholder=\"Enter Remark for Claim\" id=\"remarks\" cols=\"30\" rows=\"5\"></textarea>\n                </td>~\n            </tr>\n\n            <tr>\n    \n                <td><b>Claim Status:</b></td>\n                <td>\n                  <select style=\"background-color: aliceblue;\" [(ngModel)]=\"ClaimTrackerData.claimstatus\" name=\"claimstatus\"  placeholder=\"Select Claim Status\" required id=\"claimstatus\" class=\"form-control\">\n                    <!-- <option value=\"\" style=\"color:black;\" disabled selected hidden>Select your option</option>  -->\n                <option value=\"APPROVED\" >APPROVED</option>\n                 <option value=\"PROCESSING\">PROCESSING</option>\n                 <option value=\"REJECTED\">REJECTED</option>\n               </select>\n                </td>\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"button\" (click)=\"UpdateClaimTracker()\" name=\"addpolicytbtn\" class=\"btn btn-info\" value=\"Update Claim Tracker\">\n                    <label style=\"position: absolute; left: 150px; \"><b>{{msg}}</b></label>\n                           \n                </td>\n            </tr>\n            \n        </table>\n\n\n    </form>"

/***/ }),

/***/ "./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminEditClaimTrackersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditClaimTrackersComponent", function() { return AdminEditClaimTrackersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminEditClaimTrackersComponent = /** @class */ (function () {
    function AdminEditClaimTrackersComponent(DataService, router, activatedRoute) {
        this.DataService = DataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    AdminEditClaimTrackersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.ClaimTrackerId = params['claimtrackerid'];
            console.log(_this.ClaimTrackerId);
        });
        var statusofresult = this.DataService.GetClaimTrackerByCTId(this.ClaimTrackerId);
        statusofresult.subscribe(function (result) {
            console.log(result);
            if (result != null) {
                _this.ClaimTrackerData = result;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AdminEditClaimTrackersComponent.prototype.UpdateClaimTracker = function () {
        var _this = this;
        if (this.ClaimTrackerData == null || this.ClaimTrackerData == undefined) {
            this.msg = "All fields are required";
        }
        else {
            this.msg = "";
            var statusofresult = this.DataService.UpdateClaimTrackerById(this.ClaimTrackerId, this.ClaimTrackerData);
            statusofresult.subscribe(function (result) {
                console.log(result);
                window.alert("Updated Successfully");
                _this.router.navigate(["/Admin/AllClaimTrackers"]);
            }, function (error) {
                console.log(error);
            });
        }
    };
    AdminEditClaimTrackersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-edit-claim-trackers',
            template: __webpack_require__(/*! ./admin-edit-claim-trackers.component.html */ "./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-claim-trackers.component.css */ "./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminEditClaimTrackersComponent);
    return AdminEditClaimTrackersComponent;
}());



/***/ }),

/***/ "./src/app/admin-manage-policy/admin-manage-policy.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-manage-policy/admin-manage-policy.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-manage-policy/admin-manage-policy.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-manage-policy/admin-manage-policy.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Manage Policy</h2>\n\n<table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\">\n\n\n    <tr>\n\n        <td><b> Policy Name:</b></td>\n        <td>\n            <input type=\"text\" name=\"policyname\" [(ngModel)]=\"PolicyData.policyname\" required=\"required\">\n        </td>\n    </tr>\n\n    <tr>\n\n        <td><b>Benefits:</b></td>\n        <td>\n\n            <input type=\"text\" name=\"policydescription\" [(ngModel)]=\"PolicyData.policydescription\" id=\"policydescription\" class=\"form-control\" rows=\"3\"\n                required=\"required\">\n\n            <!-- <input type=\"text\" disabled value=\"{{this.PolicyData.policydescription}}\" name=\"policydescription\" required=\"required\"> -->\n        </td>\n    </tr>\n\n    <tr>\n\n        <td><b>Years:</b></td>\n        <td>\n            <input type=\"Number\" [(ngModel)]=\"PolicyData.policyduration\" disabled name=\"policyduration\" required=\"required\">\n        </td>\n    </tr>\n\n    <tr>\n\n        <td><b>Amount for Insurance:</b></td>\n        <td>\n            <input type=\"Number\" [(ngModel)]=\"PolicyData.totalinsuranceamount\" disabled name=\"totalinsuranceamount\"\n                required=\"required\">\n        </td>\n    </tr>\n    <tr>\n            <td><input type=\"button\" (click)=\"UpdatePolicy()\" name=\"bckbtn\" class=\"btn btn-success\" value=\"UpdatePolicy\"></td>\n        <td><input type=\"button\" routerLink=\"/Home\" name=\"bckbtn\" class=\"btn btn-info\" value=\"Back\"></td>\n    </tr>\n\n</table>"

/***/ }),

/***/ "./src/app/admin-manage-policy/admin-manage-policy.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-manage-policy/admin-manage-policy.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminManagePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManagePolicyComponent", function() { return AdminManagePolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminManagePolicyComponent = /** @class */ (function () {
    function AdminManagePolicyComponent(DataService, router, activatedRoute) {
        this.DataService = DataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        if (sessionStorage.roleID != 0) {
            delete sessionStorage["email"];
            delete sessionStorage["userid"];
            delete sessionStorage["roleID"];
            delete sessionStorage["userdata"];
            delete sessionStorage["isLoggedIn"];
            this.router.navigate(['Login']);
        }
    }
    AdminManagePolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.policyID = params['policyid'];
            console.log(_this.policyID);
        });
        var statusofresult = this.DataService.GetAllPolicyDataById(this.policyID);
        statusofresult.subscribe(function (result) {
            console.log(result);
            _this.PolicyData = result;
        }, function (error) {
            console.log(error);
        });
    };
    AdminManagePolicyComponent.prototype.UpdatePolicy = function () {
        var _this = this;
        var statusofresult = this.DataService.UpdatePolicy(this.PolicyData);
        console.log(this.PolicyData);
        statusofresult.subscribe(function (result) {
            console.log(result);
            _this.PolicyData = result;
            _this.router.navigate(["/Admin"]);
        }, function (error) {
            console.log(error);
        });
    };
    AdminManagePolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-manage-policy',
            template: __webpack_require__(/*! ./admin-manage-policy.component.html */ "./src/app/admin-manage-policy/admin-manage-policy.component.html"),
            styles: [__webpack_require__(/*! ./admin-manage-policy.component.css */ "./src/app/admin-manage-policy/admin-manage-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AdminManagePolicyComponent);
    return AdminManagePolicyComponent;
}());



/***/ }),

/***/ "./src/app/admin-policy-details/admin-policy-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin-policy-details/admin-policy-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-policy-details/admin-policy-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin-policy-details/admin-policy-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <h1 style=\"text-align: center;\">Admin - Online Insurance Management System</h1>\n\n  \n  \n<button type=\"button\" routerLink=\"/Admin/AddPolicy\" class=\"btn btn-info\">Add New Policy</button>\n<button type=\"button\" routerLink=\"/Admin/AddClaimTracker\" class=\"btn btn-info\">Add Claim Tracker</button>\n<button type=\"button\" routerLink=\"/Admin/AllClaimTrackers\" class=\"btn btn-info\">All Claim Trackers</button>\n<button type=\"button\" routerLink=\"/Admin/CustomerPolicyDetails\" class=\"btn btn-info\">CustomerPolicyDetails</button>\n<table class=\"table\">\n<tr>\n\n<th>Policy ID</th>\n<th>Policy Name</th>\n<th>Policy Description</th>\n<th>Years</th>\n<th>Total Insurance Amount</th>\n\n<th></th>\n\n</tr>\n   \n   <tr routerLink=\"/Admin/ManagePolicy/1\" *ngFor=\"let policy of AllPolicyData\" >\n       <td>{{policy.policyid}}</td>\n       <td>{{policy.policyname}}</td>\n       <td>{{policy.policydescription}}</td>\n       <td>{{policy.policyduration}}</td>\n       <td>{{policy.totalinsuranceamount}}</td>\n\n       \n       \n       \n  </tr>\n\n\n\n</table>\n\n\n  <div class=\"jumbotron text-center\" style=\"margin-bottom:0\">\n    <p>Footer</p>\n  </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/admin-policy-details/admin-policy-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-policy-details/admin-policy-details.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminPolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPolicyDetailsComponent", function() { return AdminPolicyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminPolicyDetailsComponent = /** @class */ (function () {
    function AdminPolicyDetailsComponent(DataService, AuthService, router) {
        this.DataService = DataService;
        this.AuthService = AuthService;
        this.router = router;
        if (sessionStorage.roleID != 0) {
            delete sessionStorage["email"];
            delete sessionStorage["userid"];
            delete sessionStorage["roleID"];
            delete sessionStorage["userdata"];
            delete sessionStorage["isLoggedIn"];
            this.router.navigate(['Login']);
        }
    }
    AdminPolicyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resultstate = this.DataService.GetAllPolicyData();
        // console.log(PolicyData.form.value)
        resultstate.subscribe(function (data) {
            // if (data.error == null) {
            // this.msg = "Successfully Added Up!!";
            console.log(data);
            _this.AllPolicyData = data;
            // }
            // else {
            //   // console.log(data);
            //   // this.msg = "Somthing went Wrong!!";
            //   // this.num = 0;
            // }
        }, function (error) {
            console.log(error);
            // this.msg = "Somthing went Wrong!!";
        });
    };
    AdminPolicyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-policy-details',
            template: __webpack_require__(/*! ./admin-policy-details.component.html */ "./src/app/admin-policy-details/admin-policy-details.component.html"),
            styles: [__webpack_require__(/*! ./admin-policy-details.component.css */ "./src/app/admin-policy-details/admin-policy-details.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminPolicyDetailsComponent);
    return AdminPolicyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-basic-centered {\n    background-color: rgb(155, 161, 161);\n    /* #292c2f */\n    color: rgb(156, 240, 131);\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    width: 100%;\n    text-align: center;\n    font: normal 18px sans-serif;\n    padding: 37px;\n    margin-top: 80px;\n}\n\nfooter {\n    position: absolute;\n    position: bottom;\n    display: block;\n}\n\n.ftlogo{\n    color: azure;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" *ngIf=\"!service.isAdmin()\">\n  <a class=\"navbar-brand\" routerLink=\"/Home\">OPMS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\" *ngIf=\"!service.isAdmin()\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\">\n        <a routerLink=\"/Home\">Home</a>\n      </li>\n      <li class=\"active\">\n        <a routerLink=\"/AboutUs\">About Us</a>\n      </li>\n      <li class=\"active\">\n        <a routerLink=\"/ContactUs\">Contact Us</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"active\" *ngIf=\"!service.isLoggedIn()\">\n        <a routerLink=\"/Login\">Login</a>\n      </li>\n      <li class=\"active\" *ngIf=\"service.isLoggedIn()\">\n        <a routerLink=\"/Profile\">Profile</a>\n      </li>\n      <li class=\"active\" *ngIf=\"service.isLoggedIn()\">\n        <a href=\"#\" (click)=\"Logout()\">Logout</a>\n      </li>\n      <li class=\"active\" *ngIf=\"!service.isLoggedIn()\">\n        <a routerLink=\"/SignUp\">SignUp</a>\n      </li>\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menu <b class=\"caret\"></b></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"Home\" *ngIf=\"service.isLoggedIn()\">DashBoard</a></li>\n          <li><a routerLink=\"Profile\" *ngIf=\"service.isLoggedIn()\">My Profile</a></li>\n          <li><a routerLink=\"HistoryofPaidPremium\" *ngIf=\"service.isLoggedIn()\">History of Paid Premium</a></li>\n          <li><a routerLink=\"ChangePassword\" *ngIf=\"service.isLoggedIn()\">Change Password</a></li>\n          <li><a routerLink=\"ClaimTracker\" *ngIf=\"service.isLoggedIn()\">Claim Tracker</a></li>\n          <li><a (click)=\"Logout()\" *ngIf=\"service.isLoggedIn()\">Logout</a></li>\n          <li><a routerLink=\"Login\" *ngIf=\"!service.isLoggedIn()\">Login</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" *ngIf=\"service.isAdmin()\">\n  <a class=\"navbar-brand\" routerLink=\"/Home\">OPMS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\" *ngIf=\"service.isAdmin()\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\">\n        <a routerLink=\"/Admin\">Home</a>\n      </li>\n      <li class=\"active\">\n        <a routerLink=\"/AboutUs\">About Us</a>\n      </li>\n      <li class=\"active\">\n        <a routerLink=\"/ContactUs\">Contact Us</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"active\" *ngIf=\"!service.isLoggedIn()\">\n        <a routerLink=\"/Login\">Login</a>\n      </li>\n      <li class=\"active\" *ngIf=\"service.isLoggedIn()\">\n        <a href=\"#\" (click)=\"Logout()\">Logout</a>\n      </li>\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menu <b class=\"caret\"></b></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/Admin/CustomerPolicyDetails\" *ngIf=\"service.isLoggedIn()\">DashBoard</a></li>\n          <li><a routerLink=\"/Admin/AddPolicy\" *ngIf=\"service.isLoggedIn()\">Add Policy</a></li>\n          <li><a routerLink=\"/Admin/AddClaimTracker\" *ngIf=\"service.isLoggedIn()\">Add Claim Tracker</a></li>\n          <li><a routerLink=\"/Admin/AllClaimTrackers\" *ngIf=\"service.isLoggedIn()\">All Claim Tracker</a></li>\n          <li><a routerLink=\"/ChangePassword\" *ngIf=\"service.isLoggedIn()\">Change Password</a></li>\n          <li><a (click)=\"Logout()\" *ngIf=\"service.isLoggedIn()\">Logout</a></li>\n          <li><a routerLink=\"Login\" *ngIf=\"!service.isLoggedIn()\">Login</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer-basic-centered\">\n  <p class=\"footer-company-motto\"><b id=\"motto\">Online Policy Management System</b></p>\n  <p class=\"footer-links\">\n\n    <a class=\"ftlogo\" href=\"/\" id=\"links\"> Home Page |</a>\n    <a class=\"ftlogo\" routerLink=\"/ContactUs\" id=\"links\"> Contact Us |</a>\n    <a class=\"ftlogo\" routerLink=\"/AboutUs\" id=\"links\"> About Us |</a>\n    <a class=\"ftlogo\" routerLink=\"/\" id=\"links\"> Visit OPMS</a> |\n    <a (click)=\"Logout()\" *ngIf=\"service.isLoggedIn()\">Logout</a>\n    <a routerLink=\"Login\" *ngIf=\"!service.isLoggedIn()\">Login</a>\n  </p>\n  <p class=\"footer-company-name\">© 2020 OPMS India. All rights reserved.</p>\n  <div class=\"align-middle text-center\" id=\"links\">\n    <h3 class=\"text-white typography-5 mb-10\">Follow Us</h3>\n    <a class=\"ftlogo\" href=\"https://www.facebook.com/\"> <img width=\"24\" height=\"24\" alt=\"Like us on Facebook\"\n        src=\"http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png\"> Facebook |</a>\n    <a class=\"ftlogo\" href=\"https://twitter.com/\"> <img width=\"67\" alt=\"Follow us on Twitter\"\n        src=\"http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png\"> Twitter |</a>\n    <a class=\"ftlogo\" href=\"https://www.instagram.com/\"><img width=\"24\" height=\"24\" alt=\"Follow us on Instagram\"\n        src=\"http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png\"> Instagram </a>\n  </div>\n\n\n\n</footer>\n\n\n\n<!-- ============================================================================================================== -->\n<!-- <div class=\"container-fluid\"> -->\n<!-- <nav class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Home\">Online Policy Management System</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" *ngIf=\"!service.isAdmin()\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a routerLink=\"/Home\">Home</a>\n        </li>\n        <li class=\"active\">\n          <a routerLink=\"/AboutUs\">About Us</a>\n        </li>\n        <li class=\"active\">\n          <a routerLink=\"/ContactUs\">Contact Us</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\" *ngIf=\"!service.isLoggedIn()\">\n          <a routerLink=\"/Login\">Login</a>\n        </li>\n        <li class=\"active\" *ngIf=\"service.isLoggedIn()\">\n          <a routerLink=\"/Profile\">Profile</a>\n        </li>\n        <li class=\"active\" *ngIf=\"service.isLoggedIn()\">\n          <a href=\"#\" (click)=\"Logout()\">Logout</a>\n        </li>\n        <li class=\"active\" *ngIf=\"!service.isLoggedIn()\">\n          <a routerLink=\"/SignUp\">SignUp</a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menu <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"Home\" *ngIf=\"service.isLoggedIn()\">DashBoard</a></li>\n            <li><a routerLink=\"Profile\" *ngIf=\"service.isLoggedIn()\">My Profile</a></li>\n            <li><a routerLink=\"HistoryofPaidPremium\" *ngIf=\"service.isLoggedIn()\">History of Paid Premium</a></li>\n            <li><a routerLink=\"ChangePassword\" *ngIf=\"service.isLoggedIn()\">Change Password</a></li>\n            <li><a routerLink=\"ClaimTracker\" *ngIf=\"service.isLoggedIn()\">Claim Tracker</a></li>\n            <li><a (click)=\"Logout()\" *ngIf=\"service.isLoggedIn()\">Logout</a></li>\n            <li><a routerLink=\"Login\" *ngIf=\"!service.isLoggedIn()\">Login</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" *ngIf=\"service.isAdmin()\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a routerLink=\"/Admin\">Home</a>\n        </li>\n        <li class=\"active\">\n          <a routerLink=\"/AboutUs\">About Us</a>\n        </li>\n        <li class=\"active\">\n          <a routerLink=\"/ContactUs\">Contact Us</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\" *ngIf=\"!service.isLoggedIn()\">\n          <a routerLink=\"/Login\">Login</a>\n        </li>\n        <li class=\"active\" *ngIf=\"service.isLoggedIn()\">\n          <a href=\"#\" (click)=\"Logout()\">Logout</a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menu <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/Admin/CustomerPolicyDetails\" *ngIf=\"service.isLoggedIn()\">DashBoard</a></li>\n            <li><a routerLink=\"/Admin/AddPolicy\" *ngIf=\"service.isLoggedIn()\">Add Policy</a></li>\n            <li><a routerLink=\"/Admin/AddClaimTracker\" *ngIf=\"service.isLoggedIn()\">Add Claim Tracker</a></li>\n            <li><a routerLink=\"/Admin/AllClaimTrackers\" *ngIf=\"service.isLoggedIn()\">All Claim Tracker</a></li>\n            <li><a routerLink=\"/ChangePassword\" *ngIf=\"service.isLoggedIn()\">Change Password</a></li>\n            <li><a (click)=\"Logout()\" *ngIf=\"service.isLoggedIn()\">Logout</a></li>\n            <li><a routerLink=\"Login\" *ngIf=\"!service.isLoggedIn()\">Login</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </nav> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.Logout = function () {
        this.service.Logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-policy/add-policy.component */ "./src/app/add-policy/add-policy.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _premium_calulator_premium_calulator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./premium-calulator/premium-calulator.component */ "./src/app/premium-calulator/premium-calulator.component.ts");
/* harmony import */ var _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pay-premium/pay-premium.component */ "./src/app/pay-premium/pay-premium.component.ts");
/* harmony import */ var _admin_add_policy_admin_add_policy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-add-policy/admin-add-policy.component */ "./src/app/admin-add-policy/admin-add-policy.component.ts");
/* harmony import */ var _admin_manage_policy_admin_manage_policy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-manage-policy/admin-manage-policy.component */ "./src/app/admin-manage-policy/admin-manage-policy.component.ts");
/* harmony import */ var _policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./policy-details/policy-details.component */ "./src/app/policy-details/policy-details.component.ts");
/* harmony import */ var _historyof_paid_premium_historyof_paid_premium_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./historyof-paid-premium/historyof-paid-premium.component */ "./src/app/historyof-paid-premium/historyof-paid-premium.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _admin_customer_policy_details_admin_customer_policy_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-customer-policy-details/admin-customer-policy-details.component */ "./src/app/admin-customer-policy-details/admin-customer-policy-details.component.ts");
/* harmony import */ var _admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin-policy-details/admin-policy-details.component */ "./src/app/admin-policy-details/admin-policy-details.component.ts");
/* harmony import */ var _claim_tracker_claim_tracker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./claim-tracker/claim-tracker.component */ "./src/app/claim-tracker/claim-tracker.component.ts");
/* harmony import */ var _admin_add_claim_tracker_admin_add_claim_tracker_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin-add-claim-tracker/admin-add-claim-tracker.component */ "./src/app/admin-add-claim-tracker/admin-add-claim-tracker.component.ts");
/* harmony import */ var _admin_all_claim_trackers_admin_all_claim_trackers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin-all-claim-trackers/admin-all-claim-trackers.component */ "./src/app/admin-all-claim-trackers/admin-all-claim-trackers.component.ts");
/* harmony import */ var _admin_edit_claim_trackers_admin_edit_claim_trackers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin-edit-claim-trackers/admin-edit-claim-trackers.component */ "./src/app/admin-edit-claim-trackers/admin-edit-claim-trackers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
                _add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_17__["AddPolicyComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__["MyProfileComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__["ChangePasswordComponent"],
                _premium_calulator_premium_calulator_component__WEBPACK_IMPORTED_MODULE_20__["PremiumCalulatorComponent"],
                _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_21__["PayPremiumComponent"],
                _admin_add_policy_admin_add_policy_component__WEBPACK_IMPORTED_MODULE_22__["AdminAddPolicyComponent"],
                _admin_manage_policy_admin_manage_policy_component__WEBPACK_IMPORTED_MODULE_23__["AdminManagePolicyComponent"],
                _policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_24__["PolicyDetailsComponent"],
                _historyof_paid_premium_historyof_paid_premium_component__WEBPACK_IMPORTED_MODULE_25__["HistoryofPaidPremiumComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__["ForgotPasswordComponent"],
                _admin_customer_policy_details_admin_customer_policy_details_component__WEBPACK_IMPORTED_MODULE_27__["AdminCustomerPolicyDetailsComponent"],
                _admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_28__["AdminPolicyDetailsComponent"],
                _claim_tracker_claim_tracker_component__WEBPACK_IMPORTED_MODULE_29__["ClaimTrackerComponent"],
                _admin_add_claim_tracker_admin_add_claim_tracker_component__WEBPACK_IMPORTED_MODULE_30__["AdminAddClaimTrackerComponent"],
                _admin_all_claim_trackers_admin_all_claim_trackers_component__WEBPACK_IMPORTED_MODULE_31__["AdminAllClaimTrackersComponent"],
                _admin_edit_claim_trackers_admin_edit_claim_trackers_component__WEBPACK_IMPORTED_MODULE_32__["AdminEditClaimTrackersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "AboutUs", component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"] },
                    { path: "AddPolicy", component: _add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_17__["AddPolicyComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "MyProfile", component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__["MyProfileComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin/AddPolicy", component: _admin_add_policy_admin_add_policy_component__WEBPACK_IMPORTED_MODULE_22__["AdminAddPolicyComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin/AddClaimTracker", component: _admin_add_claim_tracker_admin_add_claim_tracker_component__WEBPACK_IMPORTED_MODULE_30__["AdminAddClaimTrackerComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin/EditClaimTracker/:claimtrackerid", component: _admin_edit_claim_trackers_admin_edit_claim_trackers_component__WEBPACK_IMPORTED_MODULE_32__["AdminEditClaimTrackersComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin/AllClaimTrackers", component: _admin_all_claim_trackers_admin_all_claim_trackers_component__WEBPACK_IMPORTED_MODULE_31__["AdminAllClaimTrackersComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin/ManagePolicy/:policyid", component: _admin_manage_policy_admin_manage_policy_component__WEBPACK_IMPORTED_MODULE_23__["AdminManagePolicyComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin/CustomerPolicyDetails", component: _admin_customer_policy_details_admin_customer_policy_details_component__WEBPACK_IMPORTED_MODULE_27__["AdminCustomerPolicyDetailsComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Admin", component: _admin_policy_details_admin_policy_details_component__WEBPACK_IMPORTED_MODULE_28__["AdminPolicyDetailsComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "ChangePassword", component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__["ChangePasswordComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "ClaimTracker", component: _claim_tracker_claim_tracker_component__WEBPACK_IMPORTED_MODULE_29__["ClaimTrackerComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "PremiumCalculator/:policyId", component: _premium_calulator_premium_calulator_component__WEBPACK_IMPORTED_MODULE_20__["PremiumCalulatorComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "PayPremium/:premiumscheduleid", component: _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_21__["PayPremiumComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "HistoryofPaidPremium", component: _historyof_paid_premium_historyof_paid_premium_component__WEBPACK_IMPORTED_MODULE_25__["HistoryofPaidPremiumComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "Profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"] },
                    { path: "EditProfile", component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "PolicyDetails/:policyid", component: _policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_24__["PolicyDetailsComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]] },
                    { path: "ContactUs", component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"] },
                    { path: "Login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: "ForgotPassword", component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__["ForgotPasswordComponent"] },
                    { path: "SignUp", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
                    { path: "**", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
                ]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.isLoggedIn = function () {
        return (sessionStorage.getItem("isLoggedIn") == "1");
    };
    AuthService.prototype.isAdmin = function () {
        if (sessionStorage.getItem("roleID") == '0') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.canActivate = function (route, state) {
        if (this.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['Login']);
            return false;
        }
    };
    AuthService.prototype.Login = function (result_data) {
        // console.log(credentials);
        // console.log(result_data);
        // const crypto_pwd = MD5(credentials.passwd);
        // console.log(crypto_pwd);
        // console.log(result_data.passwd);
        // if (credentials.email == result_data.email &&
        //     crypto_pwd   == result_data.passwd)
        // {
        sessionStorage.setItem("isLoggedIn", "1");
        sessionStorage.setItem("email", result_data.email);
        sessionStorage.setItem("userid", result_data.userId);
        sessionStorage.setItem("roleID", result_data.roleID);
        sessionStorage.setItem("userdata", JSON.stringify(result_data));
        console.log(result_data.roleID);
        this.UserData = result_data;
        if (result_data.roleID == 0) {
            this.router.navigate(['Admin']);
        }
        else {
            this.router.navigate(['Home']);
        }
        return true;
        // }
        // else
        // {
        //   return false;
        // }
    };
    AuthService.prototype.Logout = function () {
        sessionStorage.setItem("isLoggedIn", "0");
        delete sessionStorage["email"];
        delete sessionStorage["userid"];
        delete sessionStorage["roleID"];
        delete sessionStorage["userdata"];
        delete sessionStorage["isLoggedIn"];
        this.router.navigate(['Login']);
    };
    AuthService.prototype.UserProfileData = function () {
        return this.UserData;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Change Password</h2>\n\n   \n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            <tr>\n    \n                <td><b> Password:</b></td>\n                <td>\n                    <input type=\"password\" [(ngModel)]=\"UserData.passwd\" name=\"passwd\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n    \n                <td><b>Confirm Password:</b></td>\n                <td>\n                    <input type=\"password\" [(ngModel)]=\"UserData.cnfmpassword\" name=\"cnfmpassword\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"button\" (click)=\"UpdateUserPassword()\" name=\"updtbtn\" class=\"btn btn-info\" value=\"Update Password\">\n                    <button type=\"button\" routerLink=\"/Profile\" class=\"cancelbtn\">Cancel</button>\n                           \n                </td>\n            </tr>\n        </table>\n\n\n   "

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(DataService, AuthService, router) {
        this.DataService = DataService;
        this.AuthService = AuthService;
        this.router = router;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.UserData = this.AuthService.UserProfileData();
    };
    ChangePasswordComponent.prototype.UpdateUserPassword = function () {
        var _this = this;
        var StatusOfUpdate = this.DataService.UpdateUserPassword(this.UserData);
        StatusOfUpdate.subscribe(function (result) {
            if (result == 1) {
                _this.router.navigate(['Profile']);
            }
            else {
                console.log(result);
                _this.msg = "Something went wrong!";
            }
        }, function (error) {
            console.log(error);
        });
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/claim-tracker/claim-tracker.component.css":
/*!***********************************************************!*\
  !*** ./src/app/claim-tracker/claim-tracker.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/claim-tracker/claim-tracker.component.html":
/*!************************************************************!*\
  !*** ./src/app/claim-tracker/claim-tracker.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <h1 style=\"text-align: center;\">Online Policy Management System</h1>\n\n  \n<marquee>New updates:Insurance Policy</marquee>       \n<button type=\"button\" routerLink=\"/\" class=\"btn btn-info\">DashBoard</button><br>\n<table class=\"table\">\n<tr>\n<th>Claim ID</th>\n<th>Claim Status</th>\n<th>Claim remarks</th>\n<!-- <th>Premium Amount</th> -->\n<!-- <th>Total Premium Count </th> -->\n<th></th>\n\n</tr>\n   <!-- <tr *ngFor=\"let psdata of this.CustPolicyData.premiumschedule.historyofpaidpremium\"> -->\n   \n    <tr  *ngFor=\"let ctdata of this.ClaimTrackerData\">\n     \n       <td>{{ctdata.ctid}}</td>\n       <td>{{ctdata.claimstatus}}</td>\n       <td>{{ctdata.remarks}}</td>\n       <!-- <td>{{psdata.historyofpaidpremium.paiddate | date:'yyyy-MM-dd HH:mm:ss' }}</td> -->\n       <!-- <td>{{this.custdata.premiumamout}}</td> -->\n       <!-- <td>14</td> -->\n  \n    </tr>\n       \n       \n  \n\n   <!-- </tr> -->\n\n</table>\n\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/claim-tracker/claim-tracker.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/claim-tracker/claim-tracker.component.ts ***!
  \**********************************************************/
/*! exports provided: ClaimTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimTrackerComponent", function() { return ClaimTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClaimTrackerComponent = /** @class */ (function () {
    function ClaimTrackerComponent(service, DataService) {
        this.service = service;
        this.DataService = DataService;
    }
    ClaimTrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var StatusOfPremiumSearch = this.DataService.GetClaimTrackerById(sessionStorage.userid);
        StatusOfPremiumSearch.subscribe(function (result) {
            //  console.log(result);
            //  let id =element.cpid;
            //  this.PremiumScheduleData.push(result);
            _this.ClaimTrackerData = result;
            // elementps.historyofpaidpremium=result
            // console.log(this.HistoryOfPaidPremiums)
        }, function (error) {
            console.log(error);
        });
    };
    ClaimTrackerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-claim-tracker',
            template: __webpack_require__(/*! ./claim-tracker.component.html */ "./src/app/claim-tracker/claim-tracker.component.html"),
            styles: [__webpack_require__(/*! ./claim-tracker.component.css */ "./src/app/claim-tracker/claim-tracker.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ClaimTrackerComponent);
    return ClaimTrackerComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 290px;\n    /* margin: auto;  */\n    text-align: center;\n    top: 40px;\n  }\n  \n  .title {\n    color: grey;\n    font-size: 18px;\n  }\n  \n  button {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n  }\n  \n  a {\n    text-decoration: none;\n    font-size: 22px;\n    color: black;\n  }\n  \n  button:hover, a:hover {\n    opacity: 0.7;\n  }\n  \n  .bg-cn {\n    min-height: 552px;\n    background-image: url(\"/assets/images/abt1.jpg\");\n    background-size: cover;\n  }\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<div class=\"bg-cn\" style=\"height: 100%;\">\n     <table style=\"width: 100%;\">\n         <tr>\n             <td>\n                <div class=\"card\" style=\"margin-left: 40%;\">\n                    <img src=\"/src/assets/avt2.jpg\" alt=\"Akash\" style=\"height: 250px; width:100%;\">\n                    <h3>Akash Wadhawane</h3>\n                    <p class=\"title\">Developer,CDAC</p>\n                    <p>Sunbeam Infotech</p>\n                    <!-- <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n                    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\n                    <p>\n                    PRN    : 190840820111 <br />\n                    Course : PG-DAC       <br />\n                    Mobile : 8149281827     <br />\n                    Email  : akash3699@gmail.com   <br />\n                    </p>\n                    <!-- <p><button>Contact</button></p> -->\n                    </div>\n             </td>\n         </tr>\n     </table>\n    </div>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    // serverurl:string="http://localhost:8080/DacAug2019/"
    function DataService(http) {
        this.http = http;
        this.serverurl = "http://13.233.187.155:8080/DacAug2019/";
    }
    DataService.prototype.LoginData = function (user) {
        return this.http.post(this.serverurl + "user/login", user);
    };
    DataService.prototype.SignupData = function (signup_data) {
        return this.http.post(this.serverurl + "user/register", signup_data);
    };
    DataService.prototype.AddPolicyData = function (policy_data) {
        return this.http.post(this.serverurl + "policy/register", policy_data);
    };
    DataService.prototype.ForgotUserPasswordData = function (emaildata) {
        return this.http.post(this.serverurl + "user/forgotpassword", emaildata);
    };
    DataService.prototype.UserProfileData = function (userid) {
        return this.http.get(this.serverurl + "user/userdetails/" + userid);
    };
    DataService.prototype.GetAllPolicyData = function () {
        return this.http.get(this.serverurl + "policy/allpolicies");
    };
    DataService.prototype.GetAllUsersPolicyData = function () {
        return this.http.get(this.serverurl + "user/alluserpolicydetails");
    };
    DataService.prototype.GetAllPolicyDataById = function (policyid) {
        return this.http.get(this.serverurl + "policy/" + policyid);
    };
    DataService.prototype.BuyPolicy = function (UserPolicyData) {
        return this.http.post(this.serverurl + "user/buypolicy", UserPolicyData);
    };
    DataService.prototype.UpdatePolicy = function (PolicyData) {
        return this.http.post(this.serverurl + "policy/update", PolicyData);
    };
    DataService.prototype.GetCustPolicyData = function (Userid) {
        return this.http.get(this.serverurl + "user/userpolicydetails/" + Userid);
    };
    DataService.prototype.GetCustPolicyDataByPremiumScheduleId = function (PremiumScheduleId) {
        return this.http.get(this.serverurl + "custpolicy/getcustpolicydetailsbypremiumschedule/" + PremiumScheduleId);
    };
    DataService.prototype.GetCustPolicyDataByCustPolicyId = function (CustPolicyId) {
        return this.http.get(this.serverurl + "custpolicy/getnextpremiumschedulebycustpolicyid/" + CustPolicyId);
    };
    // GetUserByUserId(uname: any)
    // {
    //   return this.http.get("http://localhost:4000/editprofile/" + uname);
    // }
    DataService.prototype.UpdateUserData = function (UserData) {
        return this.http.post(this.serverurl + "user/updateuserdetails/" + UserData.userId, UserData);
    };
    DataService.prototype.UpdateUserPassword = function (UserData) {
        return this.http.post(this.serverurl + "user/userdetails/changepasswd/" + UserData.userId, UserData);
    };
    DataService.prototype.GetCustPolicyPremiumData = function (CustPolicyId) {
        return this.http.get(this.serverurl + "custpolicy/getnextpremiumschedule/" + CustPolicyId);
    };
    DataService.prototype.PayCustPolicyPremium = function (CustPolicyId) {
        return this.http.get(this.serverurl + "custpolicy/paynextpremiumschedule/" + CustPolicyId);
    };
    DataService.prototype.GetPaidDateByPremiumSchedule = function (PremiumScheduleId) {
        return this.http.get(this.serverurl + "custpolicy/gethistoryofpaidpremiumbypremiumscheduleid/" + PremiumScheduleId);
    };
    DataService.prototype.GetClaimTrackerById = function (Userid) {
        return this.http.get(this.serverurl + "user/userclaimtrackerdetails/" + Userid);
    };
    DataService.prototype.GetClaimTrackerByCTId = function (CTid) {
        return this.http.get(this.serverurl + "user/userclaimtrackerdetailsbyid/" + CTid);
    };
    DataService.prototype.AddClaimTrackerById = function (Userid, ClaimTrackerData) {
        return this.http.post(this.serverurl + "user/userclaimtrackerdetails/" + ClaimTrackerData.userId, ClaimTrackerData);
    };
    DataService.prototype.UpdateClaimTrackerById = function (ClaimTrackerId, ClaimTrackerData) {
        return this.http.post(this.serverurl + "user/userclaimtrackerdetailsbyid/" + ClaimTrackerData.ctid, ClaimTrackerData);
    };
    DataService.prototype.GetAllClaimTrackers = function () {
        return this.http.get(this.serverurl + "user/userallclaimtrackerdetails");
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  width: 30%;\n}"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1><b>Edit Profile</b></h1>\n  <!-- <label for=\"userId\">UserId</label> -->\n  <input [(ngModel)]=\"UserData.userId\" hidden readonly type=\"text\" class=\"form-control\" id=\"userId\" name=\"userId\">\n  <label for=\"email\">Email Address</label>\n  <input [(ngModel)]=\"UserData.email\" readonly type=\"text\" class=\"form-control\" id=\"email\" name=\"email\">\n  <label for=\"fname\">Fisrt Name</label>\n  <input [(ngModel)]=\"UserData.fname\" placeholder=\"Enter First Name\" type=\"text\" class=\"form-control\" id=\"fname\"\n    name=\"fname\">\n  <label for=\"mname\">Middle Name</label>\n  <input [(ngModel)]=\"UserData.mname\" type=\"text\" placeholder=\"Enter Middle Name\" class=\"form-control\" id=\"mname\"\n    name=\"mname\">\n  <label for=\"lname\">Last Name</label>\n  <input [(ngModel)]=\"UserData.lname\" type=\"text\" placeholder=\"Enter Last Name\" class=\"form-control\" id=\"lname\"\n    name=\"lname\">\n  <label for=\"nname\">Nominee Name</label>\n  <input [(ngModel)]=\"UserData.nname\" type=\"text\" placeholder=\"Enter Nominee Name\" class=\"form-control\" id=\"nname\"\n    name=\"nname\">\n  <label for=\"nrelation\">Nominee Relation</label>\n  <input [(ngModel)]=\"UserData.nrelation\" type=\"text\" placeholder=\"Enter Nominee Relation\" class=\"form-control\"\n    id=\"nrelation\" name=\"nrelation\">\n  <label for=\"mobile\">Phone Number</label>\n  <input [(ngModel)]=\"UserData.mobile\" style=\" margin: 5px 0px;\" placeholder=\"Enter Mobile No\" type=\"text\"\n    class=\"form-control\" id=\"mobile\" name=\"mobile\">\n  <label for=\"dob\">Date of Birth: {{this.dob |  date:'yyyy-MM-dd'}}</label>\n  <input [(ngModel)]=\"UserData.dob\" type=\"date\" class=\"form-control\" id=\"dob\" name=\"dob\">\n  <label for=\"gender\">Gender</label>\n  <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"UserData.gender\" name=\"gender\">\n    <option selected>Choose...</option>\n    <option [value]=\"MALE\">MALE</option>\n    <option [value]=\"FEMALE\">FEMALE</option>\n    <option [value]=\"OTHER\">OTHER</option>\n  </select>\n  <button type=\"button\" (click)=\"UpdateUserData()\" class=\"btn btn-primary mt-4\">Update</button>\n  <button type=\"button\" routerLink=\"/Profile\" class=\"btn btn-danger mt-4 ml-5\">Cancel</button>\n  <span>\n    {{msg}}\n  </span>\n</div>\n\n\n<!-- <div class=\"container\">\n  <form>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail4\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword4\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword4\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n  </form>\n</div> -->"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(routes, DataService, router) {
        this.routes = routes;
        this.DataService = DataService;
        this.router = router;
        this.msg = "";
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var EditParas = this.routes.paramMap;
        EditParas.subscribe(function (params) {
            var userId = sessionStorage.userid;
            var StatusOfUserSearched = _this.DataService.UserProfileData(userId);
            StatusOfUserSearched.subscribe(function (result) {
                // result.dob= new DatePipe(result.dob);
                _this.dob = result.dob;
                _this.UserData = result;
                console.log(_this.UserData);
            });
        });
    };
    EditProfileComponent.prototype.UpdateUserData = function () {
        var _this = this;
        var StatusOfUpdate = this.DataService.UpdateUserData(this.UserData);
        StatusOfUpdate.subscribe(function (result) {
            if (result == 1) {
                _this.router.navigate(['Profile']);
            }
            else {
                console.log(result);
                _this.msg = "Something went wrong!";
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Forgot Password</h2>\n\n    <form  #myForm=\"ngForm\" (ngSubmit)=\"ForgotPassword(myForm)\">\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            <tr>\n    \n                <td><b> Enter Email:</b></td>\n                <td>\n                    <input type=\"email\" required  ngModel name=\"email\" placeholder=\"Enter Email Address\">\n                </td>\n            </tr>\n    \n           \n    \n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"submit\"   name=\"updtbtn\" class=\"btn btn-info\" value=\"Get SignIn Link\">\n    \n                           \n                </td>\n\n                {{msg}}\n            </tr>\n        </table>\n\n\n    </form>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(DataService, router) {
        this.DataService = DataService;
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.ForgotPassword = function (data) {
        var _this = this;
        if (data.form.value.email == undefined || data.form.value.email == null || data.form.value.email == "") {
            console.log(data.form.value.email);
            this.msg = "Enter Valid Email Address";
        }
        else {
            console.log(data.form.value.email);
            var StatusofResult = this.DataService.ForgotUserPasswordData(data.form.value.email);
            StatusofResult.subscribe(function (result) {
                console.log(result);
                if (result == 1) {
                    window.alert("Successfully Sent Email !! Please Check Email");
                    _this.router.navigate(["/Login"]);
                }
                else {
                    window.alert("Something Went Wrong!! in Finding User details");
                }
            }, function (error) {
                console.log(error);
                window.alert("Something Went Wrong!! in Finding User details");
            });
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/historyof-paid-premium/historyof-paid-premium.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/historyof-paid-premium/historyof-paid-premium.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/historyof-paid-premium/historyof-paid-premium.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/historyof-paid-premium/historyof-paid-premium.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <h1 style=\"text-align: center;\">Online Policy Management System</h1>\n\n  \n<marquee>New updates:Insurance Policy</marquee>       \n<button type=\"button\" routerLink=\"/\" class=\"btn btn-info\">DashBoard</button><br>\n<table class=\"table\">\n<tr>\n<th>Policy ID</th>\n<th>Policy Name</th>\n<th>Paid Date And Time</th>\n<th>Premium Amount</th>\n<!-- <th>Total Premium Count </th> -->\n<th></th>\n\n</tr>\n   <!-- <tr *ngFor=\"let psdata of this.CustPolicyData.premiumschedule.historyofpaidpremium\"> -->\n   <ng-container *ngFor=\"let custdata of CustPolicyData;let i=index\">\n    <tr  *ngFor=\"let psdata of custdata.premiumschedule\">\n       <ng-container *ngIf=\"psdata.historyofpaidpremium.paiddate\">\n       <td>{{this.custdata.policyid.policyid}}</td>\n       <td>{{this.custdata.policyid.policyname}}</td>\n       <td>{{psdata.historyofpaidpremium.paiddate | date:'yyyy-MM-dd HH:mm:ss' }}</td>\n       <td>{{this.custdata.premiumamout}}</td>\n       <!-- <td>14</td> -->\n      </ng-container>\n    </tr>\n       \n       \n  </ng-container>\n\n   <!-- </tr> -->\n\n</table>\n\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/historyof-paid-premium/historyof-paid-premium.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/historyof-paid-premium/historyof-paid-premium.component.ts ***!
  \****************************************************************************/
/*! exports provided: HistoryofPaidPremiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryofPaidPremiumComponent", function() { return HistoryofPaidPremiumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryofPaidPremiumComponent = /** @class */ (function () {
    function HistoryofPaidPremiumComponent(service, DataService) {
        this.service = service;
        this.DataService = DataService;
        this.HistoryOfPaidPremiums = [];
    }
    HistoryofPaidPremiumComponent.prototype.ngOnInit = function () {
        var _this = this;
        var StatusOfSearch = this.DataService.GetCustPolicyData(sessionStorage.userid);
        StatusOfSearch.subscribe(function (result) {
            console.log(result);
            _this.CustPolicyData = result;
            _this.CustPolicyData.forEach(function (elementcp) {
                elementcp.premiumschedule.forEach(function (elementps) {
                    // console.log(elementps)
                    var StatusOfPremiumSearch = _this.DataService.GetPaidDateByPremiumSchedule(elementps.premiumscheduleid);
                    StatusOfPremiumSearch.subscribe(function (result) {
                        //  console.log(result);
                        //  let id =element.cpid;
                        //  this.PremiumScheduleData.push(result);
                        _this.HistoryOfPaidPremiums += JSON.stringify(result);
                        elementps.historyofpaidpremium = result;
                        // console.log(this.HistoryOfPaidPremiums)
                    }, function (error) {
                        console.log(error);
                    });
                });
            });
            console.log(_this.CustPolicyData);
        }, function (error) {
            console.log(error);
            _this.HistoryOfPaidPremiums = JSON.parse(_this.HistoryOfPaidPremiums);
            console.log(_this.HistoryOfPaidPremiums);
        });
    };
    HistoryofPaidPremiumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historyof-paid-premium',
            template: __webpack_require__(/*! ./historyof-paid-premium.component.html */ "./src/app/historyof-paid-premium/historyof-paid-premium.component.html"),
            styles: [__webpack_require__(/*! ./historyof-paid-premium.component.css */ "./src/app/historyof-paid-premium/historyof-paid-premium.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HistoryofPaidPremiumComponent);
    return HistoryofPaidPremiumComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fakeimg {\n  height: 200px;\n  background-color:rgb(146, 146, 253) ;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <h1 style=\"text-align: center;\">Online Insurance Management System</h1>\n\n\n  <marquee>New updates:Insurance Policy</marquee>\n  <button type=\"button\" routerLink=\"/AddPolicy\" class=\"btn btn-info\">Buy New Policy</button><br>\n  <table class=\"table table-hover\">\n      <thead>\n    <tr>\n      <th scope=\"col\">Policy ID</th>\n      <th scope=\"col\">Policy Name</th>\n      <th scope=\"col\">Policy Decription</th>\n      <th scope=\"col\">Years</th>\n      <th scope=\"col\">Buy Date</th>\n      <th scope=\"col\">Premium Amount</th>\n      <th scope=\"col\">Paid Premium Count</th>\n      <th scope=\"col\">Total Insurance Amount </th>\n      <th scope=\"col\">Next Premium Date </th>\n      <th scope=\"col\">Premium Payment Frequency</th>\n      <th scope=\"col\">Pay Premium</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let custdata of CustPolicyData\" routerLink=\"/PolicyDetails/{{this.custdata.policyid.policyid}}\">\n      <!-- <ng-container *ngFor=\"let psdata of PremiumScheduleData\"> -->\n      <td>{{this.custdata.policyid.policyid}}</td>\n      <td>{{this.custdata.policyid.policyname}}</td>\n      <td>{{this.custdata.policyid.policydescription}}</td>\n      <td>{{this.custdata.policyid.policyduration}}</td>\n      <td>{{this.custdata.buydate  |  date:'yyyy-MM-dd'}}</td>\n      <td>{{this.custdata.premiumamout}}</td>\n      <td>{{this.custdata.paidpremiumcount}}</td>\n      <td>{{this.custdata.policyid.totalinsuranceamount}}</td>\n      <td>{{this.custdata.premiumschedule.premiumdate  |  date:'yyyy-MM-dd' }}</td>\n      <td>{{this.custdata.ps}}</td>\n      <td *ngIf=\"this.custdata.premiumschedule.premiumdate\"><input type=\"button\" class=\"btn btn-info\"\n          routerLink=\"/PayPremium/{{this.custdata.premiumschedule.premiumscheduleid}}\" value=\"Pay Premium\" /></td>\n      <td *ngIf=\"!this.custdata.premiumschedule.premiumdate\">All Premiums are Paid</td>\n      <!-- </ng-container> -->\n      <!-- *ngIf=\"this.custdata.premiumschedule.premiumdate\" -->\n    </tr>\n    <tbody>\n\n\n  </table>\n\n\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, DataService, router) {
        this.service = service;
        this.DataService = DataService;
        this.router = router;
        if (this.service.isAdmin()) {
            this.router.navigate(['Admin']);
        }
        else {
            this.router.navigate(['Home']);
        }
    }
    HomeComponent.prototype.GetCustPolicyData = function () {
        return this.CustPolicyData;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var StatusOfSearch = this.DataService.GetCustPolicyData(sessionStorage.userid);
        StatusOfSearch.subscribe(function (result) {
            console.log(result);
            _this.CustPolicyData = result;
            _this.CustPolicyData.forEach(function (element) {
                var StatusOfPremiumSearch = _this.DataService.GetCustPolicyDataByCustPolicyId(element.cpid);
                StatusOfPremiumSearch.subscribe(function (result) {
                    console.log(result);
                    //  let id =element.cpid;
                    //  this.PremiumScheduleData.push(result);
                    element.premiumschedule = result;
                    console.log(_this.CustPolicyData);
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  width: 350px;\n  padding: 20px;\n  padding-top: 25px;\n  box-sizing: border-box;\n  box-shadow: 0 15px 25px rgb(23, 25, 26);\n  border-radius: 10px;\n}\n\n.copyright\n{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  color:black;\n  padding: 1.4em;\n  text-align: center;\n}\n\n.form-control\n{\n  width: 85%;\n}\n\nh4\n{\n  text-align: center;\n}\n\n.form-group{\n  margin-left: 25px ;\n}\n\n.btn{\n  margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <form role=\"form\" #myForm=\"ngForm\" (ngSubmit)=\"FormValidation(myForm.value)\">\n        <div class=\"form-group\">\n            <label for=\"inputEmail4\">Email</label>\n            <input type=\"text\" ngModel name=\"email\" pattern=\"[[a-zA-Z0-9_\\-\\.]+@([a-zA-Z0-9_\\-\\.]+)\\.[a-zA-Z]{2,5}]*\"\n                #Vemail=\"ngModel\" class=\"form-control\" [class.alert-danger]=\" Vemail.touched   && Vemail.invalid\"\n                id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n            <div *ngIf=\"Vemail.touched && Vemail.invalid\" style=\"width:20px;height: 20px;\"\n                class=\"spinner-border text-danger\" role=\"status\">\n                <span class=\"sr-only\">...</span>\n            </div>\n                 <div class=\"alert-danger\" *ngIf=\"Vemail.touched && Vemail.invalid\" style=\"width:50%;\">Email is not valid\n            </div>\n            <div class=\"alert-success\" *ngIf=\"Vemail.touched && Vemail.valid\" style=\"width: 50%;\">OK</div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"pwd\"><b>Password</b></label><br>\n            <input ngModel type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" name=\"passwd\">\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n            <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/SignUp\">Sign Up</button>\n        </div>\n            <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-secondory\" routerLink=\"/ForgotPassword\">Forgot Password</button>\n        </div>\n        <div class=\"form-group\" style=\"color: red;\">\n            <h4><b>{{msg}}</b></h4>\n          </div>\n      </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth_service, Data_service, router) {
        this.Auth_service = Auth_service;
        this.Data_service = Data_service;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.FormValidation = function (credentials) {
        if (credentials.email == "" || credentials.passwd == "") {
            this.msg = "Username/Password is required!!";
        }
        else {
            this.Login(credentials);
        }
    };
    LoginComponent.prototype.Login = function (credentials) {
        var _this = this;
        var isLoggedIn = false;
        var FindUser = this.Data_service.LoginData(credentials);
        FindUser.subscribe(function (result) {
            console.log(result);
            console.log(result.length);
            //if(result.affectedRows != 0)
            // if(result.length != 0)
            // {
            // this.user = result[0];
            isLoggedIn = true;
            if (isLoggedIn) {
                _this.Auth_service.Login(result);
                _this.msg = "";
                _this.router.navigate(['Home']);
            }
            else {
                _this.msg = " Username / Password is wrong!!";
            }
            // }
            // else
            // {
            //     this.msg = " Username / Password is wrong!!";
            // }
        }, function (error) {
            _this.msg = "Username / Password is wrong!!";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Edit Profile</h2>\n\n    <form action=\"editprofile.php\"  method=\"POST\">\n      <div class=\"container\" >\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            <tr>\n                <td><b>First Name :</b></td>\n                <td>\n                    <input type=\"text\" name=\"fname\" value=\"\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n                <td><b>Middle Name :</b></td>\n                <td>\n                    <input type=\"text\" name=\"mname\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>Last Name :</b></td>\n                <td>\n                    <input type=\"text\" name=\"lname\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>Nominee Name :</b></td>\n                <td>\n                    <input type=\"text\" name=\"nname\" value=\"\" >\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>Nominee Relation :</b></td>\n                <td>\n                    <input type=\"text\" name=\"nrelation\" value=\"\">\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>Date of Birth :</b></td>\n                <td>\n                    <input type=\"date\" name=\"dob\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>Gender :</b></td>\n                <td>\n                    <input type=\"radio\" name=\"genderData\" value=\"M\" value=\"\" required=\"required\">Male\n                    <input type=\"radio\" name=\"genderData\" value=\"F\">Female\n                    <input type=\"radio\" name=\"genderData\" value=\"O\">Other\n                </td>\n            \n            </tr>\n\n            <tr>\n                <td><b>Mobile:</b></td>\n                <td>\n                    <input type=\"number\" name=\"mobile\" value=\"\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n                <td><b>Email:</b></td>\n                <td>\n                    <input type=\"email\" name=\"email\" value=\"\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n                <td><b>Address :</b></td>\n                <td>\n                    <input type=\"text\" name=\"address\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>City :</b></td>\n                <td>\n                    <input type=\"text\" name=\"city\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n    \n            <tr>\n                <td><b>State :</b></td>\n                <td>\n                    <input type=\"text\" name=\"state\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n\n            <tr>\n                <td><b>Pincode :</b></td>\n                <td>\n                    <input type=\"number\" name=\"pincode\" value=\"\" required=\"required\">\n                </td>\n            \n            </tr>\n    \n    \n            <tr>\n    \n                <td><b>Password:</b></td>\n                <td>\n                    <input type=\"password\" name=\"password\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"submit\" name=\"updtbtn\" class=\"btn btn-info\" value=\"Update Profile\">\n    \n                           \n                </td>\n            </tr>\n        </table>\n\n      </div>\n    </form>"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pay-premium/pay-premium.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pay-premium/pay-premium.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pay-premium/pay-premium.component.html":
/*!********************************************************!*\
  !*** ./src/app/pay-premium/pay-premium.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Pay Premium</h2>\n\n    <form >\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            <!-- <tr>\n    \n                <td><b> Policy Name:</b></td>\n                <td>\n                    <input type=\"text\" [(ngModel)]=\"PremiumSchedule.policyduration\" name=\"PolicyName\" disabled value=\"Market Plus III\" required=\"required\">\n                </td>\n            </tr> -->\n    \n            <tr>\n    \n                <td><b>Premium Amount</b></td>\n                <td>\n                    <input type=\"number\" [(ngModel)]=\"PolicyData.premiumamout\" disabled name=\"premiumamout\" required=\"required\">\n                </td>\n            </tr>\n\n            <tr>\n    \n              <td><b>Premium Date</b></td>\n              <td>\n                  {{PremiumSchedule.premiumdate |  date:'yyyy-MM-dd'}}\n              </td>\n          </tr>\n    \n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"submit\" (click)=\"PayPremiumNow()\" name=\"paybtn\" class=\"btn btn-info\" value=\"Pay Premium\">\n    \n                           \n                </td>\n            </tr>\n        </table>\n\n\n    </form>"

/***/ }),

/***/ "./src/app/pay-premium/pay-premium.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pay-premium/pay-premium.component.ts ***!
  \******************************************************/
/*! exports provided: PayPremiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPremiumComponent", function() { return PayPremiumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayPremiumComponent = /** @class */ (function () {
    function PayPremiumComponent(DataService, router, activatedRoute) {
        this.DataService = DataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PayPremiumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.PremiumScheduleId = params['premiumscheduleid'];
            console.log(_this.PremiumScheduleId);
        });
        var statusofresult = this.DataService.GetCustPolicyPremiumData(this.PremiumScheduleId);
        statusofresult.subscribe(function (result) {
            console.log(result);
            _this.PremiumSchedule = result;
        }, function (error) {
            console.log(error);
        });
        var statusofpolicyresult = this.DataService.GetCustPolicyDataByPremiumScheduleId(this.PremiumScheduleId);
        statusofpolicyresult.subscribe(function (result) {
            console.log(result);
            _this.PolicyData = result;
        }, function (error) {
            console.log(error);
        });
    };
    PayPremiumComponent.prototype.PayPremiumNow = function () {
        var _this = this;
        var statusofpolicyresult = this.DataService.PayCustPolicyPremium(this.PremiumScheduleId);
        statusofpolicyresult.subscribe(function (result) {
            console.log(result);
            window.alert(JSON.stringify(result));
            _this.router.navigate(["Home"]);
        }, function (error) {
            console.log(error);
        });
    };
    PayPremiumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-premium',
            template: __webpack_require__(/*! ./pay-premium.component.html */ "./src/app/pay-premium/pay-premium.component.html"),
            styles: [__webpack_require__(/*! ./pay-premium.component.css */ "./src/app/pay-premium/pay-premium.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PayPremiumComponent);
    return PayPremiumComponent;
}());



/***/ }),

/***/ "./src/app/policy-details/policy-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/policy-details/policy-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/policy-details/policy-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/policy-details/policy-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Policy Details</h2>\n\n    \n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n    \n            <tr>\n    \n                <td><b> Policy Name:</b></td>\n                <td>\n                    <input type=\"text\"  name=\"policyname\" value=\"{{this.PolicyData.policyname}}\" required=\"required\">\n                </td>\n            </tr>\n    \n            <tr>\n    \n                <td><b>Benefits:</b></td>\n                <td>\n                    \n                    <textarea name=\"policydescription\" id=\"policydescription\" class=\"form-control\" rows=\"3\" required=\"required\">{{this.PolicyData.policydescription}}</textarea>\n                    \n                    <!-- <input type=\"text\" disabled value=\"{{this.PolicyData.policydescription}}\" name=\"policydescription\" required=\"required\"> -->\n                </td>\n            </tr>\n\n            <tr>\n    \n                <td><b>Years:</b></td>\n                <td>\n                    <input type=\"Number\"  value=\"{{this.PolicyData.policyduration}}\" name=\"policyduration\" required=\"required\">\n                </td>\n            </tr>\n\n            <tr>\n    \n                <td><b>Amount for Insurance:</b></td>\n                <td>\n                    <input type=\"Number\"  value=\"{{this.PolicyData.totalinsuranceamount}}\" name=\"totalinsuranceamount\" required=\"required\">\n                </td>\n            </tr>\n            <tr>\n                    <input type=\"button\" routerLink=\"/Home\"  name=\"bckbtn\" class=\"btn btn-info\" value=\"Back\">\n            </tr>\n            \n        </table>\n\n"

/***/ }),

/***/ "./src/app/policy-details/policy-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/policy-details/policy-details.component.ts ***!
  \************************************************************/
/*! exports provided: PolicyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyDetailsComponent", function() { return PolicyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PolicyDetailsComponent = /** @class */ (function () {
    function PolicyDetailsComponent(DataService, activatedRoute) {
        this.DataService = DataService;
        this.activatedRoute = activatedRoute;
    }
    PolicyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.policyID = params['policyid'];
            console.log(_this.policyID);
        });
        var StatusOfSearch = this.DataService.GetAllPolicyDataById(this.policyID);
        StatusOfSearch.subscribe(function (result) {
            console.log(result);
            _this.PolicyData = result;
        }, function (error) {
            console.log(error);
        });
    };
    PolicyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-details',
            template: __webpack_require__(/*! ./policy-details.component.html */ "./src/app/policy-details/policy-details.component.html"),
            styles: [__webpack_require__(/*! ./policy-details.component.css */ "./src/app/policy-details/policy-details.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PolicyDetailsComponent);
    return PolicyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/premium-calulator/premium-calulator.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/premium-calulator/premium-calulator.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/premium-calulator/premium-calulator.component.html":
/*!********************************************************************!*\
  !*** ./src/app/premium-calulator/premium-calulator.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align:center\">Premium Calculator</h2>\n\n    <form >\n      <div class=\"container\" >\n        <table style=\"align-content: center;margin-left:auto;margin-right:auto;\" height=\"300px\" width=\"400px\" >\n            \n\n          <tr>\n              <td><b> Policy Name:</b></td>\n              <td>\n             <input type=\"text\" [(ngModel)]=\"PolicyData.policyname\" readonly name=\"policyname\" id=\"policyname\" >\n             </td>\n              \n          </tr>\n            <tr>\n                <td><b>Payment Frequency:</b></td>\n               <td>\n               <select style=\"background-color: aliceblue;\" name=\"ps\" [(ngModel)]=\"PolicyData.ps\" placeholder=\"Select Premium Frequency\" required id=\"ps\" class=\"form-control\">\n                    <!-- <option value=\"\" style=\"color:black;\" disabled selected hidden>Select your option</option>  -->\n                <option value=\"YEARLY\" >Yearly</option>\n                 <option value=\"MONTHLY\">Monthly</option>\n                 <option value=\"WEEKLY\">Weekly</option>\n               </select>\n              </td>\n            \n            </tr>\n    \n            \n    \n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"button\" (click)=\"CalculatePremium()\"  name=\"calbtn\" class=\"btn btn-info\" value=\"Calculate Premium\">\n    \n                           \n                </td>\n            </tr>\n\n            <tr>\n    \n                <td><b>Premium Amount:</b></td>\n                <td>\n                    <input type=\"number\" [(ngModel)]=\"PolicyData.premiumamout\" placeholder=\"Premium Amount\" disabled name=\"premiumamout\" required>\n                </td>\n            </tr>\n\n            <tr>\n    \n                <td><b>Premium Count:</b></td>\n                <td>\n                    <input type=\"number\" [(ngModel)]=\"PolicyData.totalpremiumcount\" placeholder=\"Total Premium Count\" disabled name=\"totalpremiumcount\" required>\n                </td>\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" style=\"text-align:center\">\n                    <input type=\"button\" (click)=\"BuyPolicy()\" name=\"buybtn\" class=\"btn btn-info\" value=\"Buy Policy\">\n    \n                    <input type=\"button\" routerLink=\"/Home\"  name=\"cancel\" class=\"btn btn\" value=\"Cancel\"> \n                    \n                </td>\n            </tr>\n        </table>\n        {{msg}}\n      </div>\n    </form>"

/***/ }),

/***/ "./src/app/premium-calulator/premium-calulator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/premium-calulator/premium-calulator.component.ts ***!
  \******************************************************************/
/*! exports provided: PremiumCalulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumCalulatorComponent", function() { return PremiumCalulatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PremiumCalulatorComponent = /** @class */ (function () {
    function PremiumCalulatorComponent(route, DataService, router) {
        var _this = this;
        this.route = route;
        this.DataService = DataService;
        this.router = router;
        console.log('Called Constructor');
        this.route.queryParams.subscribe(function (params) {
            _this.param1 = _this.route.snapshot.params.policyId;
            console.log(_this.param1);
        });
    }
    PremiumCalulatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var StatusOfUpdate = this.DataService.GetAllPolicyDataById(this.param1);
        StatusOfUpdate.subscribe(function (result) {
            _this.PolicyData = result;
            console.log(_this.PolicyData);
        }, function (error) {
            console.log(error);
        });
    };
    PremiumCalulatorComponent.prototype.CalculatePremium = function () {
        var daysofyears = this.PolicyData.policyduration * 365;
        if (this.PolicyData.ps == "" || this.PolicyData.ps == null || this.PolicyData.ps == undefined) {
            this.msg = "Payment Frequency is required";
        }
        else {
            this.msg = "";
            if (this.PolicyData.ps == "YEARLY") {
                this.PolicyData.totalpremiumcount = daysofyears / 365;
            }
            else {
                if (this.PolicyData.ps == "MONTHLY") {
                    this.PolicyData.totalpremiumcount = daysofyears / 12;
                }
                else {
                    if (this.PolicyData.ps == "WEEKLY") {
                        this.PolicyData.totalpremiumcount = daysofyears / 7;
                    }
                }
            }
        }
        this.PolicyData.premiumamout = this.PolicyData.totalinsuranceamount / this.PolicyData.totalpremiumcount;
    };
    PremiumCalulatorComponent.prototype.BuyPolicy = function () {
        var _this = this;
        if (this.PolicyData.premiumamout == "" || this.PolicyData.premiumamout == undefined ||
            this.PolicyData.policyid == "" || this.PolicyData.policyid == undefined) {
            console.log(this.PolicyData);
            this.msg = "All Fields Are Required to Proceed";
        }
        else {
            this.msg = "";
            this.PolicyData.userid = sessionStorage.userid;
            this.PolicyData.policyid = this.param1;
            var StatusOfUpdate = this.DataService.BuyPolicy(this.PolicyData);
            StatusOfUpdate.subscribe(function (result) {
                console.log(result);
                alert("Purchased SuccessFully");
                _this.router.navigate(["Home"]);
            }, function (error) {
                console.log(error);
            });
        }
    };
    PremiumCalulatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-premium-calulator',
            template: __webpack_require__(/*! ./premium-calulator.component.html */ "./src/app/premium-calulator/premium-calulator.component.html"),
            styles: [__webpack_require__(/*! ./premium-calulator.component.css */ "./src/app/premium-calulator/premium-calulator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PremiumCalulatorComponent);
    return PremiumCalulatorComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 30%;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form>\n        <h3 style=\"color: rgb(124, 8, 8);\"><b>Hello {{UserProfileData.fname}}</b></h3>\n        \n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">First Name</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.fname}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Middle Name</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.mname}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Last Name</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.lname}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Nominee Name</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.nname}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Nominee Relation</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.nrelation}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Gender</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.gender}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Phone Number</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.mobile}}</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">Date of Birth</label>\n            </div>\n            <div class=\"col\">\n                <label for=\"exampleInputEmail1\">{{this.UserProfileData.dob |  date:'yyyy-MM-dd'}}</label>\n            </div>\n        </div>\n\n        <button type=\"button\" routerLink=\"/EditProfile\" class=\"btn btn-primary\">Edit Profile</button>\n    </form>\n</div>\n\n\n\n<!-- <div class=\"imgcontainer\">\n    <img src=\"./assets/icons-user-profile.png\" style=\"height: 150px; width: 150px;\"\n        alt=\"Online Insurance Management System_Icon\" class=\"Icon\">\n</div>\n<h2 style=\"color: rgb(124, 8, 8);\"><b>{{UserProfileData.fname}}</b></h2>\n<div class=\"container\" style=\"text-align: left\">\n    <label><b>First Name</b></label>\n    <div>{{this.UserProfileData.fname}}</div>\n    <label><b>Last Name</b></label>\n    <div>{{this.UserProfileData.lname}}</div>\n\n    <label><b>Gender</b></label>\n    <div>{{this.UserProfileData.gender}}</div>\n\n    <label><b>Phone Number</b></label>\n    <div>+91 {{this.UserProfileData.mobile}}</div>\n\n    <label><b>Date of Birth</b></label>\n    <div>{{this.UserProfileData.dob |  date:'yyyy-MM-dd'}}</div>\n\n    <button type=\"submit\" routerLink=\"/EditProfile\">Edit Profile</button>\n\n    <b style=\"position: absolute; left: 83px;\">{{msg}}</b>\n</div> -->"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(AuthService, DataService) {
        this.AuthService = AuthService;
        this.DataService = DataService;
        this.UserProfileData = this.AuthService.UserProfileData();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var FindUser = this.DataService.UserProfileData(sessionStorage.userid);
        FindUser;
        FindUser.subscribe(function (result) {
            console.log(result);
            _this.UserProfileData = result;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

// console.log(this.UserData.uname);
// console.log(this.UserData.pwd);
// console.log(this.UserProfileData.uname);
// console.log(this.UserProfileData.email);
// console.log(this.UserProfileData.phone);
// console.log(this.UserProfileData.dob);


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  width: 350px;\n  padding: 20px;\n  padding-top: 25px;\n  box-sizing: border-box;\n  box-shadow: 0 15px 25px rgb(23, 25, 26);\n  border-radius: 10px;\n}\n\n.copyright\n{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  color:black;\n  padding: 1.4em;\n  text-align: center;\n}\n\n.btn{\n  margin: 20px;\n  width: 30%;\n}\n\n.form-control\n{\n  width: 85%;\n}\n\nh4\n{\n  text-align: center;\n}\n\n.form-group{\n  margin-left: 25px ;\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #myForm=\"ngForm\" (ngSubmit)=\"FormValidation(myForm)\">\n    <div class=\"form-group\">\n      <label for=\"inputEmail4\">Email</label>\n      <input type=\"text\" ngModel name=\"email\" pattern=\"[[a-zA-Z0-9_\\-\\.]+@([a-zA-Z0-9_\\-\\.]+)\\.[a-zA-Z]{2,5}]*\"\n          #Vemail=\"ngModel\" class=\"form-control\" [class.alert-danger]=\" Vemail.touched   && Vemail.invalid\"\n          id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" title=\"Enter Valid Email Address\" required>\n      <div *ngIf=\"Vemail.touched && Vemail.invalid\" style=\"width:20px;height: 20px;\"\n          class=\"spinner-border text-danger\" role=\"status\">\n          <span class=\"sr-only\">...</span>\n      </div>\n           <div class=\"alert-danger\" *ngIf=\"Vemail.touched && Vemail.invalid\" style=\"width:50%;\">Email is not valid\n      </div>\n      <div class=\"alert-success\" *ngIf=\"Vemail.touched && Vemail.valid\" style=\"width: 50%;\">OK</div>\n  </div>\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label for=\"inputEmail4\">Password</label>\n        <input type=\"password\" ngModel #Vpass=\"ngModel\" required\n          pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*\" class=\"form-control\"\n          name=\"passwd\" id=\"inputEmail4\" placeholder=\"Password\" title=\"Passwords will contain minimum 8 characters, at least 1 upper case letter, 1 lower case letter ,least 1 number or special character\">\n        <ng-container class=\"alert-danger\" *ngIf=\"Vpass.touched && Vpass.invalid\" style=\"width:200%;\">\n          Passwords will contain minimum 8 characters, at least 1 upper case letter, 1 lower case letter ,least 1 number or special character\n        </ng-container>\n        <div class=\"alert-success\" *ngIf=\"Vpass.touched && Vpass.valid\" style=\"width: 50%;\">OK</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Phone Number +91 </label>\n      <input type=\"number\" ngModel class=\"form-control\" id=\"mobile\" name=\"mobile\" minlength=\"10\" maxlength=\"10\" pattern=\"[1-9]{1}[0-9]{9}\" title=\"Please enter exactly 10 digits\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Signup</button>\n    <button type=\"button\" routerLink=\"/Home\" id=\"btn\" class=\"btn btn-danger\">Cancel</button>\n    <button *ngIf=\"num\" routerLink=\"/Login\" type=\"button\" class=\"btn btn-success\">Go to Login</button>\n  </form>\n  <div class=\"form-group\" style=\"color: red;\">\n    <h4><b>{{msg}}</b></h4>\n  </div>\n</div>\n\n\n<!-- \n<div class=\"container mt-5\">\n  <form #myForm=\"ngForm\" (ngSubmit)=\"FormValidation(myForm)\">\n    <div class=\"container\" style=\"text-align: left\">\n      <label for=\"email\">Email</label><br>\n      <input ngModel type=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\n      <br>\n      <label for=\"phone\"><b>Phone Number</b></label><br>\n      <input ngModel type=\"number\" placeholder=\"Enter Phone Number\" name=\"mobile\" required>\n      <br>\n      <label for=\"pwd\"><b>Password</b></label><br>\n      <input ngModel type=\"password\" placeholder=\"Enter Password\" name=\"passwd\" required>\n      <br>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button><br>\n      <button type=\"button\" routerLink=\"/Home\" class=\"btn btn-danger\">Cancel</button>\n      <button *ngIf=\"num\" type=\"button\" routerLink=\"/Login\" class=\"btn btn-primary\">Go to Login</button><br>\n      <label style=\"position: absolute; left: 150px; \"><b>{{msg}}</b></label>\n    </div>\n  </form>\n</div> -->"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(service) {
        this.service = service;
        this.num = 0;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.FormValidation = function (UserData) {
        var _this = this;
        if (UserData.form.value.email == "" ||
            UserData.form.value.mobile == "" ||
            UserData.form.value.passwd == "") {
            this.msg = "All fields are compulsory!!";
        }
        else if (UserData.form.value.mobile.toString().length != 10) {
            this.msg = "Phone no should be 10 numbers!!";
        }
        else {
            var resultstate = this.service.SignupData(UserData.form.value);
            resultstate.subscribe(function (data) {
                // if (data.error == null) {
                _this.msg = "Successfully Signed Up!!";
                _this.num = 1;
                // }
                // else {
                //   // console.log(data);
                //   // this.msg = "Somthing went Wrong!!";
                //   // this.num = 0;
                // }
            }, function (error) {
                console.log(error);
                _this.msg = "Somthing went Wrong!!";
                _this.num = 0;
            });
        }
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sunbeam/myproject/Ng_client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map