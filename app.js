const section1=document.querySelector(".section1");
const section2=document.querySelector(".section2");
const hamberger=document.querySelector(".hamberger")

section1.addEventListener("mouseover",() => {
    section1.classList.remove("sectionMinimal");
    section2.classList.remove("sectionHover")
    section1.classList.add("sectionHover");
    section2.classList.add("sectionMinimal");
})

section2.addEventListener("mouseover",() =>{
    section1.classList.remove("sectionHover");
    section2.classList.remove("sectionMinimal")
    section1.classList.add("sectionMinimal");
    section2.classList.add("sectionHover")
})

hamberger.addEventListener("click",() =>{
    hamberger.classList.toggle("active");
   
})
