//variables for alert boxes and notifications
const alertClose = document.querySelector(".alert__close");
const alertBox = document.querySelector(".alert");
const bell = document.querySelector(".bell");
const notification = document.querySelector('.notification');
const notificationBox = document.querySelector(".alert--bell");
const alertText = document.querySelector('.alert--text');
const alertNotification = document.querySelector('.alert--notification');
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
// let members = [];
let allMembers = [];
let member = document.querySelector(".member");
let memberNew = document.querySelectorAll(".member--new");
let memberActivity = document.querySelectorAll(".member--activity");
let randomPhoto = document.querySelectorAll(".memberPhoto");
let membersRandom = document.querySelectorAll(".member");
let memberInfo = document.querySelectorAll(".member--info");
let memberImg = document.querySelectorAll(".member--img");
let newMembers = document.querySelector(".new-members");
let recentActivity = document.querySelector(".recent-activity");


function randomTime() {
  randomNumber = Math.floor(Math.random() * 6 ) + 2;
  return randomNumber;
}

//----------------------------------------------------------
// Random user generator function for random data
//----------------------------------------------------------

//Random User Generator
$.ajax({
  url: 'https://randomuser.me/api/?results=4&inc=name,picture,email,registered',
  dataType: 'JSON',
  success: function(data) {
    members = data.results;

//------------------------
//member data for widgets
//------------------------
  for (let i = 0; i < members.length; i+=1) {
    //Random user generator variables
    let firstName = members[i].name.first[0].toUpperCase() + members[i].name.first.substring(1);
    let lastName = members[i].name.last[0].toUpperCase() + members[i].name.last.substring(1);
    let memberEmail = members[i].email;
    let registered = members[i].registered;
    let photo = members[i].picture.thumbnail;
    const img = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 6 ) + 2;
    img.src = photo;
    let image = "<img src="+ photo + " alt='' height='50px' width='50px'>";
// name and email variables
    let name = firstName +' '+ lastName;
    let email = '<p class="member--email">'+ memberEmail; +'</p>';
// Random time stamp variable
    const time = '<p>'+ randomTime() + " hours ago" + '</p>';


//Adds image to the new member widget and recent activity widget
    newMembers.children[i].children[0].innerHTML = image;
    recentActivity.children[i].children[0].innerHTML = image;
//Adds name and email to the new members widget and name and time to the recent activity widget
    newMembers.children[i].children[1].innerHTML = "<p>"+name+"</p>" + email;
    recentActivity.children[i].children[1].children[0].insertAdjacentHTML('afterbegin', name);
    recentActivity.children[i].children[1].children[0].insertAdjacentHTML('afterend', time);
// Target the email only from the new members widget and changes the color
    // newMembers.children[i].children[1].children[1].style.color = '#65619E';

}
//-----------------------------------
////---end of member data for widgets
//-------------------------------------

//------------------------------------
//membder name data for search function
//-------------------------------------


//Name Array for search bar -- added 'toUpperCase' for non-case sensitive answers
const nameArray = [
  members[0].name.first.toUpperCase() +' '+
  members[0].name.last.toUpperCase(),
  members[1].name.first.toUpperCase() +' '+
  members[1].name.last.toUpperCase(),
  members[2].name.first.toUpperCase() +' '+
  members[2].name.last.toUpperCase(),
  members[3].name.first.toUpperCase() +' '+
  members[3].name.last.toUpperCase(),
];

//variables for search user
const searchBar = document.querySelector('#search-user');
const send = document.querySelector('.send');
const alertSuccess = document.querySelector('.alert--success');
const alertInvalid = document.querySelector('.alert--invalid');

//Search user function
for (let i=0; i < nameArray.length; i+=1){
  send.addEventListener('click',()=> {
    if (nameArray.indexOf(searchBar.value.toUpperCase()) > -1) {
      alertSuccess.style.display = 'block';
    } else {
      alertInvalid.style.display = 'block';
    }
  })
}
//--------------------------
//end of search user function
//---------------------------


} //End of function(data)

}); //End of Ajax
//--------------------------
//End of Random User Generator
//----------------------------


//Closes alert box when X is clicked
alertClose.addEventListener('click', () => {
  alertBox.style.display = 'none';
})

bell.addEventListener('click', ()=> {
  notificationBox.style.display = 'inherit';
  notification.style.display = 'none'
})

alertText.addEventListener('click', ()=> {
  notificationBox.style.display = 'none';
  alertNotification.style.display = 'inherit';
})

//------------------------------------------------------------------------
//Changes chart display when 'weekly', 'hourly', etc is clicked//
//-------------------------------------------------------------------------
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
//--------------------------------
//End
//--------------------------------


//----------------
//Search User function
//----------------

const searchbar = document.querySelector("#search-user");
function searchUser() {
  if (searchbar.input.value === members[0].name.first + members[0].name.last) {
    console.log('woo');
  }
}





// const sendButton = document.querySelector('.send');
// const searchbar = document.querySelector("#search-user");
// const alertSuccess = document.querySelector(".alert--success");
// const alertInvalid = document.querySelector(".alert--invalid");
