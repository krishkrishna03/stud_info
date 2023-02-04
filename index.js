$(function() {
    $("<table class='table table-stripped'><thead> <th>Name</th><th>Roll No</th> <th>Subjects</th> </thead></table> ").appendTo("#bd");
    //Checkbox Code
            $("#agree").click(function(){
               $("#submitBtn").attr("disabled", !this.checked);
            });
    //Submit Button
            $("#submitBtn").click(function(){
                var nm = $("#name").val();
                var rollNo = $("#rollNo").val();
                var sub = $("#subject").val();
                $(" <tr><td>"+nm+"</td><td>"+rollNo+"</td><td>"+sub+"</td></tr>").appendTo("thead");
            });
        
    });