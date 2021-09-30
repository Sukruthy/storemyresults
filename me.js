let btnAdd=document.querySelector('button');
let table=document.querySelector('table');
 
let subjectnameInput=document.querySelector('#subjectname');
let finalmarksInput=document.querryselector('#finalmarks');
btnAdd.addEventListener('click',() => {
    let subjectname=subjectname.value;
    let finalmarks=finalmarks.value;
     
    let template= `
    <tr>
        <td>${subjectname}</td>
        <td>${finalmarks}</td>
        </tr> `;
    table.innerHTML+= template;
});