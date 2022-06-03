      var first_name=document.getElementById("form_first_name")
      var last_name=document.getElementById("form_last_name")
      var phone=document.getElementById("form_phone")
      var code=document.getElementById("form_code")
      var email=document.getElementById("form_email")
      var title=document.getElementById("form_title")
      var note=document.getElementById("form_note")
      var date=document.getElementById("form_date")
      var company=document.getElementById("form_company")


        document.getElementById("note_input_remove_button").addEventListener("click", function(){
            note.value="";
        })

        document.getElementById("address_input_remove_button").addEventListener("click", function(){
            address.value="";
        })

        document.getElementById("date_input_remove_button").addEventListener("click", function(){
            date.value="";
        })
        document.getElementById("phone_input_remove_button").addEventListener("click", function(){
            phone.value="";
        })
        document.getElementById("email_input_remove_button").addEventListener("click", function(){
            email.value="";
        })
        document.getElementById("company_input_remove_button").addEventListener("click", function(){
            company.value="";
            title.value="";
        })
        document.getElementById("profile_input_remove_button").addEventListener("click", function(){
            first_name.value="";
            last_name.value="";

        })

      document.querySelectorAll(".input_remove_button").forEach(item => {
        item.style.display="none";
        }
        )

      document.getElementById("save_button").disabled = true;
  
      first_name.addEventListener("change", show_save)
      last_name.addEventListener("change", show_save)
      phone.addEventListener("change", show_save)

      function show_save(){
          if(first_name.value!="" || last_name.value!="" || phone.value!=""){
            document.getElementById("save_button").disabled = false;}
        else{
            document.getElementById("save_button").disabled = true;
        }
    }

        document.querySelectorAll(".profile_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("profile_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".profile_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("profile_input_remove_button").style.display="none";
        })
        })

        document.querySelectorAll(".company_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("company_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".company_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("company_input_remove_button").style.display="none";
        })
        })

        document.querySelectorAll(".email_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("email_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".email_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("email_input_remove_button").style.display="none";
        })
        })

        document.querySelectorAll(".phone_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("phone_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".phone_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("phone_input_remove_button").style.display="none";
        })
        })

        document.querySelectorAll(".date_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("date_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".date_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("date_input_remove_button").style.display="none";
        })
        })

        document.querySelectorAll(".note_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("note_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".note_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("note_input_remove_button").style.display="none";
        })
        })


        document.querySelectorAll(".address_input").forEach(item=> {
            item.addEventListener("mouseover", function(){
            document.getElementById("address_input_remove_button").style.display="block";
        })
        })
        

        document.querySelectorAll(".address_input").forEach(item=> {
            item.addEventListener("mouseout", function(){
            document.getElementById("address_input_remove_button").style.display="none";
        })
        })