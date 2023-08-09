function doGet(request) {
  return HtmlService.createTemplateFromFile('scripttask').evaluate();
 
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1Q51M-e0fyjkrFv15YnKOKTWr2MGlm_-IFEAH0ADcjLs/edit?usp=sharing";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("data");

  ws.appendRow([
    formObject.working1,
    formObject.taskdescribe1,
    formObject.taskdescribe2

  ]);
}

