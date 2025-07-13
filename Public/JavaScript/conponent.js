


const DisplayJobDetailsPage = ()=> {
    
            const details_content = document.querySelector(".detials-content");
            const job_header = document.querySelector(".job-header");
            const footer_content = document.querySelector(".footer-content");
    const view_job = JSON.parse(localStorage.getItem("selectedJob"));

        job_header.innerHTML = `
                                <div class="logo" style="background:${view_job.logoBackground}">
                                    <img src="${view_job.logo}" alt="">
                                </div>
                                    <div class="txt">
                                        <strong>${view_job.company}</strong>
                                        <p>scoot.com</p>
                                    </div>

                                        <a href="${view_job.website}" class="details-btn">Company Site</a>
                                `

                                details_content.innerHTML = `
                                    <div class="job-desc">
                                            <div class="flex">
                                                <p>${view_job.postedAt}</p>
                                                <li>${view_job.contract}</li>
                                            </div>

                                            <div class="job-txt">
                                                <h1>${view_job.position}</h1>
                                                <a href="${view_job.apply}" class="details-btn"> Apply Now</a>
                                            </div>
                                            <p class="location">${view_job.location}</p>
                                        </div>

                                        <article>
                                            <p>${view_job.description}</p>
                                        </article>

                                        <ul class="info-one"> 
                                            <strong>Requirements</strong>
                                            <p>${view_job.requirements.content}</p>
                                        
                                            ${view_job.requirements.items.map(item => `<li>${item}</li>`).join('')}
                                        </ul>
                                        <ol class="info-two"> 
                                            <strong>What You Will Do</strong>
                                            <p>${view_job.role.content}</p>
                                
                                            ${view_job.role.items.map(item => `<li>${item}</li>`).join('')}
                                        </ol>
                                
                                
                                `
                                    footer_content.innerHTML = `
                                    <div class="position">
                                
                                        <h1 >${view_job.position}</h1>
                                                <p>${view_job.location}</p>
                                            </div>
                                            <a href="${view_job.apply}" class="details-btn">Apply Now</a>
                                            </div>
                                    `
}


DisplayJobDetailsPage();