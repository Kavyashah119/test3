// Fetch the JSON data
fetch('job_data.json')
  .then(response => response.json())
  .then(data => {
    // Get the job roles array from the JSON data
    const jobRoles = data.job_roles;

    // Get the HTML element to display job data
    const jobListElement = document.getElementById('jobList');

    // Loop through each job role and create HTML elements
    jobRoles.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.innerHTML = `
       
        <div class="u-accordion-item u-accordion-item-1">
                      <a class="u-accordion-link u-active-grey-5 u-button-style u-palette-5-light-3 u-text-active-palette-3-base u-text-body-color u-accordion-link-1" id="link-accordion-7c0e" aria-controls="accordion-7c0e" aria-selected="false">
                        <span class="u-accordion-link-text">${job.role}</span><span class="u-accordion-link-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 426.66667 426.66667" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-ce7e"></use></svg><svg class="u-svg-content" viewBox="0 0 426.66667 426.66667" id="svg-ce7e"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path></svg></span>
                      </a>
                      <div class="u-accordion-pane u-border-2 u-border-grey-75 u-container-style u-white u-accordion-pane-1" id="accordion-7c0e" aria-labelledby="link-accordion-7c0e">
                        <div class="u-container-layout u-valign-top u-container-layout-2">
                          <ul class="u-custom-list u-text u-text-2">
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Position : ${job.role}
                            </li>
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Location : ${job.location}
                            </li>
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Education : ${job.education}
                            </li>
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Experience : ${job.work_experience}
                            </li>
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Salary - ${job.salary}
                            </li>
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Job Description - ${job.job_description}
                            </li>
                            <li>
                              <div class="u-list-icon">
                                <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">–</div>
                              </div>Must Have Skills - ${job.skills}
                            </li>
                          </ul>
                          <a href="mailto:krishnaenterprise024@gmail.com?subject=Attaching%20my%20CV%20for%20${job.role}" class="u-btn u-btn-round u-button-style u-hover-palette-4-base u-palette-3-base u-radius-50 u-btn-1">Apply NOW</a>
                        </div>
                      </div>
                    </div>
      `;
      jobListElement.appendChild(jobElement);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
