const text=document.querySelector('.text')
const btn=document.querySelector('.btn')
const check=document.querySelectorAll('.check')
const objCadena={
	cmi:"abcdefghijklmnopqrstuvwxyz",
	cmy:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	cn:"12345678901234567890"
}
let cadena=objCadena["cmy"]+objCadena["cn"]+objCadena["cmi"]
let num=1
for(let i=0;i<check.length;i++){
	check[i].addEventListener('click',function(){
		cdn=objCadena[this.nextElementSibling.id]
		if(this.checked){cadena+=cdn}
		else{cadena=cadena.replace(new RegExp(cdn,"g"),'')}
	})
}
btn.addEventListener('click',()=>{
	text.value='',num=1
	while(num){
		num++
		let x=Math.floor(Math.random()*cadena.length)
		text.value+=cadena[x]
		if(num>12){num=0}
	}
})