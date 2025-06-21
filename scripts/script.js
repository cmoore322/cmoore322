function getCookie(name) {
    console.log(`Attempting to retrieve cookie: ${name}`);
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            console.log(`Cookie "${name}" found: ${c.substring(nameEQ.length, c.length)}`);
            return c.substring(nameEQ.length, c.length);
        }
    }
    console.log(`Cookie "${name}" not found.`);
    return null;
}


function setCookie(name, value, days) {
    console.log(`Setting cookie: ${name}=${value}, expires in ${days} days.`);
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    console.log("Cookie set successfully.");
}

// Function to add a new blog entry
function addNewBlogEntry() {
    console.log("addNewBlogEntry function called.");
    const blogEntriesContainer = document.getElementById('blog-entries');
    const newEntry = document.createElement('article');
    newEntry.classList.add('col-md-6', 'mb-4');
    newEntry.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h3 class="card-title">New Music</h3>
                <p class="card-text">The past few weeks have given us phenomenal tracks from artists such as "glaive" and "kmoe" who both put out EP's in the past couple weeks. Glaive delivered with experimental edm remixes from his recet tour while kmoe's 31 minute long "K1" delivers punchy and ethereal vocals and production throghout.</p>
                <small class="text-muted">Posted on June 16, 2025</small>
            </div>
        </div>
    `;
    blogEntriesContainer.prepend(newEntry); // Add to the beginning
    console.log("New blog entry added to DOM.");
}


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed. Document is ready!");

    
    addNewBlogEntry();  load

    
    const addBlogEntryButton = document.getElementById('addBlogEntryBtn');
    if (addBlogEntryButton) {
        addBlogEntryButton.addEventListener('click', function() {
            console.log("Add Blog Entry button clicked!");
            addNewBlogEntry(); 
            alert("A new blog entry has been added!");
        });
    } else {
        console.error("Button with ID 'addBlogEntryBtn' not found.");
    }

    
    console.warn("Developer Note: Remember to optimize images for faster loading times!");
    console.info("Info: The current date is " + new Date().toLocaleDateString());

    
    const visitorName = getCookie('visitorName');
    if (visitorName) {
        console.log(`Welcome back, ${visitorName}!`);
        
    } else {
        const hardCodedVisitor = "Guest User"; 
        setCookie('visitorName', hardCodedVisitor, 7); 
        console.log(`First time visitor. Set cookie with name: ${hardCodedVisitor}`);
    }
});