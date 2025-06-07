document.addEventListener('DOMContentLoaded', () => {
  // Navigation functionality
  const buttons = document.querySelectorAll('[data-section]');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('data-section');
      
      // Hide all sections
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Remove active class from all nav buttons
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Show the selected section
      document.getElementById(sectionId).classList.add('active');
      
      // Add active class to the clicked nav button (if it's a nav button)
      if (button.classList.contains('nav-btn')) {
        button.classList.add('active');
      }
    });
  });

  // Show the home section by default
  document.getElementById('home').classList.add('active');

  // Certificates interactivity
  const certificateButtons = document.querySelectorAll('.certificate-btn');

  certificateButtons.forEach(button => {
    button.addEventListener('click', () => {
      const certificateId = button.getAttribute('data-certificate');
      const certificateImage = document.getElementById(certificateId);

      // Toggle display of the certificate image
      if (certificateImage.style.display === 'none' || certificateImage.style.display === '') {
        // Hide all other certificate images
        document.querySelectorAll('.certificate-image').forEach(img => {
          img.style.display = 'none';
        });
        // Show the clicked certificate image
        certificateImage.style.display = 'block';
      } else {
        certificateImage.style.display = 'none';
      }
    });
  });
});