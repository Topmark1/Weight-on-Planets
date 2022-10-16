
let planet = document.querySelector('#planetli')
let mass = document.querySelector('input')
let calculate = document.querySelector('button')

calculate.addEventListener('click',()=>{
main = document.querySelector('.out')
main.innerHTML =''
main.style.cssText ='gap:10px;height:400px;width:700px;margin:30px;justify-content:center;background-color:rgba(220, 190, 35, 0.8)'
let image = document.createElement('img')
image.style.cssText ='margin:23px 0px 23px 0px'
let declareAns = document.createElement('div')
declareAns.style.cssText ='height:150px;width:360px;margin:100px 0px 0px 0px;background-color:rgba(88, 76, 13, 0.9);text-align:center;line-height:60px;font-size:20px;color:white'
let weigthAns = document.createElement('div')
weigthAns.style.cssText ='line-height:88px;display:flex;margin:-15px 0px 0px 130px;justify-content:center;border-radius:50%;height:100px;width:100px;background-color:rgba(220, 190, 35, 0.7);text-align:center;font-size:30px;font-weight:bold;color:black'

let PlanetArr = ['mercury','venus','earth','mars','jupiter','uranus','saturn','neptune','pluto']
let Planetgra = [0.38,0.9,1,0.38,2.53,0.89,1.07,1.14,0.062]
let planetImg = ['mercury.PNG','venus.PNG','earth.PNG','mars.PNG','jupiter.PNG','uranus.PNG','saturn.PNG','neptune.PNG','pluto.PNG']

for(i = 0;i<9;i++){
if(planet.value == PlanetArr[i] && typeof (mass.value*1) == 'number'){
image.src = planetImg[i]
declareAns.innerHTML = 'The weight of the Object on '+PlanetArr[i].bold()
weigthAns.innerHTML = (mass.value * Planetgra[i]).toFixed(2) + 'N'
declareAns.appendChild(weigthAns)
main.appendChild(image)
main.appendChild(declareAns)

} }//close block for the loop
})