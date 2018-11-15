$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Dsouza",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 483327,
  "status": "passed"
});
formatter.before({
  "duration": 136694,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 584509586993,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 557.41 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027VALASHIPAPERS\u0027, ip: \u0027192.168.110.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat stepDefinitions.LoginStepDefinition.user_already_on_login_page(LoginStepDefinition.java:24)\r\n\tat ✽.Given user is already on Login Page(contacts.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 97039,
  "status": "passed"
});
formatter.after({
  "duration": 91441,
  "status": "passed"
});
formatter.before({
  "duration": 1080488,
  "status": "passed"
});
formatter.before({
  "duration": 97972,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"David\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 34321404895,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 331479647,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c#1 Free CRM [for Any Business: Online Customer Relationship Softwar]e\u003e but was:\u003c#1 Free CRM [software in the cloud for sales and servic]e\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.title_of_login_page_is_free_CRM(LoginStepDefinition.java:33)\r\n\tat ✽.When title of login page is Free CRM(contacts.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 131562,
  "status": "passed"
});
formatter.after({
  "duration": 83976,
  "status": "passed"
});
formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1535822,
  "status": "passed"
});
formatter.before({
  "duration": 143225,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 33674577801,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 14528730,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c#1 Free CRM [for Any Business: Online Customer Relationship Softwar]e\u003e but was:\u003c#1 Free CRM [software in the cloud for sales and servic]e\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.title_of_login_page_is_free_CRM(LoginStepDefinition.java:33)\r\n\tat ✽.When title of login page is Free CRM(deals.feature:6)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 85842,
  "status": "passed"
});
formatter.after({
  "duration": 74179,
  "status": "passed"
});
formatter.uri("dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 151156,
  "status": "passed"
});
formatter.before({
  "duration": 78844,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 81659379597,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 7642256,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c#1 Free CRM [for Any Business: Online Customer Relationship Softwar]e\u003e but was:\u003c#1 Free CRM [software in the cloud for sales and servic]e\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.title_of_login_page_is_free_CRM(LoginStepDefinition.java:33)\r\n\tat ✽.When title of login page is Free CRM(dealsmap.feature:6)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 72779,
  "status": "passed"
});
formatter.after({
  "duration": 65315,
  "status": "passed"
});
formatter.uri("hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 154422,
  "status": "passed"
});
formatter.before({
  "duration": 299979,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 69513,
  "status": "passed"
});
formatter.after({
  "duration": 71379,
  "status": "passed"
});
formatter.before({
  "duration": 224401,
  "status": "passed"
});
formatter.before({
  "duration": 82577,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 167951,
  "status": "passed"
});
formatter.after({
  "duration": 83043,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 28,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 543043,
  "status": "passed"
});
formatter.before({
  "duration": 438540,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 39736877980,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 20346381,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c#1 Free CRM [for Any Business: Online Customer Relationship Softwar]e\u003e but was:\u003c#1 Free CRM [software in the cloud for sales and servic]e\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.title_of_login_page_is_free_CRM(LoginStepDefinition.java:33)\r\n\tat ✽.When title of login page is Free CRM(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 111501,
  "status": "passed"
});
formatter.after({
  "duration": 63448,
  "status": "passed"
});
formatter.before({
  "duration": 112901,
  "status": "passed"
});
formatter.before({
  "duration": 64381,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 37565784004,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 15573295,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c#1 Free CRM [for Any Business: Online Customer Relationship Softwar]e\u003e but was:\u003c#1 Free CRM [software in the cloud for sales and servic]e\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.title_of_login_page_is_free_CRM(LoginStepDefinition.java:33)\r\n\tat ✽.When title of login page is Free CRM(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 62981,
  "status": "passed"
});
formatter.after({
  "duration": 61116,
  "status": "passed"
});
formatter.uri("taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 140426,
  "status": "passed"
});
formatter.before({
  "duration": 119432,
  "status": "passed"
});
formatter.before({
  "duration": 102637,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "This is First test",
  "description": "",
  "id": "test-tagged-hooks;this-is-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 160953,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 83976,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 72312,
  "status": "passed"
});
formatter.after({
  "duration": 69047,
  "status": "passed"
});
formatter.after({
  "duration": 75112,
  "status": "passed"
});
formatter.after({
  "duration": 55518,
  "status": "passed"
});
formatter.before({
  "duration": 152556,
  "status": "passed"
});
formatter.before({
  "duration": 88641,
  "status": "passed"
});
formatter.before({
  "duration": 71379,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 70447,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 90507,
  "status": "passed"
});
formatter.after({
  "duration": 65781,
  "status": "passed"
});
formatter.after({
  "duration": 53184,
  "status": "passed"
});
formatter.after({
  "duration": 53185,
  "status": "passed"
});
formatter.before({
  "duration": 117566,
  "status": "passed"
});
formatter.before({
  "duration": 63449,
  "status": "passed"
});
formatter.before({
  "duration": 67647,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "This is Third test",
  "description": "",
  "id": "test-tagged-hooks;this-is-third-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 59716,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.this_is_the_third_step()"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.after({
  "duration": 60649,
  "status": "passed"
});
formatter.after({
  "duration": 41521,
  "status": "passed"
});
formatter.after({
  "duration": 39189,
  "status": "passed"
});
formatter.uri("tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 85375,
  "status": "passed"
});
formatter.before({
  "duration": 64382,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_valid_login_test()"
});
formatter.result({
  "duration": 140426,
  "status": "passed"
});
formatter.after({
  "duration": 971319,
  "status": "passed"
});
formatter.after({
  "duration": 70447,
  "status": "passed"
});
formatter.before({
  "duration": 226268,
  "status": "passed"
});
formatter.before({
  "duration": 52718,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with incorrect username and correct password",
  "description": "",
  "id": "free-crm-application-testing;login-with-incorrect-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_login_test()"
});
formatter.result({
  "duration": 102171,
  "status": "passed"
});
formatter.after({
  "duration": 61116,
  "status": "passed"
});
formatter.after({
  "duration": 308378,
  "status": "passed"
});
formatter.before({
  "duration": 108235,
  "status": "passed"
});
formatter.before({
  "duration": 65781,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "This is a contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_contact_test_case()"
});
formatter.result({
  "duration": 144158,
  "status": "passed"
});
formatter.after({
  "duration": 45720,
  "status": "passed"
});
formatter.after({
  "duration": 44787,
  "status": "passed"
});
formatter.before({
  "duration": 97972,
  "status": "passed"
});
formatter.before({
  "duration": 51785,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create a deal",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "This is a deal test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_deal_test_case()"
});
formatter.result({
  "duration": 113833,
  "status": "passed"
});
formatter.after({
  "duration": 55984,
  "status": "passed"
});
formatter.after({
  "duration": 56916,
  "status": "passed"
});
formatter.before({
  "duration": 881278,
  "status": "passed"
});
formatter.before({
  "duration": 408682,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create a tasks",
  "description": "",
  "id": "free-crm-application-testing;create-a-tasks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "This is a tasks test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_tasks_test_case()"
});
formatter.result({
  "duration": 106836,
  "status": "passed"
});
formatter.after({
  "duration": 378824,
  "status": "passed"
});
formatter.after({
  "duration": 5468684,
  "status": "passed"
});
formatter.before({
  "duration": 6640146,
  "status": "passed"
});
formatter.before({
  "duration": 357830,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create a case",
  "description": "",
  "id": "free-crm-application-testing;create-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "This is a case test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_case_test_case()"
});
formatter.result({
  "duration": 129229,
  "status": "passed"
});
formatter.after({
  "duration": 64381,
  "status": "passed"
});
formatter.after({
  "duration": 83043,
  "status": "passed"
});
formatter.before({
  "duration": 112434,
  "status": "passed"
});
formatter.before({
  "duration": 52718,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify left panel links",
  "description": "",
  "id": "free-crm-application-testing;verify-left-panel-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@SmokeTest"
    },
    {
      "line": 28,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "clicking on left panel links",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.clicking_on_left_panel_links()"
});
formatter.result({
  "duration": 236532,
  "status": "passed"
});
formatter.after({
  "duration": 48052,
  "status": "passed"
});
formatter.after({
  "duration": 68113,
  "status": "passed"
});
formatter.before({
  "duration": 241663,
  "status": "passed"
});
formatter.before({
  "duration": 62515,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "This is a search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_deal_test()"
});
formatter.result({
  "duration": 133895,
  "status": "passed"
});
formatter.after({
  "duration": 48052,
  "status": "passed"
});
formatter.after({
  "duration": 5065601,
  "status": "passed"
});
formatter.before({
  "duration": 119898,
  "status": "passed"
});
formatter.before({
  "duration": 63915,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search a contact",
  "description": "",
  "id": "free-crm-application-testing;search-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "This is a search contact test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_contact_test()"
});
formatter.result({
  "duration": 249595,
  "status": "passed"
});
formatter.after({
  "duration": 92374,
  "status": "passed"
});
formatter.after({
  "duration": 59249,
  "status": "passed"
});
formatter.before({
  "duration": 281319,
  "status": "passed"
});
formatter.before({
  "duration": 67181,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search a case",
  "description": "",
  "id": "free-crm-application-testing;search-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@SmokeTest"
    },
    {
      "line": 40,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "This is a search case test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_case_test()"
});
formatter.result({
  "duration": 186613,
  "status": "passed"
});
formatter.after({
  "duration": 82110,
  "status": "passed"
});
formatter.after({
  "duration": 52718,
  "status": "passed"
});
formatter.before({
  "duration": 100304,
  "status": "passed"
});
formatter.before({
  "duration": 43854,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search a task",
  "description": "",
  "id": "free-crm-application-testing;search-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    },
    {
      "line": 44,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "This is a search task test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_task_test()"
});
formatter.result({
  "duration": 100771,
  "status": "passed"
});
formatter.after({
  "duration": 55984,
  "status": "passed"
});
formatter.after({
  "duration": 58316,
  "status": "passed"
});
formatter.before({
  "duration": 78377,
  "status": "passed"
});
formatter.before({
  "duration": 33591,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search a call",
  "description": "",
  "id": "free-crm-application-testing;search-a-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@SmokeTest"
    },
    {
      "line": 48,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "This is a search call test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_call_test()"
});
formatter.result({
  "duration": 442272,
  "status": "passed"
});
formatter.after({
  "duration": 41521,
  "status": "passed"
});
formatter.after({
  "duration": 27526,
  "status": "passed"
});
formatter.before({
  "duration": 80710,
  "status": "passed"
});
formatter.before({
  "duration": 36856,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Search an email",
  "description": "",
  "id": "free-crm-application-testing;search-an-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@SmokeTest"
    },
    {
      "line": 52,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "This is a search email test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_email_test()"
});
formatter.result({
  "duration": 92374,
  "status": "passed"
});
formatter.after({
  "duration": 214138,
  "status": "passed"
});
formatter.after({
  "duration": 127363,
  "status": "passed"
});
formatter.before({
  "duration": 967120,
  "status": "passed"
});
formatter.before({
  "duration": 53651,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Search a docs",
  "description": "",
  "id": "free-crm-application-testing;search-a-docs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@SmokeTest"
    },
    {
      "line": 56,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "This is a search docs test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_docs_test()"
});
formatter.result({
  "duration": 100305,
  "status": "passed"
});
formatter.after({
  "duration": 39655,
  "status": "passed"
});
formatter.after({
  "duration": 33590,
  "status": "passed"
});
formatter.before({
  "duration": 90041,
  "status": "passed"
});
formatter.before({
  "duration": 45254,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Search a forms",
  "description": "",
  "id": "free-crm-application-testing;search-a-forms",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@SmokeTest"
    },
    {
      "line": 60,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "This is a search forms test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_forms_test()"
});
formatter.result({
  "duration": 96572,
  "status": "passed"
});
formatter.after({
  "duration": 39189,
  "status": "passed"
});
formatter.after({
  "duration": 34057,
  "status": "passed"
});
formatter.before({
  "duration": 126896,
  "status": "passed"
});
formatter.before({
  "duration": 60649,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "validate a report",
  "description": "",
  "id": "free-crm-application-testing;validate-a-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "This is a report test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_report_test()"
});
formatter.result({
  "duration": 531846,
  "status": "passed"
});
formatter.after({
  "duration": 287383,
  "status": "passed"
});
formatter.after({
  "duration": 55051,
  "status": "passed"
});
formatter.before({
  "duration": 75578,
  "status": "passed"
});
formatter.before({
  "duration": 51785,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Application Logout",
  "description": "",
  "id": "free-crm-application-testing;application-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "This is a logout test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_logout_test()"
});
formatter.result({
  "duration": 140892,
  "status": "passed"
});
formatter.after({
  "duration": 313509,
  "status": "passed"
});
formatter.after({
  "duration": 59716,
  "status": "passed"
});
formatter.before({
  "duration": 570101,
  "status": "passed"
});
formatter.before({
  "duration": 49919,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "browser closed",
  "description": "",
  "id": "free-crm-application-testing;browser-closed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "This is a close broswer test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_close_broswer_test()"
});
formatter.result({
  "duration": 173550,
  "status": "passed"
});
formatter.after({
  "duration": 44787,
  "status": "passed"
});
formatter.after({
  "duration": 60649,
  "status": "passed"
});
});