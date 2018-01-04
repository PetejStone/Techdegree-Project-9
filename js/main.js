//variables for alert box
const alertClose = document.querySelector(".alert__close");
const alertBox = document.querySelector(".alert");

//variables for nav charts
const hourly = document.querySelector(".hourly");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const hourlyChartToggle = document.querySelector(".hourly-chart");
const weeklyChartToggle = document.querySelector(".weekly-chart");
const monthlyChartToggle = document.querySelector(".monthly-chart");
const dailyChartToggle = document.querySelector(".daily-chart");

//variables for random user generator
let members = [];
let allMembers = [];
let newMembers = document.querySelector(".new-members");
let memberActivity = document.querySelector(".member-activity");
let randomPhoto = document.querySelectorAll(".memberPhoto");
let member = document.querySelectorAll(".member");



//Random User Generator
$.ajax({
  url: 'https://randomuser.me/api/?results=4&inc=name,picture,email,registered',
  dataType: 'JSON',
  success: function(data) {
    members = data.results;

  for (i = 0; i < members.length; i+=1) {
    var firstName = members[i].name.first;
    var lastName = members[i].name.last;
    var email = members[i].email;
    var registered = members[i].registered;
    var photo = members[i].picture.thumbnail;
    var img = document.createElement("img");
    img.src = photo;



    var info = '<p>' + firstName +' '+ lastName +'<br>'+ email +' '+ registered + '</p>';
    newMembers.children[i].innerHTML = "<img src="+ photo + " alt='' height='50px' width='50px'>" + info;
    memberActivity.children[i].innerHTML =  "<img src="+ photo + " alt='' height='50px' width='50px'>" + info;

}
}});
//End of Random User Generator

//Closes alert box when X is clicked
alertClose.addEventListener('click', () => {
  alertBox.style.display = 'none';
})

//Changes chart display when 'weekly', 'hourly', etc is clicked

//display when page loads
weeklyChartToggle.style.display = 'block';
hourlyChartToggle.style.display = 'none';
dailyChartToggle.style.display ='none';
monthlyChartToggle.style.display ='none';

hourly.addEventListener('click', ()=> {
  weeklyChartToggle.style.display = 'none';
  hourlyChartToggle.style.display = 'block';
  dailyChartToggle.style.display ='none';
  monthlyChartToggle.style.display ='none';

  hourly.style.backgroundColor = '#69D36E';
  hourly.style.borderRadius = "15px";
  hourly.style.color = "#fff";

  weekly.style.backgroundColor = 'initial';
  weekly.style.borderRadius = "initial";
  weekly.style.color = "initial";


  daily.style.backgroundColor = 'initial';
  daily.style.borderRadius = "initial";
  daily.style.color = "initial";

  monthly.style.backgroundColor = 'initial';
  monthly.style.borderRadius = "initial";
  monthly.style.color = "initial";

})

weekly.addEventListener('click', ()=> {
  weeklyChartToggle.style.display = 'block';
  hourlyChartToggle.style.display = 'none';
  dailyChartToggle.style.display ='none';
  monthlyChartToggle.style.display ='none';

  weekly.style.backgroundColor = '#69D36E';
  weekly.style.borderRadius = "15px";
  weekly.style.color = "#fff";



  hourly.style.backgroundColor = 'initial';
  hourly.style.borderRadius = "initial";
  hourly.style.color = "initial";

  daily.style.backgroundColor = 'initial';
  daily.style.borderRadius = "initial";
  daily.style.color = "initial";

  monthly.style.backgroundColor = 'initial';
  monthly.style.borderRadius = "initial";
  monthly.style.color = "initial";

})

daily.addEventListener('click', ()=> {
  weeklyChartToggle.style.display = 'none';
  hourlyChartToggle.style.display = 'none';
  dailyChartToggle.style.display ='block';
  monthlyChartToggle.style.display ='none';

  daily.style.backgroundColor = '#69D36E';
  daily.style.borderRadius = "15px";
  daily.style.color = "#fff";

  weekly.style.backgroundColor = 'initial';
  weekly.style.borderRadius = "initial";
  weekly.style.color = "initial";

  hourly.style.backgroundColor = 'initial';
  hourly.style.borderRadius = "initial";
  hourly.style.color = "initial";



  monthly.style.backgroundColor = 'initial';
  monthly.style.borderRadius = "initial";
  monthly.style.color = "initial";

})

monthly.addEventListener('click', ()=> {
  weeklyChartToggle.style.display = 'none';
  hourlyChartToggle.style.display = 'none';
  dailyChartToggle.style.display ='none';
  monthlyChartToggle.style.display ='block';

  monthly.style.backgroundColor = '#69D36E';
  monthly.style.borderRadius = "15px";
  monthly.style.color = "#fff";

  weekly.style.backgroundColor = 'initial';
  weekly.style.borderRadius = "initial";
  weekly.style.color = "initial";

  hourly.style.backgroundColor = 'initial';
  hourly.style.borderRadius = "initial";
  hourly.style.color = "initial";

  daily.style.backgroundColor = 'initial';
  daily.style.borderRadius = "initial";
  daily.style.color = "initial";



})
