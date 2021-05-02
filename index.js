function validateForm(){
    if( document.myForm.Name.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
     }
     if( document.myForm.FatherName.value == "" ) {
        alert( "Please provide your Father Name!" );
        document.myForm.FatherName.focus() ;
        return false;
     }
     if( document.myForm.Email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.Email.focus() ;
        return false;
     }
     if( document.myForm.Mobile.value == ""  ||
        document.myForm.Mobile.value.length != 11  ) {
        alert( "Please provide your Mobile Number at least 11 digit!" );
        document.myForm.Mobile.focus() ;
        return false;
     }
     if( document.myForm.gnd.value == false ) {
        alert( "Please checked your gander!" );
        // document.myForm.gnd.focus() ;
        return false;
     }
     if( document.myForm.DOB.value == "" ) {
        alert( "Please provide your Date of Birth!" );
        document.myForm.DOB.focus() ;
        return false;
     }
     if( document.myForm.Address.value == "" ) {
        alert( "Please provide your Current Address!" );
        document.myForm.Address.focus() ;
        return false;
     }
   //   if (document.getElementById("txtarea_consolidation").value == ""){
   //    alert("Enter the permanent address");
   //    document.getElementById("txtarea_consolidation").focus();}
     if( document.myForm.Cities.value == "-1" ) {
        alert( "Please provide your City!" );
        return false;
     }
     if( document.myForm.Pin.value == "" ||
        document.myForm.Pin.value.length != 6 ) {
        alert( "Please provide your Pin Code  at least 6 digit!" );
        document.myForm.Pin.focus() ;
        return false;
     }
     if( document.myForm.State.value == "" ) {
        alert( "Please provide your State!" );
        document.myForm.State.focus() ;
        return false;
     }
     if( document.myForm.Nationality.value == "" ) {
        alert( "Please provide your Nationality!" );
        document.myForm.Nationality.focus() ;
        return false;
     }
     if( document.myForm.Religion.value == "" ) {
        alert( "Please provide your Religion!" );
        document.myForm.Religion.focus() ;
        return false;
     }
     if( document.myForm.Qualification.value == "" ) {
        alert( "Please provide your Qualification!" );
        document.myForm.Qualification.focus() ;
        return false;
     }
     if( document.myForm.Courses.value == "" ) {
        alert( "Please provide your Course!" );
        document.myForm.Courses.focus() ;
        return false;
     }
     if( document.myForm.check.value == false ) {
        alert( "Please select your Hobbies!" );
        return false;
     }
     return( true );
}