const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggler");
// show sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='block';
})

// close sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='none';
})

// change Theme
themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent=`<td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStauts}</td>
                    <td class="${order.shipping==='Declined' ? 'danger' : order.shipping==='Pending' ? 'waring' : 'primary'}">${order.shipping}></td>
                    <td class="primary">Details</td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table>tbody').appendChild(tr);
    console.log(tr);
})