function getCurrentDate()
{
    //create local object of Date Class
    let today = new Date();
    let currentdate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    return currentdate;
}
function getCurrentTime()
{
    let now = new Date();
    let currenttime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return currenttime;
}
function getCurrentDateTime()
{
    let currentdatetime = getCurrentDate() + " " + getCurrentTime();
    return currentdatetime;
}
//call function 
let currentdatetime = getCurrentDateTime();
console.log(currentdatetime);
console.log(getCurrentDate());
console.log(getCurrentTime());