var first_name=document.getElementById("form_first_name")
var last_name=document.getElementById("form_last_name")
var phone=document.getElementById("form_phone")
var code=document.getElementById("form_code")
var email=document.getElementById("form_email")
var title=document.getElementById("form_title")
var note=document.getElementById("form_note")
var date=document.getElementById("form_date")
var company=document.getElementById("form_company")
var address=document.getElementById("form_address")


//create form toggle hide
window.addEventListener("load", function(){
  document.getElementById("form_data").style.display="none";
  document.getElementById("form_cancel").style.display="none";
  document.getElementById("profile_data").style.display="none";
} )


//create form toggle show function
function show_form(){
          document.getElementById("table_data").style.display="none"
          document.getElementById("form_cancel").style.display="block";
        document.getElementById("form_data").style.display="block";
      }



function show_profile(user_id){
        document.getElementById("form_data").style.display="none";
        document.getElementById("form_cancel").style.display="none";
        document.getElementById("profile_data").style.display="block";
        document.getElementById("table_data").style.display="none"


        var urls = "get_data/"+user_id+"/";
        $.ajax({
          url: urls,
          type: "GET",
          dataType: "json",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
          success: (data) => {
            if(data.note==""){
              document.getElementById("note_section").style.display="none";
            }

            if(data.date==""){
              document.getElementById("date_section").style.display="none";
            }

            if(data.email==""){
              document.getElementById("email_section").style.display="none";
            }

            if(data.phone==""){
              document.getElementById("phone_section").style.display="none";
            }

            if(data.address==""){
              document.getElementById("address_section").style.display="none";
              }
              document.getElementById("profile_address").innerHTML=data.address;
              document.getElementById("profile_phone").innerHTML=data.phone;
              document.getElementById("profile_email").innerHTML=data.email;
              document.getElementById("profile_date").innerHTML=data.date;
              document.getElementById("profile_note").innerHTML=data.note;
          }  
        });

        

}


//create form toggle hide function
function hide_form(){
        document.getElementById("form_data").style.display="none";
        document.getElementById("form_cancel").style.display="none";
        document.getElementById("table_data").style.display="block"
      }


var data_dict={}

document.getElementById("save_button").addEventListener("click", save_data)


function save_data(){
      if(first_name.value=="" && phone.value!=""){
        data_dict["first_name"]=phone.value;
        }
      if(first_name){
        data_dict["first_name"]=first_name.value;
      }
      data_dict["phone"]=phone.value;
      data_dict["last_name"]=last_name.value;
      data_dict["email"]=email.value;
      data_dict["code"]=code.value;
      data_dict["company"]=company.value;
      data_dict["title"]=title.value;
      data_dict["date"]=date.value;
      data_dict["note"]=note.value;
      data_dict["address"]=address.value;

      var urls = "form/";

      $.ajax({
        url: urls,
        type: "POST",
        dataType: "json",
        data: JSON.stringify(data_dict),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        success: (data) => {
          show_profile(data.user_id);
        }
        
      });


function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}



  
