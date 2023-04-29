const confirmB = document.querySelector('.confrim')
const pass = document.getElementById('pass')
const con = document.getElementById('con')
const warning = document.getElementById('warning')
warning.textContent=""
const btn = document.getElementById('btnJ')
    

con.addEventListener('input', ()=>{
  if (pass.value !== con.value) {
    warning.textContent= "*Passwords do not match"
    warning.style.color="red"
    
  }else{
    warning.textContent=""
    warning.style.color="green"
  }
})
pass.addEventListener('input', ()=>{
  if (pass.value !== con.value) {
    warning.textContent= "*Passwords do not match"
    warning.style.color="red"
    
  }else{
    warning.textContent=""
    warning.style.color="green"
  }
})


