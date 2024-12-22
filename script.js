let donate1 = document.getElementById('donate1');
let donate2 = document.getElementById('donate2');
let donate3 = document.getElementById('donate3');


const btn1 = document.getElementById('btn1').addEventListener('click',handleBtn1);
const btn2 = document.getElementById('btn2').addEventListener('click',handleBtn2);
const btn3 = document.getElementById('btn3').addEventListener('click',handleBtn3);

const my_modal_1 = document.getElementById('my_modal_1')

function handleBtn1 (){
    const input1 = document.getElementById('input1').value;
    document.getElementById('input1').value ='';
    if(isNaN(input1) || input1 <1){
        alert('invalid donation amount')
       
        return
    }
    let donate = document.getElementById('totall_donate');
    donate.innerText = Number(donate.innerText) - input1 ;
    donate1.innerText = Number(input1)+ Number(donate1.innerText);
    
        const parentHistory = document.getElementById('parentHistory');
        
        const div = document.createElement('div');
        div.classList.add('bg-[#B4F461]','border-slate-500','border-2','rounded-lg', 'p-10', 'mb-10')
        const h1 = document.getElementById('h1')
        const date = new Date()
        div.innerHTML = `
            <p>${input1} taka is donated for  ${h1.innerText}</p>
            <p>${date}</p>
        `
        parentHistory.appendChild(div);
        
               
           
                parentHistory.classList.add('hidden')
                alert('Congrats! You have donated for mankind')
        // const modal = document.getElementById('modal');
        // modal.classList.remove('hidden');
        // main.classList.add('hidden')
    
      
// 
        

}
// my_modal_1.classList.remove('hidden')    
function handleBtn2 (){
    const input2 = document.getElementById('input2').value;
    
    document.getElementById('input2').value ='';

    if(isNaN(input2) || input2 <1){
        alert('Invalid donation amount')
        return
    }
    let donate = document.getElementById('totall_donate');
    donate.innerText = Number(donate.innerText) - input2 ;
    donate2.innerText = Number(input2)+ Number(donate2.innerText);
    
    
        const parentHistory = document.getElementById('parentHistory');
        const i2 = document.getElementById('input2')
        const div = document.createElement('div');
        div.classList.add('bg-[#B4F461]','border-slate-500','border-2','rounded-lg', 'p-10', 'mb-10')
        const h2 = document.getElementById('h2')
        const date = new Date()
        div.innerHTML = `
            <p>${input2} taka is donated for ${h2.innerText}</p>
            <p>${date}</p>
        `
        parentHistory.appendChild(div)
        parentHistory.classList.add('hidden')
        alert('Congrats! You have donated for mankind')
}
function handleBtn3 (){
    const input3 = document.getElementById('input3').value;
    document.getElementById('input3').value ='';
    if(isNaN(input3) || input3 <1){
        alert('Invalid donation amount')
        return
    }
    let donate = document.getElementById('totall_donate');
    donate.innerText = Number(donate.innerText) - input3 ;
    donate3.innerText = Number(input3)+ Number(donate3.innerText);

        const parentHistory = document.getElementById('parentHistory');
        const div = document.createElement('div');
        div.classList.add('bg-[#B4F461]','border-slate-500','border-2','rounded-lg', 'p-10', 'mb-10')
        const h3 = document.getElementById('h3')
        const date = new Date()
        div.innerHTML = `
            <p>${input3} taka is donated for ${h3.innerText}</p>
            <p>${date}</p>
        `
        parentHistory.appendChild(div)
        parentHistory.classList.add('hidden')
        alert('Congrats! You have donated for mankind')
}
// Histry poaret 
const main = document.getElementById('main')
const parentHistory = document.getElementById('parentHistory')
const donation = document.getElementById('donation')
const history = document.getElementById('history')
document.getElementById('donation').addEventListener('click', function(){
    parentHistory.classList.add('hidden')
    main.classList.remove('hidden')
    //
   

    donation.classList.remove('bg-white')
    donation.classList.add('bg-[#B4F461]')
    history.classList.remove('bg-[#B4F461]')
    history.classList.add('bg-white');

})
document.getElementById('history').addEventListener('click',function(){
    
    main.classList.add('hidden');
    parentHistory.classList.remove('hidden');


    donation.classList.remove('bg-[#B4F461]')
    donation.classList.add('bg-white')
    history.classList.remove('bg-white')
    history.classList.add('bg-[#B4F461]');
    
})