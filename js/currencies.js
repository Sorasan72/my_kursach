const changeFrom = document.getElementById('change__from');
const changeTo = document.getElementById('change__to');

export function createOption(currencyArray){

    currencyArray.forEach( item => {
          const optFrom =  document.createElement('option');
          const optTo =  document.createElement('option');
          optFrom.textContent = item[1];
          optTo.textContent = item[1];
          optFrom.setAttribute('data-code', item[0]);
          optTo.setAttribute('data-code', item[0]);
          optFrom.setAttribute('class', 'from');
          optTo.setAttribute('class', 'to');
          changeFrom.append(optFrom);
          changeTo.append(optTo);
    });

}

//получение списка всех валют

fetch("https://v6.exchangerate-api.com/v6/934ed8bd54e45ea69b94dc35/codes")
    .then ((answer)=>{
        return answer.json();
    })
    .then(( data)=>{ console.log(data.supported_codes); createOption(data.supported_codes)})


const totalCurrency = document.createElement('p')
totalCurrency.setAttribute('class', 'total__currency')
const convertForm = document.querySelector(".currency__changer")
// export const convertBtn = () => convertForm.addEventListener('submit', () => {
//     const coeff = 


//     totalCurrency.textContent = `=${} ${optTo.getAttribute('data-code')}`
// })



