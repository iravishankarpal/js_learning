submit.addEventListener("click",ConvertToAge);
function ConvertToAge(){
    var Age; 
    var submitedDob = document.getElementById('date').value
    var submitedDate = submitedDob.split("-");
    var submitedYear = parseInt(submitedDate[0])
    var submitedMonth = parseInt(submitedDate[1])
    var submitedDay = parseInt(submitedDate[2])
    let present =new Date()
    let Year = present.getFullYear() - submitedYear;
    // console.log(PresentYear)
    let Month = present.getMonth() - submitedMonth;
    let Day = present.getDay() - submitedDay;
    Age = (`You Are ${Year} year  ${Month} month ${Day} day  old!`)
    document.getElementById('ShowDate').innerHTML= Age;
}
