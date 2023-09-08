function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('scripttask');
}

function getEmployees() { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var employeeSheet = ss.getSheetByName("EMPLOYEES"); 
  var getLastRow = employeeSheet.getLastRow();  
  return employeeSheet.getRange(2, 1, getLastRow - 1, 1).getValues();  
}

function getLocation() { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var locationSheet = ss.getSheetByName("location"); 
  var getLastRow = locationSheet.getLastRow();  
  return locationSheet.getRange(2, 1, getLastRow - 1, 1).getValues();  
}

function getPosition() { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var positionSheet = ss.getSheetByName("position"); 
  var getLastRow = positionSheet.getLastRow();  
  return positionSheet.getRange(2, 1, getLastRow - 1, 1).getValues();  
}

function getShift() { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var shiftSheet = ss.getSheetByName("shift"); 
  var getLastRow = shiftSheet.getLastRow();  
  return shiftSheet.getRange(2, 1, getLastRow - 1, 1).getValues();  
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1Q51M-e0fyjkrFv15YnKOKTWr2MGlm_-IFEAH0ADcjLs/edit?usp=sharing";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("data");
  var date=  Utilities.formatDate(new Date(), "GMT+1", "MM/dd/yyyy");

  ws.appendRow([date,
    formObject.employee,
    formObject.location,
    formObject.position,
    formObject.shift,
    formObject.working1,
    formObject.taskdescribe1,
    formObject.taskdescribe2,
  ]);
}



