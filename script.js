const draggableElement = document.querySelectorAll('.box');
const droppableElement = document.querySelectorAll('.droppable');

draggableElement.forEach(element =>{
    element.addEventListener('dragstart',(drgStart)=>{
        drgStart.dataTransfer.setData('text',drgStart.target.id);
        drgStart.currentTarget.classList.add('draggableFormat');
        console.log('drgStart');
    });
});

droppableElement.forEach(element=>{
    element.addEventListener('drop',drpEvt=>{
        const droppedElementId = drpEvt.dataTransfer.getData('text');//box 1
        const dropZoneId = drpEvt.target.getAttribute('data-draggable-id');
        const draggableElement = document.getElementById(droppedElementId);

        //drpEvt.target.appendChild(document.getElementById(droppedElementId));
        drpEvt.target.appendChild(draggableElement.cloneNode(true));
        console.log(dropZoneId);
    });//end of add eventlistener

    //drag over
    element.addEventListener('dragover',(drgOverEvt)=>{
        drgOverEvt.preventDefault();
    })
})