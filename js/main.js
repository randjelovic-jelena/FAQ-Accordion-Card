'use strict';

const accContainer=document.querySelector('.accordian-container');
const accItems=document.querySelectorAll('.accordian-item');


const closeItems=()=>{
	accItems.forEach(item=>{
		item.classList.remove('open');
	})
}

const showContent=(e)=>{
	
	let target=e.target.closest('.accordian-item');
	
	if(target.classList.contains('open')){
		closeItems();
		target.classList.remove('open');
	}else{
	
		closeItems();
		target.classList.add('open');
	}
}
accContainer.addEventListener('click',showContent);

