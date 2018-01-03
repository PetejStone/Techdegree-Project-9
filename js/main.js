const alertClose = document.querySelector(".alert__close");
const alertBox = document.querySelector(".alert");
let members = [];
let allMembers = [];
let newMembers = document.querySelector('.new-members');

//Closes alert box when X is clicked
alertClose.addEventListener('click', () => {
  alertBox.style.display = 'none';
})


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
    

    var info ='<p>'+ firstName +' '+ lastName +'<br>'+ email +' '+ registered + '</p>';
    newMembers.children[i].innerHTML = info;




}
}});
