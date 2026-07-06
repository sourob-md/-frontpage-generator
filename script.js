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

    document.getElementById("pDate").innerText =
        document.getElementById("date").value;
}

function downloadPDF() {
    const element = document.getElementById("frontPage");

    html2pdf()
        .from(element)
        .save("Leading_University_Front_Page.pdf");
}
