






const display_jobs = (records)=> {
    
  
      
const Jobs_section = document.querySelector(".jobs-section")
const InputTxt = document.querySelector(".input-txt")
const loadMore = document.getElementById("loadMore");




          const renderJobs = ()=> {
              records.map((job)=> {
                            Jobs_section.innerHTML += `
                            <div class="job-div">
                                
                                    <img src=${job.logo} alt="">
                                        <div class="time-job-type">
                                            <p>${job.postedAt}</p>
                                            <li>${job.contract}</li>
                                        </div>
                                        <div class="position">
                                            <h1>${job.position}</h1>
                                            <p>${job.company}</p>
                                        </div>
                                        <strong>${job.location}</strong>
                                </div>
                            `
                })
          }

            renderJobs()




           
     const handleSearchingJobs = () => {
    const Div_jobs = document.getElementsByClassName("job-div");
    let inputValue = InputTxt.value.toLowerCase();
    let matchFound = false;

    for (let i = 0; i < Div_jobs.length; i++) {
        const jobText = Div_jobs[i].innerHTML.toLowerCase();
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
                inputValue = ""
                renderJobs()
       },1000);
       
       

    } else {
      renderJobs()
    }


    return inputValue = ""
};



InputTxt.addEventListener("keyup", handleSearchingJobs);

 }











fetch('data.json')
  .then(response => response.json())
  .then(data => {

    console.log(data); // Use your JSON data here
    display_jobs(data)
  })
  .catch(error => console.error('Error loading JSON:', error));

