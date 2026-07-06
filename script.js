// Generate Front Page
function generateFrontPage() {

    document.getElementById("pCourseTitle").innerText =
        document.getElementById("courseTitle").value;

    document.getElementById("pCourseCode").innerText =
        document.getElementById("courseCode").value;

    document.getElementById("pLabTitle").innerText =
        document.getElementById("labTitle").value;

    document.getElementById("pTeacher").innerText =
        document.getElementById("teacherName").value;

    document.getElementById("pDesignation").innerText =
        document.getElementById("designation").value;

    document.getElementById("pFaculty").innerText =
        document.getElementById("faculty").value;

    document.getElementById("pStudent").innerText =
        document.getElementById("studentName").value;

    document.getElementById("pBatch").innerText =
        document.getElementById("batch").value;

    document.getElementById("pSection").innerText =
        document.getElementById("section").value;

    document.getElementById("pID").innerText =
        document.getElementById("studentID").value;

    const dateValue = document.getElementById("date").value;

    if(dateValue !== ""){

        const d = new Date(dateValue);

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        document.getElementById("pDate").innerText =
            d.toLocaleDateString("en-US", options);

    }

}


// Download PDF
function downloadPDF() {

    generateFrontPage();

    const element = document.getElementById("frontPage");

    const options = {

        margin:0,

        filename:"Leading_University_Front_Page.pdf",

        image:{
            type:"jpeg",
            quality:1
        },

        html2canvas:{
            scale:4,
            useCORS:true,
            letterRendering:true
        },

        jsPDF:{
            unit:"mm",
            format:"a4",
            orientation:"portrait"
        }

    };

    html2pdf()
        .set(options)
        .from(element)
        .save();

}