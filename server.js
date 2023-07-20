var inputArray = [
    {
      id:10,
      todoItem:"Get some tea powder",
      status:"Not Completed",
    },
    {
      id:20,
      todoItem:"Submit timesheet",
      status:"Not Completed",
    },
    {
      id:30,
      todoItem:"Get the socks",
      status:"Not Completed",
    }
  ] 
  
  function changeStatus(){
    var id=prompt("provide id");
    id=parseInt(id);
    var item=inputArray.filter(x=>x.id===id);
    console.log("ITEM :",item);
    if(item[0]["status"]=="Not Completed"){
      var yesOrNO=prompt("Do you want to change the status : choose yes or no :");
      if(yesOrNO==="yes"){
        item[0].status="Completed";
      }
    }
    console.log("Item after changing",item);
    var index=inputArray.findIndex(x=>x.id===id);
    inputArray[index]=item[0];
    console.log("AFTER updating status ",inputArray);
  }
  
  
  function list(){
    const completedList=inputArray.filter(x=>x.status==="Completed");
    console.log("Completed List",completedList);
    const notCompletedList=inputArray.filter(x=>x.status!=="Completed");
    console.log("NOT Completed List",notCompletedList);
  }
  
  function Delete() {
    let delval = parseInt(prompt("Enter the Id to delete values"))
    let index = inputArray.findIndex(list => list["id"] === delval)
    if (index == -1) {
      console.log("Id not found. No record deleted.");
    }
    else {
      let dellist = inputArray[index]
      let yes = prompt(
        `Do you want to delete the following record?\n\nId: ${dellist["id"]}\nTodoItem: ${dellist["todoItem"]}\nStatus: ${dellist["status"]} \n y/n?`
      );
      if (yes === "y") {
        inputArray.splice(index, 1);
        console.log("Record Deleted successfully!");
      } else {
        console.log("Deletion canceled.");
      }
    }
  }
  
  function deleteRecordsStatusCompleted(){
    for(let i=0;i<inputArray.length;i++){
      if(inputArray[i]["status"]==="Completed"){
        inputArray.splice(i,1)
      }
    }
    console.log("Deleted All records with Status COmpleted")
  }
  
  function main(){
    let choice;
    while (true) {
      console.log("1. Change 2. list 3. Delete 4. DeleteAllRecords 5. Exit");
      choice = parseInt(prompt("Enter the choice"));
  
      if (choice === 5) {
        break;
      }
  
      switch (choice) {
        case 1:
          changeStatus();
          break;
        case 2:
          list();
          break;
        case 3:
          Delete();
          break;
        case 4:
          deleteRecordsStatusCompleted();
          break;
        default:
          console.log("Invalid Choice");
      }
    }
  }
  
  main();
  