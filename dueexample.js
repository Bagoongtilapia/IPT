 function getDues() {
    
    var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function () {
            
            if (this.readyState === 4 && this.status === 200) {
                        fillTable(this);
            }
        };

    xhttp.open("GET", "companydue.xml", true);
    xhttp.send();
}
            

function fillTable(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Employee Name</th><th>Department</th>" + "<th>Due Date</th><th>Amount</th></tr>";
    var x = xmlDoc.getElementsByTagName("record");
    
    for (i = 0; i < x.length; i++) {
        
        table = table + "<tr><td>" +
        x[i].getElementsByTagName("employeename")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("department")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("duedate")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("amount")[0].childNodes[0].nodeValue + "</td></tr>";
    }
                
    document.getElementById("company").innerHTML = table;
    filter();
}



function filter(xml) {
    var department = document.getElementById("selector").value;
    var rows = document.getElementById("company").getElementsByTagName("tr");
                
    for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
        var departmentCell = rows[i].getElementsByTagName("td")[1]; // Get department cell
        if (department === "all" || departmentCell.textContent === department) {
            
            rows[i].style.display = ""; // Show row if department matches or "all" is selected
        
        } 
        
        else {
        
            rows[i].style.display = "none"; // Hide row otherwise
        }
    }
}
                
    