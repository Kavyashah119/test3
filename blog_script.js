// Function to fetch JSON data and display blogs
async function fetchAndDisplayBlogs() {
    try {
      const response = await fetch('blog_data.json');
      const data = await response.json();
      const blogContainer = document.getElementById('blogList');

      // Loop through each blog entry and create HTML structure
      data.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog-entry';

        blogElement.innerHTML = `

        <div class="u-align-left u-container-style u-layout-cell u-left-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-1" >
       
        <div class="u-container-layout u-valign-top u-container-layout-1">
                  <img class="u-expanded-width u-image u-image-1" src="${blog.photo}" alt="Blog Photo">
                  <h3 class="u-heading-font u-text u-text-3">${blog.heading}</h3>
                  <h4 class="u-heading-font u-text u-text-grey u-text-4">${blog.date}</h4>
                  <p class="u-text u-text-font u-text-5">${blog.text}</p>
                </div>
        `;

        blogContainer.appendChild(blogElement);
      });
    } catch (error) {
      console.error('Error fetching or displaying blogs:', error);
    }
  }

  // Call the function to fetch and display blogs
  fetchAndDisplayBlogs();





