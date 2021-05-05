
// MENU TOGGLE
    const d = document;
d.addEventListener("click", e => {
  if(e.target.matches(".menu-btn") || e.target.matches(".menu-btn >*") ){
    d.querySelector(".menu-wrapper").classList.toggle("active")
  }
    if(e.target.matches(".menu-x") || e.target.matches(".menu-x >*") ){
    d.querySelector(".menu-wrapper").classList.toggle("active")
  }
    if(e.target.matches(".menu-wrapper ul li a ")  ){
    d.querySelector(".menu-wrapper").classList.toggle("active")
  }
})

// ANIMETION  TRIGGER

const observer = new IntersectionObserver(entries=>{
 entries.forEach( entrie => {
   if(entrie.intersectionRatio > 0){
     entrie.target.style.animation= `${entrie.target.dataset.anim} 1s linear ${entrie.target.dataset.delay} forwards`;
    
     observer.unobserve(entrie.target)
   }
 })
})
let $animetes = d.querySelectorAll("[data-anim]")

$animetes.forEach(entries => {
  observer.observe(entries)
} )

// FORM VALIDATION

    function contactForm() {
      const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form *[required]");

      $inputs.forEach(input => {
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
      })

      d.addEventListener('keyup', (e) => {
        if (e.target.matches(".contact-form [required]")) {
          let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
          if (pattern && $input.value !== "") {
            let regex = new RegExp(pattern);
            return !regex.exec($input.value) ? d.getElementById($input.name).classList.add("is-active") :
              d.getElementById($input.name).classList.remove("is-active");
          }
          if (!pattern) {
            return $input.value === "" ? d.getElementById($input.name).classList.add("is-active") :
              d.getElementById($input.name).classList.remove("is-active");
          }
        }
      });
    }
   d.addEventListener("DOMContentLoaded", contactForm)
