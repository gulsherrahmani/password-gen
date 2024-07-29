var tb1=document.getElementById('name')
var btn1=document.getElementById('btn')
var no="0123456789"
var ll="abcdefghijklmnopqrstuvwxyz"
var ul="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var ss="!@#$%&*"
var pas=""
var paslen=8
btn1.addEventListener('click',()=>{
    pas=pas+ul[Math.floor(Math.random() * ul.length)]
    pas=pas+ll[Math.floor(Math.random() * ll.length)]
    pas=pas+ss[Math.floor(Math.random() * ss.length)]
    pas=pas+no[Math.floor(Math.random() * no.length)]
    while(paslen>pas.length)
    {
    pas=pas+all[Math.floor(Math.random() * all.length)]
    }
    tb1.value=pas;
    pas=""
})
document.getElementById('cpb').addEventListener('click',()=>{
    tb1.select()
    document.execCommand('copy')
        alert("password copied : ")
    
})