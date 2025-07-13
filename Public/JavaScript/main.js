







const handleDetailsPage = (data)=> {
         
     const DivJobs = document.querySelectorAll(".job-div");

            // const details_content = document.querySelector(".detials-content");
            // const job_header = document.querySelector(".job-header");
            // const footer_content = document.querySelector(".footer-content");

     


            DivJobs.forEach((Element, index)=> {
                  localStorage.setItem("element",Element);
                  let storedElement = localStorage.getItem("element");
                  console.log("stored element", storedElement);
                let view_job = data.find((_, i)=> i === index);



                Element.addEventListener("click", ()=> {

                    localStorage.setItem("selectedJob", JSON.stringify(view_job));

                            // job_header.innerHTML = `
                            //     <div class="logo">
                            //         <img src="${view_job.logo}" alt="">
                            //     </div>
                            //         <div class="txt">
                            //             <strong>${view_job.company}</strong>
                            //             <p>scoot.com</p>
                            //         </div>

                            //             <a href="${view_job.website}" class="details-btn">Company Site</a>
                            //     `

                            //     details_content.innerHTML = `
                            //         <div class="job-desc">
                            //                 <div class="flex">
                            //                     <p>${view_job.postedAt}</p>
                            //                     <li>${view_job.contract}</li>
                            //                 </div>

                            //                 <div class="job-txt">
                            //                     <h1>${view_job.position}</h1>
                            //                     <a href="${view_job.apply}" class="details-btn"> Apply Now</a>
                            //                 </div>
                            //                 <p class="location">${view_job.location}</p>
                            //             </div>

                            //             <article>
                            //                 <p>${view_job.description}</p>
                            //             </article>

                            //             <ul class="info-one"> 
                            //                 <strong>Requirements</strong>
                            //                 <p>${view_job.requirements.content}</p>
                                        
                            //                 ${view_job.requirements.items.map(item => `<li>${item}</li>`).join('')}
                            //             </ul>
                            //             <ol class="info-two"> 
                            //                 <strong>What You Will Do</strong>
                            //                 <p>${view_job.role.content}</p>
                                
                            //                 ${view_job.role.items.map(item => `<li>${item}</li>`).join('')}
                            //             </ol>
                                
                                
                            //     `
                            //         footer_content.innerHTML = `
                            //         <div class="position">
                                
                            //             <h1 >${view_job.position}</h1>
                            //                     <p>${view_job.location}</p>
                            //                 </div>
                            //                 <a href="${view_job.apply}" class="details-btn">Apply Now</a>
                            //                 </div>
                            //         `
    });
            
                    
    
    })

    }



       const renderJobs = (records)=> {
              const Jobs_section = document.querySelector(".jobs-section");
            let jobHtml = ""
              records.forEach((job)=> {
              
                            jobHtml += `
                            <div class="job-div">
                                <a href="component.html" target="_self">
                                    <div class="job-logo" style="background:${job.logoBackground}"> <img src=${job.logo} alt=""></div>
                                        <div class="time-job-type">
                                            <p>${job.postedAt}</p>
                                            <li>${job.contract}</li>
                                        </div>
                                        <div class="position">
                                            <h1>${job.position}</h1>
                                            <p>${job.company}</p>
                                        </div>
                                        <strong>${job.location}</strong>
                                        </a>
                                </div>
                            `
                })

          
              if(!Jobs_section) {
                    console.error("Critical elements not found in DOM");
                    return;
              } 
              
            Jobs_section.innerHTML = jobHtml;
                   handleDetailsPage(records);
            }







        
                const display_jobs = (records)=> {

        const Jobs_section = document.querySelector(".jobs-section");
     const InputTxt = document.querySelector(".input-txt")

     function debouce (fn, delay) {
        let timeoutId;

        return function(...args) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
     }


     const handleSearchingJobs = () => {
    const Div_jobs = document.getElementsByClassName("job-div");
    let inputValue = InputTxt.value.toLowerCase();
    let matchFound = false;

    if(inputValue === "") {
        renderJobs(records);
        return;
    }


    for (let i = 0; i < Div_jobs.length; i++) {
        const jobText = Div_jobs[i].innerText.toLowerCase();
        if (!jobText.includes(inputValue)) {
            Div_jobs[i].style.display = "none";
        } else {
            Div_jobs[i].style.display = "block";
            matchFound = true;
        }
    }

    if (!matchFound) {
         Jobs_section.innerHTML = `<h1>Not Found</h1>`;
       setTimeout(()=> {
          Jobs_section.innerHTML = `<h1></h1>`;
             
                renderJobs(records)
       },2000);
       
       

    } 


 
};





    renderJobs(records)

    const debouncedSearch = debouce(handleSearchingJobs, 400);


    InputTxt?.addEventListener("keyup", debouncedSearch);




}


       





      





  fetch('data.json')
    .then(response => response.json())
    .then(data => {
        display_jobs(data)
    })
    .catch(error => console.error('Error loading JSON:', error));




    







